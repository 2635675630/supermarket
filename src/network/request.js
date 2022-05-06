import axios from 'axios'
export function request(config) {
    //创建axios实例
    const instance1 = axios.create({
            baseURL: "http://123.207.32.32:8000",
            timeout: 5000
        })
        //axios拦截器
    instance1.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    instance1.interceptors.response.use(res => {
            return res
        }, err => {
            console.log(err)
        })
        //发送真正网络请求
    return instance1(config)
}

export function request2(config) {
    //创建axios实例
    const instance1 = axios.create({
            baseURL: "http://152.136.185.210:7878/api/hy66",
            timeout: 5000
        })
        //axios拦截器
    instance1.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    instance1.interceptors.response.use(res => {
            return res
        }, err => {
            console.log(err)
        })
        //发送真正网络请求
    return instance1(config)
}