import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";

const parser = new Parser("ckeditor");
parser.addArgument("example-option", [1, 2, 3]);

export default Base.extend({
    name: "ckeditor",
    trigger: ".pat-ckeditor",
    editor: null,

    async init() {
        this.options = parser.parse(this.el, this.options);
        let CKEditor = await import("@ckeditor/ckeditor5-build-classic");
        CKEditor = CKEditor.default;
        this.editor = await CKEditor.create(this.el);

        this.editor.model.document.on("change:data", () => {
            // Synchonize text changes with textarea
            this.el.value = this.editor.getData();
        });
    },
});
