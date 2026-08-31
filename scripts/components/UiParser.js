class UiParser {

  // 文字列を解析してDOMを返す
  static create(text) {

    const [type, ...words] = text.trim().split(/\s+/);
    const label = words.join(' ');

    // 内部リンク
    if (type.startsWith('#')) {

      const a = document.createElement('a');

      a.href = type;
      a.textContent = label;

      return a;
    }

    // 外部リンク
    if (
      type.startsWith('http://') ||
      type.startsWith('https://')
    ) {

      const a = document.createElement('a');

      a.href = type;
      a.textContent = label;

      return a;
    }

    // 画像
    if (type.startsWith('@img/')) {

      const img = document.createElement('img');

      img.src = type.substring(5);
      img.alt = label;

      return img;
    }

    // 通常のテキスト
    return document.createTextNode(text);

  }


  // 要素の中身を行ごとの配列にする
  static lines(element) {

    return element.textContent
      .trim()
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);

  }

}