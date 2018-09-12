

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.styleContent = {height:"400px" ,verticalAlign:"top"}
    this.styleLeftMenu = {width:"120px",verticalAlign:"top"}
  }
  render() {
    var arr = ['menu1','menu2','m3','m4']
        for(var i = 5 ; i <10 ; i ++){
            arr.push("menu"+ i)
        }
    arr = []
    arr.push({text:"เมนู 1",url:"path1" })
    arr.push({text:"เมนู 2",url:"path2" })
    arr.push({text:"เมนู 3",url:"path3" })
    arr.push({text:"เมนู 4",url:"path4" })
    arr.push({text:"เมนู 5",url:"path5" })
    arr.push({text:"เมนู 6",url:"path6" })
    arr.push({text:"เมนู 7",url:"path7" })
    var arrMenu =  arr.map(function(obj,index){
        return <MenuItem key={index} url={obj.url} text={obj.text} />
    })
    return <div>
        <table border="1" width="100%">
        <tbody> 
        <tr><td colSpan="2" ><MyPageHeader text="ระบบงานอะไรสักอย่าง" ></MyPageHeader></td></tr>
        <tr><td colSpan="2" >Menu 
        </td></tr>
        <tr style={this.styleContent}>
            <td style={this.styleLeftMenu}>
            <MenuItemTitle text="MENU Left"/>
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