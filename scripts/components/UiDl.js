class UiDl extends HTMLElement {

  connectedCallback() {

    const _dl = document.createElement('dl');


    // class / id を引き継ぐ
    if (this.hasAttribute('class')) {

      _dl.setAttribute(
        'class',
        this.getAttribute('class')
      );

    }


    if (this.hasAttribute('id')) {

      _dl.setAttribute(
        'id',
        this.getAttribute('id')
      );

    }


    const lines = UiParser.lines(this);

    lines.forEach(line => {

      const [dtText, ...ddText] = line.split(/\s+/);

      const _div = document.createElement('div');
      const _dt  = document.createElement('dt');
      const _dd  = document.createElement('dd');

      _dt.textContent = dtText;

      _dd.append(
        UiParser.create(ddText.join(' '))
      );

      _div.append(_dt, _dd);
      _dl.append(_div);

    });

    this.replaceWith(_dl);

  }

}

customElements.define('ui-dl', UiDl);