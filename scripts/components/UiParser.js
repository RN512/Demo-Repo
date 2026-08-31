class UiParser {

  // テキストを行ごとに分割
  static lines(element) {

    return element.textContent
      .trim()
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line);

  }


  // テキストをHTML要素に変換
  static create(text) {

    const [type, ...words] = text.trim().split(/\s+/);
    const label = words
      .filter(word => word !== '_blank')
      .join(' ');


    // 内部リンク
    if (type.startsWith('#')) {

      const a = document.createElement('a');

      a.href = type;
      a.textContent = label;

      if (words.includes('_blank')) {
        a.target = '_blank';
      }

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


    // 通常のテキスト
    return document.createTextNode(text);

  }

}