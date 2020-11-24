import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "patternslib/src/core/base";

export default Base.extend({
    name: "ckeditor",
    trigger: ".pat-ckeditor",
    editor: null,

    async init() {
        let CKEditor = await import("@ckeditor/ckeditor5-build-classic");
        CKEditor = CKEditor.default;
        this.editor = await CKEditor.create(this.el);

        this.editor.model.document.on("change:data", () => {
            // Synchonize text changes with textarea
            this.el.value = this.editor.getData();
        });
    },
});
