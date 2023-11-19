<?php
// boolean number.
// var_dump((bool) array ());


// flot number.
// var_dump (25/7);

// flot to int
// var_dump ((int) (25/7));

// string
// echo "name";
// echo 'nazmul';

// echo 'my name is jewel,i'll be back';
// right way
// echo 'my name is jewel,i\'ll be back';
// $var = "polash";
// echo "my name is $var";
// $var = "polash";
// echo 'my name is $var';
// $var = "polash";
// echo 'my name is '. $var;
// $var = "polash";
// echo 'my name is '." ". $var;

// php operator
// sum-1 system
// $number = 30;
// $num=$number+  10;
// echo $num;
// sun-2 system
// $number =30;
// $number += 10;
// echo $number;


// multiple
// $number =6;
// $num = $number*3; 
// echo $num;
// multiple method-2
// $number1 =6;
// $number2 = 3;
// $num = $number1*$number2; 
// echo $num;
// method -3
// $number =6;
// $number *=3;
// echo $number;
// modulas%
// $var = 17;
// $var %=3;
// echo $var;


// php increment and decrement 
// type of increment and decrement
// 1.pre
// 2.post
// example
// $var =9;
// $vars = ($var++);
// $vars= ($var);
// echo $vars;
// $num =5;
// var_dump(++$num);
//! var_dump($num);


// I will now run a loop
// $set='a1';
// for($n=0;$n<26;$n++) {
//     echo ++$set .PHP_EOL;
// }

// !pie er man ber korar upay;
// echo(pi());


// !php max;
// echo(max(12,3,6,8,99,77,52,22)) .PHP_EOL;
// !php min
// echo (min(1,2,3,5,67,8,232,4,4,2));


// !negetive to positive
// echo (abs(-2233.6346));

// *random php
// echo rand();

// 
// *
// $d =100;
// $r =23;
// if ($d==100 && $r ==23) {
//     echo "jewel";
// }
// *
// $h = 121;
// if ($h !==121) {
//     echo "jewel";
// }else{
//     echo "121 bade baki sob num de";
// }

// concat php
// * method 1
// $tax = "hello";
// $taxx = "world";
// echo $tax." ".$taxx;
// * method 2
// $tac = "hello";
// $tacc = "world";
// $tac .=  " ".$tacc;
// echo $tac; 


// * printf
// $firstname = "nazmul";
// $lastName = "jewel";
// printf("my name is %s %s",$firstname,$lastName);
// * another method
// $firstname = "nazmul";
// $lastName = "jewel";
// printf('my name is %2$s %1$s', $firstname,$lastName);

// * sprintf
$name1= "nazmul";
$name2="jewel";
$result =sprintf("my name is %s %s ",$name1,$name2);
echo $result;
