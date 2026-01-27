//valueInput - DOM-элемент числового инпута
//toggleAnimation - чекбокс, переключающий анимацию
//toggleHidden - чекбокс, скрывающий блок
//В cbs ожидаем объект Progress с методами (setValue, setAnimated, setHidden)

function initParametersPanel (valueInput, toggleAnimation, toggleHidden, cbs) {
    valueInput.addEventListener('input', (e) => {
        cbs.setValue(e.currentTarget.value);
    });

    toggleAnimation.addEventListener('change', (e) => {
        cbs.setAnimated(e.currentTarget.checked);
    });

    toggleHidden.addEventListener('change', (e) => {
        cbs.setHidden(e.currentTarget.checked);
    });
}

export {initParametersPanel};
