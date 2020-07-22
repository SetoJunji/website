function header(){

const css  = String.raw`<style>
header{
  background-color:black;
  text-align: center;
}
header ul li{
	display: inline;
  padding-left: 10px;
  padding-right: 10px;
}
header ul li a{
	color: red;
}
</style>`;

const html = String.raw`<header>
<h1 style="color:green;">元宝バナナ</h1>
<ul style="text-color:red;">
<li><a href="index.html">ホーム</a></li>
<li><a href="item.html">アイテム原価</a></li>
<li><a href="return.html">リターン御礼</a></li>
<li><a href="char.html"></a></li>
</ul>
</header>`;
	document.write(css+html);
}
