const captions = [
  "Here is a line of Python — what does it actually mean?",
  "The right side first: Python creates the int object 10.",
  "Then the name hp is made to point to that object.",
  "A new line runs: hp = 7.",
  "The right side first again: a new int object, 7.",
  "hp now points to 7 — nothing points to 10, so it vanishes.",
  "Let's take some damage! Press Hit.",
  "This line runs. The right side goes first — and it mentions hp.",
  "hp points to 7, so 7 takes hp's place in the line.",
  "7 − 3 becomes a brand-new object: 4.",
  "Finally, the name hp is pointed at the new object.",
];

const HIT_BEAT = 6;

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
