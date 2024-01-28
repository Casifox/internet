<?php
$servername = "localhost";
$username = "nom_utilisateur";
$password = "mot_de_passe";
$dbname = "nom_base_de_donnees";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("La connexion a échoué : " . $conn->connect_error);
}

$message = $_POST['message'];

$sql = "INSERT INTO messages (content) VALUES ('$message')";
$conn->query($sql);

$conn->close();
?>
