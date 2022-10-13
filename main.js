import GetParts from "./scripts/imager.js";
import GetImages from "./scripts/api.js";

const app = document.getElementById('app');

const maxMistakes = 3;
let wrong = 0;

const handleClick = (e) => {
    const { target } = e;
    if (target.classList.contains('equation') && !target.classList.contains('answered')) {
        const answer = prompt(`What is ${target.textContent}?`);
        if (answer == target.getAttribute('data-answer')) {
            target.classList.add('correct');
            target.classList.add('answered');
        } else if (answer) {
            wrong++;
            if (wrong >= maxMistakes) {
                location.reload();
            }
            target.classList.add('wrong');
            target.classList.add('answered');
        }
    }
};

app.addEventListener('click', handleClick);

const init = async () => {
    const images = await GetImages();
    const imageIndex = Math.floor(Math.random() * images.length);
    const imagePath = images[imageIndex];
    const imageParts = GetParts(`${imagePath}`, 3, 4);
    const fragment = document.createDocumentFragment();
    imageParts.forEach(el => fragment.appendChild(el));
    app.appendChild(fragment);
}

init();