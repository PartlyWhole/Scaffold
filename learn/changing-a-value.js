const captions = [
  "The name health is storing 10.",
  "A new value arrives: 7.",
  "Storing it replaces the old value — 10 is gone.",
  "In Python, we write it like this.",
  "First, the computer reads the value stored under health.",
  "Then it computes: 7 − 3 makes 4.",
  "The result is stored — the old value is thrown away.",
  "The right side happens first, then the result is stored.",
];

const stage = document.querySelector("#stage");
const caption = document.querySelector("#caption");
const backButton = document.querySelector("#back");
const nextButton = document.querySelector("#next");
const restartButton = document.querySelector("#restart");

let beat = 0;

function render() {
  stage.dataset.beat = String(beat);
  caption.textContent = captions[beat];
  backButton.disabled = beat === 0;
  nextButton.disabled = beat === captions.length - 1;
}

backButton.addEventListener("click", () => {
  if (beat > 0) beat -= 1;
  render();
});

nextButton.addEventListener("click", () => {
  if (beat < captions.length - 1) beat += 1;
  render();
});

restartButton.addEventListener("click", () => {
  beat = 0;
  render();
});

render();
