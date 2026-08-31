class UiUl extends HTMLElement {

  connectedCallback() {

    const ul = document.createElement('ul');

    const lines = UiParser.lines(this);

    lines.forEach(line => {

      const li = document.createElement('li');

      li.append(
        UiParser.create(line)
      );

      ul.append(li);

    });

    this.replaceWith(ul);

  }

}

customElements.define('ui-ul', UiUl);