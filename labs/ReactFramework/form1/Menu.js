'use strict';
//import {MyPageHeader}  from './MyPageHeader.js';


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyPageHeader = function (_React$Component) {
    _inherits(MyPageHeader, _React$Component);

    function MyPageHeader(props) {
        _classCallCheck(this, MyPageHeader);

        var _this = _possibleConstructorReturn(this, (MyPageHeader.__proto__ || Object.getPrototypeOf(MyPageHeader)).call(this, props));

        _this.state = {};
        _this.text = props.text;
        _this.style = { backgroundColor: 'orange', fontSize: "24px" };
        return _this;
    }

    _createClass(MyPageHeader, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: this.style },
                this.text
            );
        }
    }]);

    return MyPageHeader;
}(React.Component);

var MenuItemTitle = function (_React$Component2) {
    _inherits(MenuItemTitle, _React$Component2);

    function MenuItemTitle(props) {
        _classCallCheck(this, MenuItemTitle);

        var _this2 = _possibleConstructorReturn(this, (MenuItemTitle.__proto__ || Object.getPrototypeOf(MenuItemTitle)).call(this, props));

        _this2.text = props.text;
        return _this2;
    }

    _createClass(MenuItemTitle, [{
        key: 'render',
        value: function render() {
            var style = { backgroundColor: "navy",
                color: "white",
                padding: "2px",
                paddingLeft: "5px"
            };
            return React.createElement(
                'div',
                { style: style },
                this.text
            );
        }
    }]);

    return MenuItemTitle;
}(React.Component);

var MenuItem = function (_React$Component3) {
    _inherits(MenuItem, _React$Component3);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this3 = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

        _this3.model = { text: props.text, url: props.url };
        _this3.styleNormal = {
            backgroundColor: "lightyellow",
            borderBottom: "1px solid Silver",
            paddingLeft: "10px",
            paddingTop: "2px",
            paddingBottom: "5px",
            fontWeight: 'normal'
        };
        _this3.styleHili = {
            backgroundColor: "yellow",
            borderBottom: "1px solid Silver",
            paddingLeft: "10px",
            paddingTop: "2px",
            paddingBottom: "5px",
            cursor: 'pointer',
            fontWeight: 'bold'
        };
        _this3.state = { x: 0, y: 0, style: _this3.styleNormal };
        return _this3;
    }

    _createClass(MenuItem, [{
        key: '_onMouseMove',
        value: function _onMouseMove(e) {
            this.setState({ x: e.screenX, y: e.screenY, style: this.styleHili });
        }
    }, {
        key: '_onMouseOut',
        value: function _onMouseOut(e) {
            this.setState({ x: 0, y: 0, style: this.styleNormal });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: this.state.style,
                    onMouseMove: this._onMouseMove.bind(this),
                    onMouseOut: this._onMouseOut.bind(this)
                },
                React.createElement(
                    'a',
                    { href: this.model.url },
                    this.model.text
                )
            );
        }
    }]);

    return MenuItem;
}(React.Component);

;