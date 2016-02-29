import {Component, Input} from 'angular2/core';
import {RenderService} from '../../services/renderService';

@Component({
    selector: 'modifier',
    templateUrl: 'app/components/modifier/modifier.html',
    providers: [RenderService]
})
export class ModifierComponent {
    public scale: number = 1;

    constructor(private _renderService: RenderService) {
    }

    @Input()
    public set container(value: HTMLElement) {
        if (value)
            this._renderService.init(value);
    }

    public addStars(stars: number) {
        this._renderService.addStars(stars);
    }

    public updateScale(newScale: number) {
        this._renderService.updateScale(newScale);
    }
}
