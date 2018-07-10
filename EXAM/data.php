<?php 
include("./QuestionAns.php");
$qa = new QuestionAns();
$qa->init();
$qa->compile();

//$rs = $qa->get_results();
//echo "<pre>"; 
//print_r($rs);
//echo "</pre>";

$js = $qa->get_results_json();
echo $js;




