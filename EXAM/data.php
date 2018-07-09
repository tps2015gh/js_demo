<?php 

$arr = [] ;
for($i = 0 ; $i < 10 ; $i ++){
    $arr[] = ['q'=>'q1','a'=>'ans1'];
    $arr[] = ['q'=>'q2','a'=>'ans2'];
}
echo json_encode($arr);