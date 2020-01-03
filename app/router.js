'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/api/categories', controller.categories.index);

  router.post('/api/timelineList', controller.timeline.index);

  router.post('/api/authorList', controller.timeline.author);

  router.get('/api/bookrecList', controller.timeline.bookRecommend);

  router.get('/api/articleDetail', controller.timeline.articleDetail);





};
