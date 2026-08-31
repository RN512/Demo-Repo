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


  // イメージタグ
  static createImg(text) {

    const words = text.trim().split(/\s+/);


    // 画像URL
    const src = words.shift();


    let width = null;
    let height = null;

    const altWords = [];


    // w200 / h200 を解析
    words.forEach(word => {

      // width
      if (/^w\d+$/.test(word)) {

        width = word.substring(1);

      }

      // height
      else if (/^h\d+$/.test(word)) {

        height = word.substring(1);

      }

      // その他はalt
      else {

        altWords.push(word);

      }

    });


    // img要素を生成
    const img = document.createElement('img');


    // 属性の順番
    // src → width → height → alt

    img.setAttribute('src', src);


    if (width) {

      img.setAttribute('width', width);

    }


    if (height) {

      img.setAttribute('height', height);

    }


    img.setAttribute(
      'alt',
      altWords.join(' ')
    );


    return img;

  }

}