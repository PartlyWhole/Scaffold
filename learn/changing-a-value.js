const captions = [
  "The name health is storing 10.",
  "A new value arrives: 7.",
  "Storing it replaces the old value — 10 is gone.",
  "In Python, we write it like this.",
  "Something in the game hits you! Press Hit.",
  "First, the computer reads the value stored under health.",
  "3 is a value too — now the computer can compute 7 − 3.",
  "7 − 3 becomes a new value: 4.",
  "The new value is stored — the old value is thrown away.",
  "The right side happens first, then the result is stored.",
];

const HIT_BEAT = 4;

const stage = document.querySelector("#stage");
const caption = document.querySelector("#caption");
const backButton = document.querySelector("#back");
const nextButton = document.querySelector("#next");
const restartButton = document.querySelector("#restart");
const hitButton = document.querySelector("#hit");

let beat = 0;

function render() {
  stage.dataset.beat = String(beat);
  caption.textContent = captions[beat];
  backButton.disabled = beat === 0;
  nextButton.disabled = beat === captions.length - 1 || beat === HIT_BEAT;
}

backButton.addEventListener("click", () => {
  if (beat > 0) beat -= 1;
  render();
});

nextButton.addEventListener("click", () => {
  if (beat < captions.length - 1) beat += 1;
  render();
});

hitButton.addEventListener("click", () => {
  if (beat === HIT_BEAT) beat += 1;
  render();
});

restartButton.addEventListener("click", () => {
  beat = 0;
  render();
});

render();
