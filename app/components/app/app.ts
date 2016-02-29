import {Component} from 'angular2/core';
import {ModifierComponent} from '../modifier/modifier';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.html',
    directives: [ModifierComponent]
})
export class AppComponent {
    
}
