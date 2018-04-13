
<?php
	$text2 = ($_POST['button']);

	$elk1 = "Сибирия";
	$elk2 = "Московская";
	$elk3 = "Метелица";
	$elk4 = "Рождественская";
	$elk5 = "Смайл";
	$elk6 = "Сибирская";

	if(isset($_POST['but']))
	{

		$size = $_POST['browser'];
		$tel = $_POST['telephone'];
		$text = $_POST['but'];

		$mysqli = new mysqli('127.0.0.1', 'root', '', 'elka_dubna');
			//проверка соединения
			if ($mysqli->connect_errno) {
		    	echo "Извините, возникла проблема на сайте";
		    	echo "Ошибка: Не удалсь создать соединение с базой MySQL и вот почему: \n";
			    echo "Номер_ошибки: " . $mysqli->connect_errno . "\n";
			    echo "Ошибка: " . $mysqli->connect_error . "\n";
			    exit;
			}
		$query = "INSERT INTO zakaz VALUES (NULL, '$text', '$size','$tel', NOW())";
		/*$query = "INSERT INTO `users` (`id`, `name`, `password`, `mail`, `city`, `date_reg`) VALUES (NULL, '$name', '$password', '$mail', '$city', NULL)";*/
		$mysqli->query($query);

		/*echo "Елка: " . $text . "</br>";
		echo "Размер ели: " . $size . "</br>";
		echo "Телефон: " . $tel . "</br>";
		print_r($_POST['but']);*/
		mail("nekit.jironkin@gmail.com", "Заказ", "Елка: $text\nРазмер: $size\nТелефон: $tel"); 
	}
?>
