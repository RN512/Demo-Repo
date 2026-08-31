class UiParser {

  // 文字列を解析して DOM を返す
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
      a.textContent = words.filter(word => word !== '_blank').join(' ');

      if (words.includes('_blank')) {
        a.target = '_blank';
      }

      return a;
    }


    // メールリンク
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(type)) {
      const a = document.createElement('a');

      a.href = `mailto:${type}`;
      a.textContent = label;

      return a;
    }


    // 画像
    if (type === '@img') {
      const img = document.createElement('img');

      img.src = words.shift();
      img.alt = words.join(' ');

      return img;
    }


    // テキストのみ
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
