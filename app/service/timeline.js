const Service = require('egg').Service;

class TimelineService extends Service {
  // get list of article
  async index() {
    const { ctx } = this
    const data = {
      "operationName": "",
      "query": "",
      "variables": {
        "first": 40,
        "after": "4.51623178499449995",
        "order": "POPULAR"
      },
      "extensions": {
        "query": {
          "id": "21207e9ddb1de777adeaca7a2fb38030"
        }
      }
    }
    const headers = {
      'x-agent': 'Juejin/Web',
    }

    const result = await ctx.curl('https://web-api.juejin.im/query', {
      headers,
      method: "POST",
      // 
      contentType: 'json',
      dataType: 'json',
      data
    })

    return result.data
  }


  // get author list
  async author() {
    const { ctx } = this
    const data = { 
      "operationName": "", 
      "query": "", 
      "variables": { 
        "limit": 10, "excluded": [] 
      }, 
      "extensions": { 
        "query": { 
          "id": "b031bf7f8b17b1a173a38807136cc20e" 
        } 
      } 
    }
    const headers = {
      'x-agent': 'Juejin/Web',
    }

    const result = await ctx.curl('https://web-api.juejin.im/query', {
      headers,
      method: "POST",
      // 
      contentType: 'json',
      dataType: 'json',
      data
    })

    return result.data
  }


  async bookRecommend() {
    const { ctx } = this

    const result = await ctx.curl('https://xiaoce-timeline-api-ms.juejin.im/v1/getRecommendBooks', {
      // headers,
      method: "GET",

      dataType: 'json',
    })

    return result.data
  }

  

  async articleDetail() {
    const { ctx } = this

    const data = { 
      "src": "web",
      "type": "entry",
      "postId": "5e0cba76f265da5d4e27480c"
    }
    const result = await ctx.curl('https://post-storage-api-ms.juejin.im/v1/getDetailData', {
      // headers,
      method: "GET",
      data,
      dataType: 'json',
    })

    return result.data
  }


}


module.exports = TimelineService;