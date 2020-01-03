const Service = require('egg').Service;

class CategoriesService extends Service {
  async index() {
    const headers = {
      "X-Juejin-Src": "web"
    }
    
    const result = await this.ctx.curl('https://gold-tag-ms.juejin.im/v1/categories', {
      headers,
      method: "GET",
      dataType: 'json',
    })
    return result
  }
}

module.exports = CategoriesService;