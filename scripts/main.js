//import "./components/UiSubmit.js";

/***** ***** *****
 * @HTML タグを出力
 *
 *
 *
 */


/* ====================
  <head>xxx</head>
  ==================== */
//customElements.define("ui-head", UiHead);


/* ====================
  <dl><dt><dd>xxx<dt></dd>></dt></dl>
  ==================== */
customElements.define('ui-dl', UiDl);


/* ====================
  <input type="submit" value="">
  ==================== */
customElements.define("ui-submit", UiSubmit);
