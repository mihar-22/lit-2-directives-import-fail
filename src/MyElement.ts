import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined";

@customElement("my-element")
export class MyElement extends LitElement {
  @property() identifier?: string;

  render() {
    return html`<div id=${ifDefined(this.identifier)}></div>`;
  }
}
