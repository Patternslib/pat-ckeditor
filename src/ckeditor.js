import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "@patternslib/patternslib/src/core/base";

export default Base.extend({
    name: "ckeditor",
    trigger: ".pat-ckeditor",
    editor: null,

    async init() {
        const CKEditor = (await import("@ckeditor/ckeditor5-build-classic")).default;
        this.editor = await CKEditor.create(this.el);

        this.editor.model.document.on("change:data", () => {
            // Synchonize text changes with textarea
            this.el.value = this.editor.getData();
        });
    },
});
