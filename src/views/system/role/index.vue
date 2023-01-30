<!--
 * @Description: 角色管理
 * @Date: 2023-01-05 15:30:57
 * @LastEditors: YeKe
 * @LastEditTime: 2023-01-30 16:08:33
 * @FilePath: \vue3-vite-ts-admin\src\views\system\role\index.vue
-->
<template>
  <div class="user-wrap">
    <div class="query-box">
      <el-form ref="queryFormRef" :model="queryForm" label-width="80px">
        <el-row :gutter="15" justify="start">
          <el-col :lg="6" :md="6" :sm="12">
            <el-form-item label="角色名称" prop="roleName">
              <el-input
                v-model="queryForm.roleName"
                placeholder="请输入角色名称"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="6" :sm="12">
            <el-form-item label="权限字符" prop="roleKey">
              <el-input
                v-model="queryForm.roleKey"
                placeholder="请输入权限字符"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="6" :sm="12">
            <el-form-item label="状态" prop="status">
              <el-select v-model="queryForm.status" placeholder="请选择状态">
                <el-option
                  v-for="item in statusOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="4" :md="6" :sm="12">
            <div class="search-btns">
              <el-button class="btn" type="primary" @click="queryList()"
                >搜索</el-button
              >
              <el-button class="btn" @click="resetForm(queryFormRef)"
                >重置</el-button
              >
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="operation-btn">
      <el-button
        type="primary"
        @click="add"
        v-hasPermissions="['system:user:add']"
      >
        添加
      </el-button>
    </div>
    <div class="table-style">
      <el-table
        :data="tableData.data"
        v-loading="loading"
        element-loading-text="Loading..."
      >
        <el-table-column prop="id" align="center" label="角色编号" />
        <el-table-column prop="roleName" align="center" label="角色名称" />
        <el-table-column prop="roleKey" align="center" label="权限字符" />
        <el-table-column prop="statusLabel" align="center" label="状态" />
        <el-table-column align="center" label="操作" width="200px">
          <template #default="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
              v-hasPermissions="['system:user:edit']"
              >修改</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-hasPermissions="['system:user:remove']"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="open" :title="dialogTitle" width="600px">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm"
        size="default"
        status-icon
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="字符权限" prop="roleKey">
          <el-input v-model="form.roleKey" placeholder="请输入字符权限" />
        </el-form-item>
        <el-form-item label="角色顺序" prop="roleSort">
          <el-input-number
            v-model="form.roleSort"
            controls-position="right"
            :min="0"
          />
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in statusOptions"
              :key="dict.value"
              :label="dict.value"
              >{{ dict.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单权限">
          <el-checkbox
            v-model="menuExpand"
            @change="handleCheckedTreeExpand($event)"
            >展开/折叠</el-checkbox
          >
          <el-checkbox
            v-model="menuNodeAll"
            @change="handleCheckedTreeNodeAll($event)"
            >全选/全不选</el-checkbox
          >
          <el-checkbox
            v-model="form.menuCheckStrictly"
            @change="handleCheckedTreeConnect($event)"
            >父子联动</el-checkbox
          >
          <el-tree
            class="tree-border"
            :data="menuOptions"
            show-checkbox
            ref="menuRef"
            node-key="id"
            :check-strictly="!form.menuCheckStrictly"
            empty-text="加载中，请稍候"
            :props="{ label: 'label', children: 'children' }"
          ></el-tree>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="form.remark"
            maxlength="30"
            placeholder="请输入内容"
            show-word-limit
            type="textarea"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="open = false">取 消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="User">
import { onMounted, onActivated, ref, reactive, toRefs } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { FormInstance, FormRules, ElTree } from "element-plus";
import type Node from "element-plus/es/components/tree/src/model/node";
import { getRoleList } from "@/api/role";
import { menuThree } from "@/api/menuThree";
import { useRouter } from "vue-router";
const router = useRouter();
interface UserList {
  id: string;
  roleKey: string;
  roleName: string;
  status: string;
  statusLabel?: string;
}
interface QueryForm {
  roleKey: string;
  roleName: string;
  status: string;
}
interface Data {
  queryForm: QueryForm;
  form: any;
  rules: FormRules;
}
interface MenuOptionsItem {
  id: number;
  label: string;
  children?: MenuOptionsItem[];
}
onMounted(() => {
  console.log("onMounted：执行");
  getRoleListData();
  getMenuThree();
});

onActivated(() => {
  console.log("onActivated：页面被缓存了！");
});
const loading = ref(true);
const open = ref(false);
const dialogTitle = ref("添加角色");
const queryFormRef = ref<FormInstance>();
const menuOptions = ref<MenuOptionsItem[]>([]);
const menuExpand = ref(false);
const menuNodeAll = ref(false);
const menuRef = ref<InstanceType<typeof ElTree>>();
const statusOptions = reactive([
  {
    value: "0",
    label: "正常",
  },
  {
    value: "1",
    label: "停用",
  },
]);

let tableData = reactive({
  data: [] as UserList[],
});

const data = reactive<Data>({
  queryForm: {
    roleName: "",
    roleKey: "",
    status: "0",
  },
  form: {
    roleName: "",
    roleKey: "",
    status: "0",
    roleSort: 0,
    menuCheckStrictly: true,
    remark: "",
  },
  rules: {
    roleName: [
      { required: true, message: "角色名称不能为空", trigger: "blur" },
    ],
    roleKey: [{ required: true, message: "权限字符不能为空", trigger: "blur" }],
    roleSort: [
      { required: true, message: "角色顺序不能为空", trigger: "blur" },
    ],
  },
});
const { form, rules, queryForm } = toRefs(data);

/**
 * @description: 添加角色
 */
const add = () => {
  dialogTitle.value = "添加角色";
  open.value = true;
};

/**
 * @description: 获取角色列
 */
const getRoleListData = async () => {
  const res = await getRoleList();
  if (res.code != 200) return;
  tableData.data = res.data.map((item: UserList) => {
    item.statusLabel = statusOptions.filter(
      (v) => v.value == item.status
    )[0].label;
    return item;
  });
  loading.value = false;
};

/**
 * @description: 获取菜单树
 */
const getMenuThree = async () => {
  const res = await menuThree({});
  menuOptions.value = res.data as [];
};

const queryList = () => {
  getRoleListData();
};

/**
 * @description: 确认 添加/修改
 */
const submitForm = () => {
  open.value = false;
  ElMessage({
    message: "测试数据无法修改！",
    type: "warning",
  });
};

/**
 * @description: 数权限（展开/折叠）
 */
const handleCheckedTreeExpand = (value: any) => {
  let treeList = menuOptions.value;
  for (let i = 0; i < treeList.length; i++) {
    if (menuRef.value) {
      menuRef.value.store.nodesMap[treeList[i].id].expanded = value;
    }
  }
};

/**
 * @description: 树权限（全选/全不选）
 */
function handleCheckedTreeNodeAll(value: any) {
  menuRef.value!.setCheckedNodes(
    value ? (menuOptions.value as Node[]) : [],
    false
  );
}

/**
 * @description: 树权限（父子联动）
 */
function handleCheckedTreeConnect(value: any) {
  form.value.menuCheckStrictly = value ? true : false;
}

const resetForm = (formEl: FormInstance | undefined) => {
  // 注意：el-from-item 需要加上prop属性
  if (!formEl) return;
  formEl.resetFields();
};

const handleEdit = (index: number, row: UserList) => {
  console.log(index, row);
  dialogTitle.value = "修改角色";
  open.value = true;
  form.value = Object.assign(form.value, row);
};

const handleDelete = (index: number, row: UserList) => {
  console.log(index, row);
  ElMessageBox.confirm(`确认删除${row.roleName}?`, "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "warning",
        message: "测试数据无法删除！",
      });
    })
    .catch(() => {});
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.module.scss";
.user-wrap {
  padding: 15px 0;
  .query-box {
    width: 100%;
    // padding: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .el-form {
      width: 100%;
    }
    .search-btns {
      width: 100%;
      margin-left: 15px;
      display: flex;
      align-items: center;
    }
  }
  .operation-btn {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .table-style {
    width: 100%;
    margin-top: 15px;
    // padding: 15px;
  }
  .tree-border {
    margin-top: 5px;
    border: 1px solid #e5e6e7;
    background: #ffffff none;
    border-radius: 4px;
    width: 100%;
  }
}
</style>
