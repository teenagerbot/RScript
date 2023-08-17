function moveToEndCursor() {
  let div = document.querySelector("android-console-line");
  const range = document.createRange();
  range.selectNodeContents(div);
  range.collapse(false);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

export { moveToEndCursor };