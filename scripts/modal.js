const modal = document.getElementById("modal");
const answer = document.getElementById("answer");
const header = document.getElementById("header");

let resolveModal = null;
let rejectModal = null;

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "modal":
    case "close":
      resolveModal("");
      close();
      break;
    case "button":
      if (!answer.value && e.target.textContent == 0) {
        break;
      }
      answer.value += e.target.textContent;
      break;
    case "clear":
      answer.value = "";
      break;
    case "delete":
      answer.value = answer.value.slice(0, -1);
      break;
    case "submit":
      resolveModal(answer.value);
      close();
      break;
    default:
      console.log(e);
  }
});

function close() {
  answer.value = "";
  modal.style.display = "none";
}

export default async function OpenModal(equation) {
  header.textContent = equation;
  modal.style.display = "block";
  return new Promise((resolve, reject) => {
    resolveModal = resolve;
    rejectModal = reject;
    return { resolve, reject };
  });
}
