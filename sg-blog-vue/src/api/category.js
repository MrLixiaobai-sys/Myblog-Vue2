import request from '@/utils/request'

// 查询分类列表
export function getCategoryList() {
    return request({
        url: '/category/getCategory',
        headers: {
          isToken: false
        },
        method: 'get'
    })
}
