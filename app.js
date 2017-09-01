const {Nuxt,Builder}=require("nuxt");
let config = require('./nuxt.config');
// Instantiate nuxt.js
const nuxt =new Nuxt(config);
if (config.dev) {
  const builder =new Builder(nuxt);
  builder.build().catch(e => {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}
module.exports = app => {
  app.beforeStart(function* () {
    app.nuxt=nuxt;
  });
};