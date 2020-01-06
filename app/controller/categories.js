'use strict';

const Controller = require('egg').Controller;

class CategoriesController extends Controller {
  async index() {
    const { ctx } = this;

    const result = await ctx.service.categories.index();
    ctx.body = result.data
  }
}

module.exports = CategoriesController;
