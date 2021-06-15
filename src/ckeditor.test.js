import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./ckeditor";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-ckeditor", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `
            <form>
                <textarea name="text" class="pat-ckeditor"></textarea>
            </form>
        `;

        const instance = pattern.init(document.querySelector(".pat-ckeditor"));
        await utils.timeout(1);

        expect(document.querySelector(".ck")).toBeTruthy();
        expect(document.querySelector("textarea").value).toBe("");

        // Content updates are synchronized with the textarea.
        instance.editor.setData("okay");
        expect(document.querySelector("textarea").value).toBe("<p>okay</p>");
    });
});
