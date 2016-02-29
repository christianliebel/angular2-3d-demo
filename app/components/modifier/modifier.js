System.register(['angular2/core', '../../services/renderService'], function(exports_1) {
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
                function ModifierComponent(_renderService) {
                    this._renderService = _renderService;
                    this.scale = 1;
                }
                Object.defineProperty(ModifierComponent.prototype, "container", {
                    set: function (value) {
                        if (value)
                            this._renderService.init(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                ModifierComponent.prototype.addStars = function (stars) {
                    this._renderService.addStars(stars);
                };
                ModifierComponent.prototype.updateScale = function (newScale) {
                    this._renderService.updateScale(newScale);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', HTMLElement), 
                    __metadata('design:paramtypes', [HTMLElement])
                ], ModifierComponent.prototype, "container", null);
                ModifierComponent = __decorate([
                    core_1.Component({
                        selector: 'modifier',
                        templateUrl: 'app/components/modifier/modifier.html',
                        providers: [renderService_1.RenderService]
                    }), 
                    __metadata('design:paramtypes', [renderService_1.RenderService])
                ], ModifierComponent);
                return ModifierComponent;
            })();
            exports_1("ModifierComponent", ModifierComponent);
        }
    }
});
//# sourceMappingURL=modifier.js.map