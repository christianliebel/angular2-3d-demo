import {bootstrap} from 'angular2/platform/browser';
import {ModifierComponent} from './components/modifierComponent';
import {RenderService} from './services/renderService';

const APP_PROVIDERS = [RenderService];

bootstrap(ModifierComponent, [APP_PROVIDERS]);
