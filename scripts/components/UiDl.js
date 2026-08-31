class UiDl extends HTMLElement {

  connectedCallback() {

    const _dl = document.createElement('dl');

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
      _dl.append(div);

    });

    this.replaceWith(_dl);

  }

}

customElements.define('ui-dl', UiDl);