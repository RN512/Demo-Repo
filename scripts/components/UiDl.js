class UiDl extends HTMLElement {

  connectedCallback() {

    const _dl = document.createElement('dl');

    const array_moji = this.textContent //<dl-list> の中身を 1 文字列として取得する。
      .trim()      // 文字列の先頭と末尾の不要な空白を削除する。
      .split('\n') // 改行ごとに文字列を分割して、配列にする。['1 行目', '2 行目', ...];
      .map(moji => moji.trim())
      .filter(Boolean); // 「''」 -> 空文字があれば配列に含めない。

    array_moji.forEach(moji => {

      const [DT, ...DD] = moji.split(/\s+/);

      const _div = document.createElement('div');
      const _dt  = document.createElement('dt');
      const _dd  = document.createElement('dd');

      _dt.textContent = DT;
      _dd.textContent = DD.join(' ');

      _div.append(_dt, _dd);
      _dl.append(_div);

    });

    this.replaceWith(_dl);

  }

}

customElements.define('ui-dl', UiDl);
