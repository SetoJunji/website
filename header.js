function header(){
//<span style="color:green;font-size:260%;">元宝バナナ</span>
//<span style="float:left;font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
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
  top: 20%;
  left: 200px;
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
  transition: 0.1s;
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
  background: skyblue;
  height: 180px;
}
</style>`;

const html = String.raw`
<header>
<div style="background-color:red;margin-bottom:10px;text-align: center;">
<span style="float:left;font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
<span style="color: green;font-size: 260%;">元宝バナナ</span>
</div>
</header>

<script>
function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script>

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="index.html">ホーム</a>
  <a href="return.html">リターン御礼</a>
  <a href="item.html">アイテム交換</a>
  <a href="char.html">副将</a>
  <a href="見た目は整えた.html">新しいページ</a>
</div>`;
	document.write(css+html);
}
