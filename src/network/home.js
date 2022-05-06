import { request, request2 } from "./request";

function GetMultidata() {
    return request({
        url: '/home/multidata'
    })
}

function GetHomeGoods(type, page) {
    return request2({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}
export { GetMultidata, GetHomeGoods }