const svgNS = "http://www.w3.org/2000/svg";
//Надо будет вынести логику создания svg-картинки, очень громоздко

function createProgress (el, animatedClass, hiddenClass, initialParameters = {value: 0, animated: true, hidden: false}) {
    const params = initialParameters;
    const progressWidth = 100;
    const circleCenter = progressWidth/2;
    const r = circleCenter - 10;
    const strokeLength = 2 * Math.PI * r;
    let strokeOffset = strokeLength * (100 - params.value)/100;

    const svg = document.createElementNS(svgNS,'svg');
    svg.setAttribute('width', `${progressWidth}`);
    svg.setAttribute('height', `${progressWidth}`);
    svg.setAttribute('viewBox', '0 0 100 100');

    const circle = document.createElementNS(svgNS,'circle');
    circle.setAttribute('cx', `${circleCenter}`);
    circle.setAttribute('cy', `${circleCenter}`);
    circle.setAttribute('r', `${r}`);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', 'blue');
    circle.setAttribute('stroke-width', '10');
    circle.setAttribute('stroke-dasharray', `${strokeLength}`);
    const backgroundCircle = document.createElementNS(svgNS,'circle');
    backgroundCircle.setAttribute('cx', `${circleCenter}`);
    backgroundCircle.setAttribute('cy', `${circleCenter}`);
    backgroundCircle.setAttribute('r', `${r}`);
    backgroundCircle.setAttribute('fill', 'none');
    backgroundCircle.setAttribute('stroke', 'yellow');
    backgroundCircle.setAttribute('stroke-width', '10');

    svg.append(backgroundCircle);
    svg.append(circle);
    el.append(svg);

    function render() {
        circle.setAttribute('stroke-dashoffset', `${strokeOffset}`);

        if (params.animated) {
            if (!el.classList.contains(animatedClass)) {
                el.classList.add(animatedClass);
            }
        } else {
            if (el.classList.contains(animatedClass)) {
                el.classList.remove(animatedClass);
            }
        }

        if (params.hidden) {
            if (!el.classList.contains(hiddenClass)) {
                el.classList.add(hiddenClass);
            }
        } else {
            if (el.classList.contains(hiddenClass)) {
                el.classList.remove(hiddenClass);
            }
        }
    }

    render();

    function setValue(num) {
        params.value = num;
        strokeOffset = strokeLength * (100 - params.value)/100;
        render();
    }

    function setAnimated(bool) {
        params.animated = bool;
        render();
    }

    function setHidden(bool) {
        params.hidden = bool;
        render();
    }

    return {setValue, setAnimated, setHidden};
}

export {createProgress};
