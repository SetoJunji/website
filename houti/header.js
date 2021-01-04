function header(){
const css  = String.raw`
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">`;

const html = String.raw`
<style>
        /* Modify the background color */

        .navbar-custom {
            background-color: lightgreen;
        }
        /* Modify brand and text color */

        .navbar-custom .navbar-brand,
        .navbar-custom .navbar-text {
            color: green;
        }
  </style>
<header>
<nav class="navbar navbar-expand-lg navbar-light navbar-custom">
  <a class="navbar-brand" href="#">元宝バナナ</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">ホーム</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="return.html">リターン御礼</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="item.html">アイテム</a>
      </li>
    </ul>
  </div>
</nav>
</header>
`;
	document.write(css+html);
}
