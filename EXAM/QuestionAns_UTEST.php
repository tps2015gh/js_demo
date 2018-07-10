<?php
include("./QuestionAns.php");

class QuestionAns_UTEST extends QuestionAns {
    var $obj ; 
    public function UNIT_get_random_num_1toN(){
        echo  "<h2>".  __METHOD__ . "</h2>";
        $this->init();
        $this->compile(); 
        $arr_count =  [];
        for($i=0;$i<1000;$i++){
            //echo $i . " ";
            $rnd = $this->get_random_num_1toN(20);
            if(! array_key_exists($rnd,$arr_count)){
                $arr_count[$rnd] = 1;            
            }else{
                $arr_count[$rnd] += 1  ;
            }
        }
        ksort($arr_count);
        foreach($arr_count as $key => $val){
            echo "<br> $key =>  [count=$val] ";
        }
    }        

    public function UTEST_get_random_num_0toNsub1_except(){
        echo  "<h2>".  __METHOD__ . "</h2>";
        $except_num = 3; 
        $arr_count =  [];
        
        for($i=0;$i<1000;$i++){
            //echo $i . " ";
            $rnd = $this->get_random_num_0toNsub1_except(20,$except_num);
            if(! array_key_exists($rnd,$arr_count)){
                $arr_count[$rnd] = 1;            
            }else{
                $arr_count[$rnd] += 1  ;
            }
        }
        ksort($arr_count);
        foreach($arr_count as $key => $val){
            echo "<br> $key =>  [count=$val] ";
        }        
    }
    
}
//========================================


echo "DATA";
//$qa = new QuestionAns();
$utest  = new QuestionAns_UTEST();
//$utest->init($qa);
$utest->UNIT_get_random_num_1toN();
$utest->UTEST_get_random_num_0toNsub1_except();

?>