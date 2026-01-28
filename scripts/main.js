import {createProgress} from "./progress.js";
import {initParametersPanel} from "./parameters-panel.js";

const PROGRESS_BLOCK = document.querySelector('#progress-root');
const VALUE_INPUT = document.querySelector('#value-input');
const TOGGLE_ANIMATION = document.querySelector('#toggle-animation');
const TOGGLE_HIDDEN = document.querySelector('#toggle-hidden');

const ANIMATED_CLASS =  'progress-block__root--animated';
const HIDDEN_CLASS = 'progress-block__root--hidden';

const MOCK_PARAMETERS = {
    value: 60,
    animated: false,
    hidden: false,
};

const progressBlock = createProgress(PROGRESS_BLOCK, ANIMATED_CLASS, HIDDEN_CLASS, MOCK_PARAMETERS);
initParametersPanel(VALUE_INPUT, TOGGLE_ANIMATION, TOGGLE_HIDDEN, progressBlock);
