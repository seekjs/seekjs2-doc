/**
 * Created by likaituan on 15/8/9.
 */

seekjs.config({
    ns:{
        data: "/data/",
        util: "/utils/",
        css: {
            path: "/css/",
            type: ".css"
        },
        code: "/plugins/code/"
    }
});

require("css._tag");
require("css._class");

var app = require("sys.app");

app.config({
    js: "/js/",
    css: "/css/",
    tp: "/templates/",
    useAnimate: true
});

app.viewEx = require("util.viewEx");
app.pipeEx = require("util.pipeEx");

app.usePlugin("seekjs-plugin-mask");
app.usePlugin("seekjs-plugin-dialog");

var Lang = require("util.Lang");

app.onInit = function(view){
    window.$Lang = Lang.getLang(Lang, localStorage.lang);
    window.$lang = view.lang = Lang.getLang(view.$lang, localStorage.lang);
};

if(!localStorage.lang){
    localStorage.lang = "cn";
}

app.init("home");
