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
        $item = $vals[$pick_idx];
        unset($vals[$pick_idx]);
        $vals = array_values($vals) ;   // REORDR KEY INDEX 
        return $item ;
    }
    public function compile(){
        $this->results = [];
        $idx = 0 ; 
        foreach($this->arr as $k=>$vcorrect){
            $correct_idx  = random_int(0,$this->max_choice -1 );
            $vals = array_values($this->arr);
            $vals = array_diff($vals, [ $vcorrect ]);   // remove correct answer from choice 
            $vals = array_values($vals);                // re-index keys again 

            $items = [];
            for($i=0;$i < $this->max_choice ;$i++ ){
                if($i != $correct_idx ){
                    $items[] = ['val'=>  ''. $this->pick_random_from($vals) , 'correct'=> false  ]; 
                }else{
                    $items[] = ['val' => ''. $vcorrect , 'correct'=>true ] ;
                }
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
