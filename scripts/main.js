import {createProgress} from "./progress.js";

const PROGRESS_BLOCK = document.querySelector('#progress-root');

const MOCK_PARAMETERS = {
    value: 60,
    animated: true,
    hidden: false
};

const progressBlock = createProgress(PROGRESS_BLOCK, MOCK_PARAMETERS);

progressBlock.setValue(40);
