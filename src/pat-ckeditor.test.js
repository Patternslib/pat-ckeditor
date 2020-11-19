import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./pat-ckeditor";
import utils from "patternslib/src/core/utils";

describe("pat-ckeditor", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async (done) => {
        document.body.innerHTML = `<div class="pat-ckeditor" />`;

        const instance = pattern.init(
            document.querySelector(".pat-ckeditor")
        );
        await utils.timeout(1);

        expect().toBe("");

        done();
    });
});
