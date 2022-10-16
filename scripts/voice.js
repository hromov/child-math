const synth = speechSynthesis;

export default function Say(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
}