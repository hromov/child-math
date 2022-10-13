import GetParts from "./scripts/imager.js";

const app = document.getElementById('app');

const handleClick = (e) => {
    const { target } = e;
    if (target.classList.contains('equation') && !target.classList.contains('answered')) {
        const answer = prompt('What is the answer?');
        if (answer == target.getAttribute('data-answer')) {
            target.classList.add('correct');
            target.classList.add('answered');
        } else {
            target.classList.add('wrong');
            target.classList.add('answered');
        }
    }
};

app.addEventListener('click', handleClick);

const init = () => {
    const imageParts = GetParts('/assets/images/1.jpg', 3, 5);
    const fragment = document.createDocumentFragment();
    imageParts.forEach(el => fragment.appendChild(el));
    app.appendChild(fragment);
}

init();