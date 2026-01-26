const svgNS = "http://www.w3.org/2000/svg";

function createProgress (el, params = {value: 0, animated: true, hidden: false}) {
    const initialParameters = params;
    const progressWidth = 100; //это временно, потом хорошо бы подстроиться под экран
    const circleCenter = progressWidth/2;
    const r = circleCenter - 10;
    const strokeLength = 2 * 3.14 * r;
    const strokeOffset = strokeLength * (100 - initialParameters.value)/100;

    const svg = document.createElementNS(svgNS,'svg');
    svg.setAttribute('width', `${progressWidth}`);
    svg.setAttribute('height', `${progressWidth}`);

    const circle = document.createElementNS(svgNS,'circle');
    circle.setAttribute('cx', `${circleCenter}`);
    circle.setAttribute('cy', `${circleCenter}`);
    circle.setAttribute('r', `${r}`);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', 'blue');
    circle.setAttribute('stroke-width', '10');
    circle.setAttribute('stroke-dasharray', `${strokeLength}`);
    circle.setAttribute('stroke-dashoffset', `${strokeOffset}`);
    svg.append(circle);

    function render() {
        el.append(svg);
    }

    render();
}

export {createProgress};
