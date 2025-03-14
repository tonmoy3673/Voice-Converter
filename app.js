console.log('connected');

// ===== Get Element by id ========//
let speech = new SpeechSynthesisUtterance();
let voices = []; 
const select = document.getElementById('select');
const inputField = document.getElementById('input-field');
const btn = document.getElementById('btn');

// Function to populate the voice selection dropdown
function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    // Clear existing options
    select.innerHTML = '';
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = voice.name;
        option.setAttribute('data-lang', voice.lang);
        select.appendChild(option);
    });
}

// Set the selected voice when a voice is chosen
select.addEventListener('change', function() {
    const selectedVoice = voices.find(voice => voice.name === select.value);
    speech.voice = selectedVoice;
});

// Initialize voices on page load and when voices change
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

// ======== voice converter function =========//
btn.addEventListener('click', function() {
    const text = inputField.value;
    
    if (text.trim() === "") {
        console.log("No text entered");
        return; // Exit if there's no text entered
    }
    
    speech.text = text;
    window.speechSynthesis.speak(speech);
    console.log(speech);
});
