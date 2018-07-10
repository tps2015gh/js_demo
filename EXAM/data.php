<?php 
//$q = @$_GET['q'];

class QuestionAns{
    var $arr; 
    var $results ;
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
                ];
    }
    public function compile(){
        $vals = array_values($this->arr);
        $this->results = [];
        foreach($this->arr as $k=>$v){
            $items = [];
            $this->results[] = ['q'=>$k , 'ans'=> $v , 'items'=> $items  ];
        }
        return $this->results; 
    }
    public function get_results(){
        return $this->results; 
    }
}

echo "DATA";
$qa = new QuestionAns();
print_r($qa);
$qa->init();
$qa->compile(); 
echo "<pre>";
print_r( $qa->results ) ;
echo "</pre>";