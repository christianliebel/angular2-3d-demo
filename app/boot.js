System.register(['angular2/platform/browser', './components/modifierComponent', './services/renderService'], function(exports_1) {
    var browser_1, modifierComponent_1, renderService_1;
    var APP_PROVIDERS;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (modifierComponent_1_1) {
                modifierComponent_1 = modifierComponent_1_1;
            },
            function (renderService_1_1) {
                renderService_1 = renderService_1_1;
            }],
        execute: function() {
            APP_PROVIDERS = [renderService_1.RenderService];
            browser_1.bootstrap(modifierComponent_1.ModifierComponent, [APP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map