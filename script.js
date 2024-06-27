'use strict'
// 1行目に記載している 'use strict' は削除しないでください


let userData = [//必要に応じてここにログイン情報を追加する。例:{name: "user4",department: XA340}
  {name: "ねこ",depart: "夢の国" },
  {name: "カピパラ",depart: "夢の国" },
  {name: "きつね",depart: "夢の国" }
];



//ログイン時のアクション
let loginUser = {};
function login() {
  let userName = document.getElementById("user-name").value;
  let depart = document.getElementById("department").value;

  //localStorageへログイン情報を保存する
  localStorage.setItem('name', userName);
  localStorage.setItem('depart', depart);


  let found = false;
  let i = 0;

  while (!found && i < userData.length) {//foundがtrueを返すかuserDataのlengthがiより少なくなるまで以下の処理を実行
    loginUser = userData[i];
    if (loginUser.hasOwnProperty("name") && loginUser.hasOwnProperty("depart")) {
      if (loginUser.name === userName && loginUser.depart === depart) {
        found = true;
      }
    }
    i++;
  }

  if (found) {/*foundがtrueの場合にcontainer2の要素(<p>)を上書きする。*/
    alert(`こんにちは。${userName}さん。`);
    console.log(`logined is ${userName}`);
    document.getElementById("user").textContent = loginUser.name;
    


      
  } else {
      //オブジェクトの形で　userData　へ入れる
      const newUserObject = {};
      newUserObject["neme"] = userName;
      newUserObject["depart"] = depart;
      loginUser = newUserObject;
      userData.push(newUserObject);

      //localStorageにもuserDataを保存する
      localStorage.setItem("myObject", JSON.stringify(userData));


      console.log("ログイン情報を登録しました");

      alert(`こんにちは。${userName}さん。`);
      console.log(`logined is ${userName}`);
      document.getElementById("user").textContent = userName;


      //新ユーザー名をテーブルへ行の追加をする
      let table = document.getElementsByClassName('table')[0];
      let newRow = table.insertRow();

      let newCell = newRow.insertCell();
      let newText = document.createTextNode(userName);
      newCell.appendChild(newText);

      newCell = newRow.insertCell();
      let newImg = document.createElement("img");
      newImg.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s400/onepiece01_luffy.png" ;
      newImg.style.width="60px";
      newImg.style.height="60px";
      newCell.appendChild(newImg);
  }
  loginUser;
  return console.log(loginUser);
}


//コンテナ１を非表示にする
//ログイン画面を閉じるのアクション
//ボタン要素を取得
let switchBtn = document.getElementsByClassName("button margin")[0];
let switchBtnX = document.getElementsByClassName("close-x")[0];
//表示・非表示を切り替える要素を取得
let box = document.getElementsByClassName("container1")[0];

//styleのdisplayを変更する関数
function changeElement() {
  if (box.style.display === '') {
      box.style.display = 'none';
  } else {
      box.style.display = '';
  }
}

//上記関数をボタンクリック時に実行
switchBtn.addEventListener('click', changeElement);
switchBtnX.addEventListener('click', changeElement);



//ログアウト時のアクション
//loginUser{例.name: 'ねこ', depart: 'XA340'}を使ってuserDataから検索
function logOut(){

  //localStorageからユーザーデータ&オブジェクトを消す
  localStorage.removeItem('name');
  localStorage.removeItem('depart');
  localStorage.removeItem('myObject');

  //テーブルからユーザーの行を削除
  let obj = {};
  for (let i = 0; i < userData.length; i++){
    obj = userData[i];
    if(obj["name"] === loginUser["name"] && obj["depart"] === loginUser["depart"]){
      console.log(i);

      //ヒットしたら、その配列のテーブルを消す
      //テーブルをゲット
      let table = document.getElementsByClassName('table')[0];
      //テーブルの行を削除
      table.deleteRow(i + 1);
    }
  }
}

//上記関数をボタンクリック時に実行
//ボタン要素を取得
let logOutBtn = document.getElementsByClassName("button-logout")[0];
logOutBtn.addEventListener('click', logOut);


//localStorageが利用できるか確認&読み込み
if (window.localStorage) {
  console.log("localStorageが利用出来ます！");
  //localStorageからユーザー名を読み込み
  let userName = localStorage.getItem('name');

  if(userName === null){
  } else {
    document.getElementById("user").textContent = userName;
    changeElement();
    //localStorageからオブジェクトを読み込み ※JSON文字列 -> JavaScriptオブジェクトに変換
    userData = JSON.parse(localStorage.getItem("myObject"));
  }
  console.log(userName);
  console.log(userData);
}

//userDataをループをしてテーブルへ追加する
// function roop(userData){
//   for (const obj of userData){
//     const value = obj["name"];
  
//   //テーブルへ行の追加をする
//   let table = document.getElementsByClassName('table')[0];
//   let newRow = table.insertRow();
  
//   let newCell = newRow.insertCell();
//   let newText = document.createTextNode(value);
//   newCell.appendChild(newText);
  
//   newCell = newRow.insertCell();
//   let newImg = document.createElement("img");
//   newImg.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s400/onepiece01_luffy.png" ;
//   newImg.style.width="60px";
//   newImg.style.height="60px";
//   newCell.appendChild(newImg);
//   }  
// }
// window.onload = roop(userData);

for (const obj of userData){
  const value = obj["name"];

//テーブルへ行の追加をする
let table = document.getElementsByClassName('table')[0];
let newRow = table.insertRow();

let newCell = newRow.insertCell();
let newText = document.createTextNode(value);
newCell.appendChild(newText);

newCell = newRow.insertCell();
let newImg = document.createElement("img");
newImg.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s400/onepiece01_luffy.png" ;
newImg.style.width="60px";
newImg.style.height="60px";
newCell.appendChild(newImg);
}

//undefinedを回避するために試したけど、ダメだった！
// setTimeout(() => {
//     console.log('少し待ってから実行されました');
//     //userDataをループをしてテーブルへ追加する
//     for (const obj of userData){
//       const value = obj["name"];

//       //テーブルへ行の追加をする
//       let table = document.getElementsByClassName('table')[0];
//       let newRow = table.insertRow();

//       let newCell = newRow.insertCell();
//       let newText = document.createTextNode(value);
//       newCell.appendChild(newText);

//       newCell = newRow.insertCell();
//       let newImg = document.createElement("img");
//       newImg.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s400/onepiece01_luffy.png" ;
//       newImg.style.width="60px";
//       newImg.style.height="60px";
//       newCell.appendChild(newImg);
//     }
// }, 2000); // 2000ミリ秒（2秒）後に実行




