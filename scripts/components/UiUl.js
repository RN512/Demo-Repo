class UiUl extends HTMLElement {

  connectedCallback() {

    const _ul = document.createElement('ul');

    const lines = UiParser.lines(this);

    lines.forEach(line => {

      const _li = document.createElement('li');

      _li.append(
        UiParser.create(line)
      );

      _ul.append(_li);

    });

    this.replaceWith(_ul);

  }

}

customElements.define('ui-ul', UiUl);