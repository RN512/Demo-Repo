class UiSubmit extends HTMLElement {

  connectedCallback() {
    const value = this.getAttribute("value") || "送信";

    this.innerHTML = `
      <input type="submit" value="${value}">
    `;
  }

}

customElements.define("ui-submit", UiSubmit);
