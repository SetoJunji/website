function header(){

const css  = String.raw`<style>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
header {
  padding:10px;
  background: skyblue;
  height: 80px;
}

#nav-drawer {
  position: relative;
}

/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}

/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 60px;
  height: 44px;
  vertical-align: middle;
}

/*ハンバーガーアイコンをCSSだけで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;/*線の太さ*/
  width: 40px;/*長さ*/
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
  background-color: #FFFFFF;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}

/*閉じる用の薄黒カバー*/
#nav-close {
  display: none;/*はじめは隠しておく*/
  position: fixed;
  z-index: 99;
  top: 0;/*全体に広がるように*/
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}

/*中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;/*最前面に*/
  width: 90%;/*右側に隙間を作る（閉じるカバーを表示）*/
  max-width: 330px;/*最大幅（調整してください）*/
  height: 100%;
  background: #fff;/*背景色*/
  transition: .3s ease-in-out;/*滑らかに表示*/
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);/*左に隠しておく*/
}

/*チェックが入ったらもろもろ表示*/
#nav-input:checked ~ #nav-close {
  display: block;/*カバーを表示*/
  opacity: .5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);/*中身を表示（右へスライド）*/
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
</style>`;

const html = String.raw`<header><div style="text-align: center;">
<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
<span style="color:green;font-size:260%;">元宝バナナ</span>

<script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script>

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
  <div id="nav-drawer" style="float:left;">
      <input id="nav-input" type="checkbox" class="nav-unshown">
      <label id="nav-open" for="nav-input"><span></span></label>
      <label class="nav-unshown" id="nav-close" for="nav-input"></label>
      <div id="nav-content">
      <ul>
      <a href="index.html"><li>ホーム</li></a>
      <a href="return.html"><li>リターン御礼</li></a>
      <a href="item.html"><li>アイテム交換</li></a>
      <a href="char.html"><li>副将</li></a>
      </ul>
      </div>
  </div></div>
</header>`;
	document.write(css+html);
}
