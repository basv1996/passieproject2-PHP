<?php
include "config.php";
session_start(); 

$gebruikersnaam = $_POST["username"];
$password_veiligheid =$_POST["password"];

$sql_check = "SELECT * FROM gebruikers WHERE username = '$gebruikersnaam'";

$resultaat = mysqli_query($connectie, $sql_check)  or die(mysqli_error($connection));
$row = mysqli_fetch_assoc($resultaat);
//$actief = $row['active'];

$counter = mysqli_num_rows($resultaat);

//if(isset($_POST['submit']))
//if($counter == 1)
//if(password_verify($_POST["password"],$password_veiligheid))
if(password_verify($password_veiligheid, $row['password']))
{
  
   header('Location: ../pages/Home_page');
        
}
else {
    echo "you failed";
     header('Location: ../pages/login_page.html');
}

?>


