class UiButton extends HTMLElement {

  connectedCallback() {

    // ui-button の中の文字列を取得
    const text = this.textContent.trim();

    // button要素を生成
    const button = document.createElement('button');

    // 文字列を設定
    button.textContent = text;

    // ui-button を button に置き換える
    this.replaceWith(button);

  }

}

customElements.define('ui-button', UiButton);
