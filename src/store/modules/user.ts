/*
 * @Date: 2022-04-15 17:30:16
 * @LastEditors: YeKe
 * @LastEditTime: 2022-09-29 16:27:35
 * @FilePath: \vue3-vite-ts-admin\src\store\modules\user.ts
 */
import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { CustomSuccessData1 } from 'axios'
interface aaa {
    code?: string | number,
    data?: object,
    token?: string
}
const user = {
    state: {
        token: getToken(),
        name: '',
        avatar: '',
        roles: [],
        permissions: []
    },

    mutations: {
        SET_TOKEN: (state: { token: string }, token: string) => {
            state.token = token
        },
        SET_NAME: (state: { name: string }, name: string) => {
            state.name = name
        },
        SET_AVATAR: (state: { avatar: any }, avatar: any) => {
            state.avatar = avatar
        },
        SET_ROLES: (state: { roles: [] }, roles: []) => {
            state.roles = roles
        },
        SET_PERMISSIONS: (state: { permissions: any }, permissions: any) => {
            state.permissions = permissions
        }
    },

    actions: {
        // 登录
        Login({ commit }: any, userInfo: { username: string; password: string; code: string; uuid: string }){
            return new Promise<void>((resolve, reject) => {

                login(userInfo).then((res) => {
                    setToken(res.token!)
                    // commit('SET_TOKEN', res.token)
                    resolve()
                })
            })
        },

        // // 获取用户信息
        // GetInfo({ commit, state }) {
        //     return new Promise((resolve, reject) => {
        //         getInfo().then(res => {
        //             const user = res.user
        //             const avatar = (user.avatar == "" || user.avatar == null) ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar;

        //             if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
        //                 commit('SET_ROLES', res.roles)
        //                 commit('SET_PERMISSIONS', res.permissions)
        //             } else {
        //                 commit('SET_ROLES', ['ROLE_DEFAULT'])
        //             }
        //             commit('SET_NAME', user.userName)
        //             commit('SET_AVATAR', avatar)
        //             resolve(res)
        //         }).catch(error => {
        //             reject(error)
        //         })
        //     })
        // },

        // // 退出系统
        // LogOut({ commit, state }) {
        //     return new Promise((resolve, reject) => {
        //         logout(state.token).then(() => {
        //             commit('SET_TOKEN', '')
        //             commit('SET_ROLES', [])
        //             commit('SET_PERMISSIONS', [])
        //             removeToken()
        //             resolve()
        //         }).catch(error => {
        //             reject(error)
        //         })
        //     })
        // },

        // // 前端 登出
        // FedLogOut({ commit }) {
        //     return new Promise(resolve => {
        //         commit('SET_TOKEN', '')
        //         removeToken()
        //         resolve()
        //     })
        // }
    }
}

export default user