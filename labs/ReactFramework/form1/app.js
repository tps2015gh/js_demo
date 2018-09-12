var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyPage = function (_React$Component) {
    _inherits(MyPage, _React$Component);

    function MyPage(props) {
        _classCallCheck(this, MyPage);

        var _this = _possibleConstructorReturn(this, (MyPage.__proto__ || Object.getPrototypeOf(MyPage)).call(this, props));

        _this.state = {};
        _this.styleContent = { height: "400px", verticalAlign: "top" };
        _this.styleLeftMenu = { width: "120px", verticalAlign: "top" };
        return _this;
    }

    _createClass(MyPage, [{
        key: "render",
        value: function render() {
            var arr = ['menu1', 'menu2', 'm3', 'm4'];
            for (var i = 5; i < 10; i++) {
                arr.push("menu" + i);
            }
            arr = [];
            arr.push({ text: "เมนู 1", url: "path1" });
            arr.push({ text: "เมนู 2", url: "path2" });
            arr.push({ text: "เมนู 3", url: "path3" });
            arr.push({ text: "เมนู 4", url: "path4" });
            arr.push({ text: "เมนู 5", url: "path5" });
            arr.push({ text: "เมนู 6", url: "path6" });
            arr.push({ text: "เมนู 7", url: "path7" });
            var arrMenu = arr.map(function (obj, index) {
                return React.createElement(MenuItem, { key: index, url: obj.url, text: obj.text });
            });
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    { border: "1", width: "100%" },
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                { colSpan: "2" },
                                React.createElement(MyPageHeader, { text: "\u0E23\u0E30\u0E1A\u0E1A\u0E07\u0E32\u0E19\u0E2D\u0E30\u0E44\u0E23\u0E2A\u0E31\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07" })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                { colSpan: "2" },
                                "Menu"
                            )
                        ),
                        React.createElement(
                            "tr",
                            { style: this.styleContent },
                            React.createElement(
                                "td",
                                { style: this.styleLeftMenu },
                                React.createElement(MenuItemTitle, { text: "MENU Left" }),
                                arrMenu
                            ),
                            React.createElement(
                                "td",
                                null,
                                "content"
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                { colSpan: "2", style: { textAlign: "center" } },
                                " Footer "
                            )
                        )
                    )
                ),
                "TEST"
            );
        }
    }]);

    return MyPage;
}(React.Component);

var root = document.querySelector('#root');
ReactDOM.render(React.createElement(MyPage, null), root);