import {createProgress} from "./progress.js";

const PROGRESS_BLOCK = document.querySelector('#progress-root');
const ANIMATED_CLASS =  'progress-block__root--animated';
const HIDDEN_CLASS = 'progress-block__root--hidden';

const MOCK_PARAMETERS = {
    value: 60,
    animated: true,
    hidden: false,
};

const progressBlock = createProgress(PROGRESS_BLOCK, MOCK_PARAMETERS, ANIMATED_CLASS, HIDDEN_CLASS);

progressBlock.setValue(40);
