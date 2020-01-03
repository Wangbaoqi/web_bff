'use strict';

const Controller = require('egg').Controller;

class TimelineController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(ctx.cookies, 'cookie');
    
    const result = await ctx.service.timeline.index();
    ctx.body = result
  }

  async author() {
    const { ctx } = this;
    
    const result = await ctx.service.timeline.author();
    ctx.body = result
  }

  async bookRecommend() {
    const { ctx } = this;
    
    const result = await ctx.service.timeline.bookRecommend();
    ctx.body = result
  }
  async articleDetail() {
    const { ctx } = this;
    
    const result = await ctx.service.timeline.articleDetail();
    ctx.body = result
  }
}

module.exports = TimelineController;
