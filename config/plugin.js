'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // security: {
  //   xframe: {
  //     enable: false,
  //   },
  //   csrf: {
  //     enable: false
  //   },
    
  // },
  cors: {
    enable: true,
    package: 'egg-cors',
  }
  
};
