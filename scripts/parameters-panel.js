//valueInput - DOM-элемент числового инпута
//toggleAnimation - чекбокс, переключающий анимацию
//toggleHidden - чекбокс, скрывающий блок
//В cbs ожидаем объект Progress с методами (setValue, setAnimated, setHidden)
function initParametersPanel (valueInput, toggleAnimation, toggleHidden, cbs) {
    valueInput.addEventListener('input', () => {
        if (!valueInput.validity.valid) return;
        cbs.setValue(Number(valueInput.value));
    });

    valueInput.addEventListener('change', () => {
        const n = Number(valueInput.value);
        if (!Number.isFinite(n)) return;
        valueInput.value = Math.min(100, Math.max(0, n));
        cbs.setValue(valueInput.value);
    });

    toggleAnimation.addEventListener('change', () => {
        cbs.setAnimated(toggleAnimation.checked);
    });

    toggleHidden.addEventListener('change', (e) => {
        cbs.setHidden(toggleHidden.checked);
    });
}

export {initParametersPanel};
