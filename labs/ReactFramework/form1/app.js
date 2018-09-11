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

var MenuItem = function (_React$Component2) {
    _inherits(MenuItem, _React$Component2);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this2 = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

        _this2.model = { text: props.text, url: props.url };
        _this2.style = { backgroundColor: "orange", borderBottom: "1px solid Silver" };
        return _this2;
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: this.style },
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

var MyPage = function (_React$Component3) {
    _inherits(MyPage, _React$Component3);

    function MyPage(props) {
        _classCallCheck(this, MyPage);

        var _this3 = _possibleConstructorReturn(this, (MyPage.__proto__ || Object.getPrototypeOf(MyPage)).call(this, props));

        _this3.state = {};
        _this3.styleContent = { height: "400px", verticalAlign: "top" };
        _this3.styleLeftMenu = { width: "100px", verticalAlign: "top" };
        return _this3;
    }

    _createClass(MyPage, [{
        key: 'render',
        value: function render() {
            var arr = ['menu1', 'menu2', 'm3', 'm4'];
            for (var i = 5; i < 10; i++) {
                arr.push("menu" + i);
            }
            var arrMenu = arr.map(function (name, index) {
                return React.createElement(MenuItem, { key: index, url: '#', text: name });
            });
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'table',
                    { border: '1', width: '100%' },
                    React.createElement(
                        'tbody',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                { colSpan: '2' },
                                React.createElement(MyPageHeader, { text: '\u0E23\u0E30\u0E1A\u0E1A\u0E07\u0E32\u0E19\u0E2D\u0E30\u0E44\u0E23\u0E2A\u0E31\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07' })
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                { colSpan: '2' },
                                'Menu'
                            )
                        ),
                        React.createElement(
                            'tr',
                            { style: this.styleContent },
                            React.createElement(
                                'td',
                                { style: this.styleLeftMenu },
                                ' left',
                                arrMenu
                            ),
                            React.createElement(
                                'td',
                                null,
                                'content'
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                { colSpan: '2', style: { textAlign: "center" } },
                                ' Footer '
                            )
                        )
                    )
                ),
                'TEST'
            );
        }
    }]);

    return MyPage;
}(React.Component);

var root = document.querySelector('#root');
ReactDOM.render(React.createElement(MyPage, null), root);