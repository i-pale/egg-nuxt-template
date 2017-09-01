module.exports = (options,app) => {
  return function*(next) {
      yield next;
      this.res.data=this.body;
      return new Promise((resolve, reject) => {
      app.nuxt.render(this.req, this.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  };
};