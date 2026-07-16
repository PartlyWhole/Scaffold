import { basicSetup, EditorView } from "https://esm.sh/codemirror@6.0.1";
import { python } from "https://esm.sh/@codemirror/lang-python@6.1.6";

const sample = `for i in range(1, 6):
    print("*" * i)
`;

new EditorView({
  doc: sample,
  extensions: [basicSetup, python()],
  parent: document.querySelector("#editor"),
});
