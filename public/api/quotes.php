<?php
// To test if this works, go to /api/quotes.php
require 'env.php';

$myDbLink     = mysqli_connect($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_NAME']) or die('Database error: ' . mysqli_error($myDbLink));
$resultArray  = [];
$q            = "SELECT * FROM quotes WHERE qdate = '2025-02-07' ORDER BY id ASC";

if ($result = $myDbLink->query($q)) {
  while ($row = $result->fetch_assoc()) {
    $resultArray[] = [
      'qdate'        => $row['qdate'],
      'quote'        => $row['quote'],
      'character'    => $row['character'],
    ];
  }

  echo json_encode($resultArray);
}

return [];