'use strict';
//import {MyPageHeader}  from './MyPageHeader.js';


class MyPageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.text = props.text;
        this.style = { backgroundColor: 'orange', fontSize: "24px" };
    }
    render() {
        return <div style={this.style}>
            {this.text}
        </div>;
    }
}

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.model = {text: props.text , url: props.url }
        this.style = {backgroundColor:"orange", borderBottom:"1px solid Silver"}
    }
    render(){
        return  (<div style={this.style}>
                    <a href={this.model.url}>{this.model.text}</a>
                </div>);
    }
};

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.styleContent = {height:"400px" ,verticalAlign:"top"}
    this.styleLeftMenu = {width:"100px",verticalAlign:"top"}
  }
  render() {
    var arr = ['menu1','menu2','m3','m4']
        for(var i = 5 ; i <10 ; i ++){
            arr.push("menu"+ i)
        }
    var arrMenu =  arr.map(function(name,index){
        return <MenuItem key={index} url="#" text={name} />
    })
    return <div>
        <table border="1" width="100%">
        <tbody> 
        <tr><td colSpan="2" ><MyPageHeader text="ระบบงานอะไรสักอย่าง" ></MyPageHeader></td></tr>
        <tr><td colSpan="2" >Menu 
        </td></tr>
        <tr style={this.styleContent}>
            <td style={this.styleLeftMenu}> left 
                {arrMenu}
            </td>
            <td>content</td>
        </tr>
        <tr><td colSpan="2" style={{textAlign:"center"}} > Footer </td></tr>
        </tbody>
        </table>
        TEST  
        </div>
  }
}

const root = document.querySelector('#root');
ReactDOM.render(<MyPage/>, root);