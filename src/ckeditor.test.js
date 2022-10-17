import Pattern from "./ckeditor";
import events from "@patternslib/patternslib/src/core/events";

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

        const instance = new Pattern(document.querySelector(".pat-ckeditor"));
        await events.await_pattern_init(instance);

        expect(document.querySelector(".ck")).toBeTruthy();
        expect(document.querySelector("textarea").value).toBe("");

        // Content updates are synchronized with the textarea.
        instance.editor.setData("okay");
        expect(document.querySelector("textarea").value).toBe("<p>okay</p>");
    });
});
