import {createProgress} from "./progress.js";
import {initParametersPanel} from "./parameters-panel.js";

const PROGRESS_BLOCK = document.querySelector('#progress');
const VALUE_INPUT = document.querySelector('#value-input');
const TOGGLE_ANIMATION = document.querySelector('#toggle-animation');
const TOGGLE_HIDDEN = document.querySelector('#toggle-hidden');

const ANIMATED_CLASS =  'progress-root--animated';
const HIDDEN_CLASS = 'progress-root--hidden';

const InitialValues = {
    value: VALUE_INPUT.value,
    animated: TOGGLE_ANIMATION.checked,
    hidden: TOGGLE_HIDDEN.checked,
};

const progressBlock = createProgress(PROGRESS_BLOCK, ANIMATED_CLASS, HIDDEN_CLASS, InitialValues);
initParametersPanel(VALUE_INPUT, TOGGLE_ANIMATION, TOGGLE_HIDDEN, progressBlock);
