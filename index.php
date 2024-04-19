<?php
// To test if this works, go to /api/quotes

// this works:
// $myDbLink = mysqli_connect(
//   'db-mysql-test-cluster-do-user-16389943-0.c.db.ondigitalocean.com',
//   'doadmin',
//   'AVNS_I5GwOL_5RU1LoeZtvMm',
//   'defaultdb',
//   25060
// ) or die('Database error: ' . mysqli_error($myDbLink));

$pdoConnection = new PDO(
  'mysql:dbname=defaultdb;host=db-mysql-test-cluster-do-user-16389943-0.c.db.ondigitalocean.com;port=25060;charset=utf8',
  'doadmin',
  'AVNS_I5GwOL_5RU1LoeZtvMm',
  [
    PDO::ATTR_TIMEOUT                  => 15,
    PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
  ]
);

$resultArray  = [];
$sql          = "SELECT * FROM quotes WHERE qdate = DAY(CURDATE()) ORDER BY id ASC";
$statement    = $pdoConnection->prepare($sql);
$statement->execute();

if ($statement->rowCount()) {
  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    array_push($resultArray, $row);
  }
}

return $resultArray;
