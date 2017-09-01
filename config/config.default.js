'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1504144548125_2940';
  config.middleware=[ 'nuxt' ];
  // add your config here

  return config;
};
