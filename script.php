<?PHP
	$adresat = 'matuzalema@gmail.com'; 	// pod ten adres zostanie wysłana 							// wiadomosc
	@$email = $_POST['email'];
	@$content = $_POST['content'];
	@$name = $_POST['name'];

	$header = 	$email.
				$name.
			'text/plain;charset="Windows-1250\n"'.
			"\nContent-Transfer-Encoding: 8bit";
	if (mail($adresat, 'Wiadomość z mojego portfolio', $content, $header))
		echo '<p>Dziękuję, wiadomość została wysłana.</p>';
	else 
		echo '<p><b>NIE</b> wysłano wiadomości!</p>';

?>

<?php
