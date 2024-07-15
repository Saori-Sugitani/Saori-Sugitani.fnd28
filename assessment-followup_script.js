'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// 背景色を変えるアクション
function colorChange() {
  const colors = ["red", "green", "aqua", "yellow", "blue", "lime", "gray", "olive", "purple", "teal"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];

  //テキスト追加
  let newText = document.createElement('p');
  newText.textContent = "(*ฅ́˘ฅ̀*)♡";
  newText.style.fontSize = "30px";
  let randomTextIndex = Math.floor(Math.random() * colors.length);
  newText.style.color = colors[randomTextIndex];
  document.body.appendChild(newText);

  //flex-directionを追加したい
  const sorting = ["row","row-reverse","column","column-reverse"];
  let randomSortingIndex = Math.floor(Math.random() * sorting.length);
  document.body.style.flexDirection = sorting[randomSortingIndex];

}


// 上記関数をボタンクリック時に実行
// ボタン要素を取得
let actionBtn = document.getElementById("color-button");
actionBtn.addEventListener('click', colorChange);
