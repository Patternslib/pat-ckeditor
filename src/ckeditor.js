import { BasePattern } from "@patternslib/patternslib/src/core/basepattern";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";

export const parser = new Parser("ckeditor");

class Pattern extends BasePattern {
    static name = "ckeditor";
    static trigger = ".pat-ckeditor";
    parser = parser;
    editor = null;

    async init() {
        const CKEditor = (await import("@ckeditor/ckeditor5-build-classic")).default;
        this.editor = await CKEditor.create(this.el);

        this.editor.model.document.on("change:data", () => {
            // Synchonize text changes with textarea
            this.el.value = this.editor.getData();
        });
    }
}

registry.register(Pattern);

export default Pattern;
export { Pattern };
