console.log('connected');
// ======== voice converter function =========//
let speech =new SpeechSynthesisUtterance();
document.getElementById('btn').addEventListener('click',function(){
speech.text = document.querySelector('textarea').value;
window.speechSynthesis.speak(speech);
console.log(speech);
});