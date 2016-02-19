///<reference path="../node_modules/angular2/typings/browser.d.ts" />
System.register(['angular2/platform/browser', './components/modifierComponent', 'rxjs/Rx'], function(exports_1) {
    var browser_1, modifierComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (modifierComponent_1_1) {
                modifierComponent_1 = modifierComponent_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(modifierComponent_1.ModifierComponent, []);
        }
    }
});
//# sourceMappingURL=boot.js.map