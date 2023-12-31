
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::post.post', {
  config:{
    find:{
      middlewares:['api::order.clerkauthcheck'],
      auth: false
    },
    create:{
      middlewares:['api::order.clerkauthcheck'],
      auth: false
    }
  }
});