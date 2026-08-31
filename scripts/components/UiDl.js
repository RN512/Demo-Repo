class UiDl extends HTMLElement {

  connectedCallback() {

    const dl = document.createElement('dl');

    const lines = UiParser.lines(this);

    lines.forEach(line => {

      const [dtText, ...ddText] = line.split(/\s+/);

      const div = document.createElement('div');
      const dt  = document.createElement('dt');
      const dd  = document.createElement('dd');

      dt.textContent = dtText;

      dd.append(
        UiParser.create(ddText.join(' '))
      );

      div.append(dt, dd);
      dl.append(div);

    });

    this.replaceWith(dl);

  }

}

customElements.define('ui-dl', UiDl);