# UI コンポーネント


## HTML ファイル上で、以下の記法で各 UI コンポーネントを利用できます

用途 | 記述方
----- ----- ----- ----- -----
<!-- リンク -->
https://example.com テキスト (_blank) () 内の属性が不要な場合、記述の必要はありません

<a href="http://example.com" target="_blank">テキスト</a>

<!-- メールリンク -->
xxx@example.com テキスト

<a href="mailto:info@example.jp">テキスト</a>

<!-- イメージ -->
@img ./images/example.jpg テキスト
<img src="./images/example.jpg" alt="テキスト">

<!-- ボタン -->
<ui-submit>テキスト</ui-submit>

<button type="submit">テキスト</button>
(テキストを含めない場合「送信」と表示される)


## コンテナタグ

<!-- UL -->
<ui-ul>
  テキスト 1
  テキスト 2
</ui-ul>

<ul>
  <li>テキスト 1</li>
  <li>テキスト 2</li>
</ul>

<!-- DL -->
<ui-dl>
  テキスト テキストテキスト 1
  テキスト テキストテキスト 2
</ui-dl>

<dl>
  <dt>テキスト</dt>
  <dd>テキストテキスト 1</dd>
  <dt>テキスト</dt>
  <dd>テキストテキスト 2</dd>
</dl>
