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
class MenuItemTitle  extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text 
    }
    render(){
        let style = {backgroundColor:"navy"
                        ,color:"white"
                        ,padding: "2px"
                        ,paddingLeft:"5px"
                    }
        return <div style={style}>
            {this.text}
        </div>
    }
}
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.model = {text: props.text , url: props.url }
        this.styleNormal = {
            backgroundColor:"lightyellow"
            , borderBottom:"1px solid Silver"
            , paddingLeft:  "10px"
            , paddingTop: "2px"
            , paddingBottom: "5px"
            , fontWeight: 'normal'
        }
        this.styleHili =  {
            backgroundColor:"yellow"
            , borderBottom:"1px solid Silver"
            , paddingLeft:  "10px"
            , paddingTop: "2px"
            , paddingBottom: "5px"
            , cursor: 'pointer'
            , fontWeight: 'bold'
        }
        this.state = {x:0,y:0 ,style:this.styleNormal}
    }
    _onMouseMove(e) {
        this.setState({ x: e.screenX, y: e.screenY , style:this.styleHili});
        
    }
    _onMouseOut(e) {
        this.setState({ x: 0, y: 0 ,style:this.styleNormal });
    }

    render(){
        return  <div style={this.state.style}
                    onMouseMove={this._onMouseMove.bind(this)}
                    onMouseOut={this._onMouseOut.bind(this)}
                    >
                    <a href={this.model.url}>{this.model.text}  
                     {/* <small>({this.state.x},{this.state.y})</small> */}

                    </a>
                </div>;
    }
};