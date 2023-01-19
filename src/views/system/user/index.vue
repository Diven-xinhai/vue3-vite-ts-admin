<!--
 * @Description: 用户管理
 * @Date: 2023-01-05 15:30:57
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-19 13:52:24
 * @FilePath: \vue3-vite-ts-admin\src\views\system\user\index.vue
-->
<template>
  <div class="user-wrap">
    <div class="query-box">
      <el-form ref="queryFormRef" :model="queryForm" label-width="80px">
        <el-row :gutter="15" justify="start">
          <el-col :lg="6" :md="6" :sm="12">
            <el-form-item label="用户名称" prop="userName">
              <el-input
                v-model="queryForm.userName"
                placeholder="请输入用户名称"
              />
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="6" :sm="12">
            <el-form-item label="手机号码" prop="phone">
              <el-input
                v-model="queryForm.phone"
                placeholder="请输入手机号码"
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
      <el-button type="primary" v-hasPermissions="['system:user:add']">
        添加
      </el-button>
    </div>
    <div class="table-style">
      <el-table
        :data="tableData.data"
        v-loading="loading"
        element-loading-text="Loading..."
      >
        <el-table-column prop="name" align="center" label="姓名" />
        <el-table-column prop="phone" align="center" label="手机号" />
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
  </div>
</template>

<script setup lang="ts" name="User">
import { onMounted, onActivated, ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { getUserList } from "@/api/user";
import { useRouter } from "vue-router";
const router = useRouter();
interface UserList {
  id: string;
  phone: string;
  name: string;
  status: string;
  statusLabel?: string;
}
onMounted(() => {
  console.log("onMounted：执行");
  getUserListData();
});

onActivated(() => {
  console.log("onActivated：页面被缓存了！");
});
const loading = ref(true);
const queryFormRef = ref<FormInstance>();
const queryForm = reactive({
  userName: "",
  phone: "",
  status: "0",
});

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

const getUserListData = async () => {
  const res = await getUserList();
  if (res.code != 200) return;
  tableData.data = res.data.map((item: UserList) => {
    item.statusLabel = statusOptions.filter(
      (v) => v.value == item.status
    )[0].label;
    return item;
  });
  loading.value = false;
};

const queryList = () => {
  getUserListData();
};

const resetForm = (formEl: FormInstance | undefined) => {
  // 注意：el-from-item 需要加上prop属性
  if (!formEl) return;
  formEl.resetFields();
};

const handleEdit = (index: number, row: UserList) => {
  console.log(index, row);
  router.push({ path: `/system/user-auth/${row.id}` });
};
const handleDelete = (index: number, row: UserList) => {
  console.log(index, row);
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
}
</style>
