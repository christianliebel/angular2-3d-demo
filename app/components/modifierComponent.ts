import {Component} from 'angular2/core';
import {RenderService} from '../services/renderService';

@Component({
    selector: 'modifier',
    template: `
    <div id="modifier">
        <h3>Universe Configurator</h3>
        <label>
            Scale:
            <input type="number" [ngModel]="scale" (ngModelChange)="updateScale($event)" min="1" max="25" />
        </label>
        <div>
            Stars:
            <button (click)="addStars(100)">+100</button>
            <button (click)="addStars(1000)">+1000</button>
            <button (click)="addStars(10000)">+10000</button>
        </div>
    </div>`,
    providers: [RenderService]
})
export class ModifierComponent {
    public scale: number = 1;

    constructor(private _renderService: RenderService) {
    }

    public addStars(stars: number) {
        this._renderService.addStars(stars);
    }

    public updateScale(newScale: number) {
        this._renderService.updateScale(newScale);
    }
}
