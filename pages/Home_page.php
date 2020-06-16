<!DOCTYPE html>
<?php
include "../php/config.php";

// Initialize the session
 
// Check if the user is already logged in, if yes then redirect him to welcome page
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: Home_page.php");
    exit;
}

?>
<html lang="en">
<head>
     <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://use.typekit.net/zit6srf.css">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <title>Home | Gamer Finder</title>
</head>
  <body id="home_page">
<header class="top">
<h4 class="terugknop" id="terugknop"><a href="index.html"><img src="../img/icons/Uitlog_button.png"></a></h4>
<h1>Gamer Finder</h1>
    <h4 class="instellingen" id="instellingen"><a href="settings.html"><img src="../img/icons/settings.png" alt=""></a> </h4>
</header>
 <div class="loader">
    <div class="loading_circle"></div>
 </div>
 <main id="home_main">
 <div class="container">
 
 <?php

$sql = "SELECT  username, DOB, email, country FROM gebruikers";
$result = $connectie->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<div class='container_top_home_page'>
     <div class='home_profile'>
     <img src='../img/profilePictures/PFimg3.jpeg' alt='console'>
     <p>". $row["username"]."</p>
     </div>
      <div class='available_during'>
      <img src='../img/icons/GamerFinder_Klok.png' alt='clock'>
      <p>Availabe during:
      <br>
      7 PM - 11 PM</p>
      </div>
  </div>
     <div class='listTopGames'>
    <p>Most Played Games</p>
     <ol class='top3Games'>
         <li><img src='../img/gameCovers/Fifa.jpeg' alt='fifa'>Fifa 20</li>
         <li><img src='../img/gameCovers/gtav.jpeg' alt='fifa'>Grand Theft Auto V</li>
         <li><img src='../img/gameCovers/COD.jpeg' alt='fifa'>CoD: MW2</li> 
     </ol>     
  </div>
  <div class='decline_approve'>
    <img id='decline' src='../img/icons/Decline.png' alt='Decline'>
      <img id='approve' src='../img/icons/Match2.png' alt='Match with me'>
  </div>
 </div>
     "
            ;
                      
//            "<br> username: ". $row["username"]. 
//            "<br> - Day of birth: ". $row["DOB"]. 
//            "<br> - Email: ". $row["email"].
//            "<br> - Country: ". $row["country"]. "<br>";       
    }
}
?>

  <div class="container_top_home_page">
     <div class="home_profile">
      <img src="../img/profilePictures/PFimg3.jpeg" alt="console">
      <p>EsmeeDenters98</p>
      </div>
      <div class="available_during">
      <img src="../img/icons/GamerFinder_Klok.png" alt="clock">
      <p>Availabe during:
      <br>
      7 PM - 11 PM</p>
      </div>
  </div>
  <div class="listTopGames">
    <p>Most Played Games</p>
     <ol class="top3Games">
         <li><img src="../img/gameCovers/Fifa.jpeg" alt="fifa">Fifa 20</li>
         <li><img src="../img/gameCovers/gtav.jpeg" alt="fifa">Grand Theft Auto V</li>
         <li><img src="../img/gameCovers/COD.jpeg" alt="fifa">CoD: MW2</li> 
     </ol>     
  </div>
  <div class="decline_approve">
    <img id="decline" src="../img/icons/Decline.png" alt="Decline">
      <img id="approve" src="../img/icons/Match2.png" alt="Match with me">
      
  </div>
   
 </div>
      </main>
  
    
    <ul id="home_tabbar" class="tabbar">
        <li><a href="Home_page.html"><img src="../img/icons/match.png" alt=""><p>Match</p></a></li>
        <li><a href="Message_page.html"><img src="../img/icons/message.png" alt=""><p>Message</p></a></li>
        <li><a href="Profile_page.html"><img src="../img/icons/profile.png" alt=""><p>Profile</p></a></li>
    </ul>
    <script src="../js/Load_storages.js"></script>
    <script src="../js/loader.js"></script>
    <script src="../js/stacking.js"></script>
</body>
</html>