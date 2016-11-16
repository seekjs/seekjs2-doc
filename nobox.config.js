/**
 * Created by likaituan on 16/10/19.
 */

var {requireJson,log} = require("ifun");
var myconfig = requireJson(`${__dirname}/my.config.js`);

module.exports = function (args) {
    var config = {
        static: {
            items: [{
                path: "/",
                dir: args.time ? `${__dirname}/dist` : __dirname
            }]
        },
        onPubBefore: function(cmd){
            //cmd(`myseek build sysPath=/data/github/seekjs/`);
        },
        pub:{
            packages: ["nobox.config.js", "node_modules", "dist"]
        },
        gzip: true,
        port: 2016
    };

    return config;
};