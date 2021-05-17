import "../MyElement";

import { html } from "lit";
import { expect, fixture } from "@open-wc/testing";
import { MyElement } from "../MyElement";

describe("MyElement", () => {
  it("should not have an id attribute set on root div element", async () => {
    const myElement = await fixture<MyElement>(html`<my-element></my-element>`);
    expect(myElement).shadowDom.to.equal("<div></div>");
  });
});
