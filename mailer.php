<?php


  $nameOfCustomer = $_POST['customername'] ;

  $customerContactNumber = $_POST['phonecontactNumber'] ;



  $emailTo_Recipient = 'NIRO190985@Hotmail.co.uk' ;

  $emailTo_SubjectOfEmail = '' ;

  $messageBody = 'Hi Alex, My Name is ".$nameOfCustomer, " I have a prospective job requiring your man and van services and wish to discuss this in detail with yourself. With this said, could you please give me a call back at your nearest convenience on ".$customerContactNumber." Kind Regards, $nameOfCustomer' ;

  $headers = 'From: https://buildtestplatfor.byethost4.com/index.html?i=3'       . "\r\n" .
             'X-Mailer: PHP/' . phpversion();


  mail( $emailTo_Recipient, $emailTo_SubjectOfEmail, $messageBody, $headers) or die ( "Error!" ) ;

  echo "Thank You!" ;


?>