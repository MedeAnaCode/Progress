//valueInput - DOM-элемент числового инпута
//toggleAnimation - чекбокс, переключающий анимацию
//toggleHidden - чекбокс, скрывающий блок
//В cbs ожидаем объект Progress с методами (setValue, setAnimated, setHidden)
function initParametersPanel (valueInput, toggleAnimation, toggleHidden, cbs) {
    valueInput.addEventListener('input', (e) => {
        if (!e.currentTarget.validity.valid) return;
        cbs.setValue(Number(e.currentTarget.value));
    });

    valueInput.addEventListener('change', () => {
        const n = Number(valueInput.value);
        if (!Number.isFinite(n)) return;
        valueInput.value = Math.min(100, Math.max(0, n));
    });

    toggleAnimation.addEventListener('change', (e) => {
        cbs.setAnimated(e.currentTarget.checked);
    });

    toggleHidden.addEventListener('change', (e) => {
        cbs.setHidden(e.currentTarget.checked);
    });
}

export {initParametersPanel};
