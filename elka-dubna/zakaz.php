<?php 					
	require_once("config/chek.php");
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="shortcut icon" href="images/def.ico" type="image/x-icon">
	<title>Елка <?php echo $text2 . $text; ?> | elka.dubna.ru</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<link href="https://fonts.googleapis.com/css?family=Oswald|Roboto+Mono|Source+Sans+Pro" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Bad+Script|Marck+Script|Permanent+Marker" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Coming+Soon|Great+Vibes|Just+Another+Hand|Lobster|Pacifico" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/default.css">
	<link rel="stylesheet" type="text/css" href="css/zakaz.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
</head>
<body>
	<div class="cont">
		<div class="top-block">
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div class="main">
			<div class="div-zakaz">
				<div class="inner-div-zakaz">
					<h2 class="whatelk">Елка <?php echo $text2 . $text; ?></h2>					
					<form action="cheked.php" method="post" id="form-zakaz" >	
						<div class="input-radio">
				   			<p>Выберите размер:</br>
			   				<?php
			   				if ($text2 == $elk1 || $text2 == $elk3) { ?>
				   				<div class="radio">
					   				<label><input type="radio" name="browser" value="1"> 1м</label>
							   		<label><input type="radio" name="browser" value="1,2"> 1.2м</label>
							   		<label><input type="radio" name="browser" value="1,5"> 1.5м</label>
							   		<label><input type="radio" name="browser" value="1,8"> 1.8м</label>
						   		</div><?php }
						   	if ($text2 == $elk2 || $text2 == $elk5) { ?>
						   		<div class="radio">
							   		<label><input type="radio" name="browser" value="1,2"> 1.2м</label>
							   		<label><input type="radio" name="browser" value="1,5"> 1.5м</label>
						   		</div><?php }
						   	if ($text2 == $elk4) { ?>
						   		<div class="radio">
							   		<label><input type="radio" name="browser" value="0,9"> 0,9м</label>
							   		<label><input type="radio" name="browser" value="1,2"> 1.2м</label>
							   		<label><input type="radio" name="browser" value="1,5"> 1.5м</label>
							   		<label><input type="radio" name="browser" value="1,8"> 1.8м</label>
						   		</div><?php }
						   	if ($text2 == $elk6) { ?>
						   		<div class="radio">							   		
							   		<label><input type="radio" checked name="browser" value="1,5"> 1.5м</label>
						   		</div><?php }
							?>
				   			</p>
					   	</div>				
						<p><input required class="tel" type="tel" name="telephone" placeholder="Введите номер телефона"></p>
						<button type="submit" class="but" name="but" value="<?php echo $_POST['button'] ?>">Заказать</button>
					</form>
					<a href="index.html">Назад</a>				
				</div>
			</div>
		</div>
	</div>
</body>
</html>