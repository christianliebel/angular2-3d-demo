///<reference path="../node_modules/angular2/typings/browser.d.ts" />
System.register(['angular2/platform/browser', './components/app/app', 'rxjs/Rx'], function(exports_1) {
    var browser_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, []);
        }
    }
});
//# sourceMappingURL=boot.js.map