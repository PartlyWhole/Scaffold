const captions = [
  "This is a value.",
  "This is a name — an empty label.",
  "The value is now stored under the name.",
  "In Python, we write it like this.",
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
