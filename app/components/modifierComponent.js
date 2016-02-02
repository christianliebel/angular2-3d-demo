System.register(['angular2/core', '../services/renderService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, renderService_1;
    var ModifierComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (renderService_1_1) {
                renderService_1 = renderService_1_1;
            }],
        execute: function() {
            ModifierComponent = (function () {
                function ModifierComponent(renderService) {
                    this.renderService = renderService;
                    this.scale = 1;
                }
                ModifierComponent.prototype.addStars = function (stars) {
                    this.renderService.addStars(stars);
                };
                ModifierComponent.prototype.updateScale = function (newScale) {
                    this.renderService.updateScale(newScale);
                };
                ModifierComponent = __decorate([
                    core_1.Component({
                        selector: 'modifier',
                        template: "\n    <div id=\"modifier\">\n        <h3>Universe Configurator</h3>\n        <label>\n            Scale:\n            <input type=\"number\" [ngModel]=\"scale\" (ngModelChange)=\"updateScale($event)\" min=\"1\" max=\"25\" />\n        </label>\n        <div>\n            Stars:\n            <button (click)=\"addStars(100)\">+100</button>\n            <button (click)=\"addStars(1000)\">+1000</button>\n            <button (click)=\"addStars(10000)\">+10000</button>\n        </div>\n    </div>",
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [renderService_1.RenderService])
                ], ModifierComponent);
                return ModifierComponent;
            })();
            exports_1("ModifierComponent", ModifierComponent);
        }
    }
});
//# sourceMappingURL=modifierComponent.js.map