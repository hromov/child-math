import GetParts from "./scripts/imager.js";
import GetImages from "./scripts/api.js";
import OpenModal from "./scripts/modal.js";
import Say from "./scripts/voice.js";

const app = document.getElementById('app');

const maxMistakes = 3;
let wrong = 0;

const isAnswerable = (target) => target.classList.contains('equation') && !target.classList.contains('answered')

const handleClick = async (e) => {
    const { target } = e;
    if (isAnswerable(target)) {
        const answer = await OpenModal(`What is ${target.textContent}?`);
        if (answer == null) {
            return
        }
        if (answer == target.getAttribute('data-answer')) {
            target.classList.add('correct');
            target.classList.add('answered');
            Say('Good Job!');
        } else {
            wrong++;
            if (wrong >= maxMistakes) {
                Say('Game Over! Qua-Qua-Qua');
                alert('Game Over!');
                location.reload();
            }
            target.classList.add('wrong');
            target.classList.add('answered');
            Say('Nope');
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