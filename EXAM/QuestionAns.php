<?php 
class QuestionAns{
    var $arr; 
    var $results ;
    var $max_choice ; 
    public function init(){
        $this->arr= [ 'pig'=>'หมู'
                    ,'fish'=>'ปลา'
                    ,'cat'=> 'แมว'
                    ,'dog'=>'หมา'
                    ,'can'=>'กระป๋อง'
                    ,'box'=>'กล่อง'
                    ,'who'=>'ใคร'
                    ,'what'=>'อะไร'
                    ,'sun'=>'พระอาทิตย์'
                    ,'moon'=>'พระจันทร์'
                    ,'star'=>'ดาว'
                    ,'quick'=>'รวดเร็ว'
                    ,'disk' => 'จาน'
                    ,'cave' => 'ถ้ำ'
                    ,'strong' => 'แข็งแรง'
                ];
        $this->max_choice = 6 ; 
    }
    private function pick_random_from(&$vals){
        $pick_idx = random_int(0, count($vals) -1 ) ;
       // print_r($vals);
       // echo "<br>idx = $pick_idx" ;
        $item = $vals[$pick_idx];
        unset($vals[$pick_idx]);
        $vals = array_values($vals) ;   // REORDR KEY INDEX 
        return $item ;
    }
    public function compile(){
        
       // $keys = array_keys($this->arr);
        $this->results = [];
        $idx = 0 ; 
        foreach($this->arr as $k=>$vcorrect){
            //echo "<h1>$k</h1>";
            $correct_idx  = random_int(0,$this->max_choice -1 );
            $vals = array_values($this->arr);
            $vals = array_diff($vals, [ $vcorrect ]);   // remove correct answer from choice 
            $vals = array_values($vals);                // re-index keys again 

            
            //echo "<br> START >> ";
           // print_r($vals);
            $items = [];
            for($i=0;$i < $this->max_choice ;$i++ ){
                if($i != $correct_idx ){
                    $items[] = ['val'=>  ''. $this->pick_random_from($vals) , 'correct'=> false  ]; 
                }else{
                    $items[] = ['val' => ''. $vcorrect , 'correct'=>true ] ;
                }
                //echo "<br> >>>>> ";
                //print_r($vals);
            }
            $this->results[] = ['qname'=> 'Q'.$idx  , 'qtext'=>$k , 'ans'=> $vcorrect , 'items'=> $items ,'idx'=>$idx   ];
            $idx += 1 ;
        }
        return $this->results; 
    }
    protected function get_random_ans($not_index){
        $vals = array_values($this->arr);
        
    }
    protected function get_random_num_1toN($n ){
        //echo "<br>get_random_num_1toN($n )<br>";
        $rnd = random_int(1,$n  );
        return $rnd ;        
    }
    public function get_results(){
        return $this->results; 
    }
    public function get_results_json(){
        return json_encode($this->results,JSON_UNESCAPED_UNICODE);
    }
}// class 
