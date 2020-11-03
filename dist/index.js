function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var update = _interopDefault(require('react-addons-update'));
var reactBootstrap = require('react-bootstrap');
var moment = _interopDefault(require('moment-timezone'));
require('moment/locale/ko');
var go = require('react-icons/go');
var BootstrapTable = _interopDefault(require('react-bootstrap-table-next'));

var styles = {"test":"_3ybTi"};

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var ProductCodeGen = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProductCodeGen, _React$Component);

  function ProductCodeGen(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.componentDidMount = function () {
      _this.GetValue(_this.props.ModifyMode);
    };

    _this.GetValue = function (ModifyMode) {
      if (ModifyMode !== true) {
        var Code = moment().format('X');

        _this.setState({
          Code: Code
        });
      }
    };

    _this.RefreshNum = function () {
      var Code = moment().format('X');

      _this.setState({
        Code: Code
      });
    };

    _this.GetNum = function () {
      var _ref;

      return _ref = {}, _ref[_this.props.name] = _this.state.Code, _ref;
    };

    _this.onChange = function () {};

    _this.props.forwardGetValue(function () {
      return _this.GetNum();
    });

    _this.state = {
      Code: _this.props.InitialValue
    };
    return _this;
  }

  var _proto = ProductCodeGen.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "CodeGen"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Text, {
      className: "CodeGenText"
    }, this.state.Code), this.props.ModifyMode ? null : /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      size: "sm",
      variant: "SelectEnd",
      onClick: this.RefreshNum
    }, /*#__PURE__*/React.createElement(go.GoSync, {
      color: "#1f8b3b",
      size: "1.5em"
    })));
  };

  return ProductCodeGen;
}(React.Component);

var PopupCatSelect = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PopupCatSelect, _React$Component);

  function PopupCatSelect(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.UpdateTable = function () {
      var CategoryView = [];

      for (var i = 0; i < _this.props.name.length; i++) {
        CategoryView.push([]);
      }

      _this.props.hierarchyData.forEach(function (view, index) {
        if (index === 0) CategoryView[index] = view;else {
          view.forEach(function (viewitem) {
            if (_this.state.CategorySelect[index - 1].key === viewitem.pid) {
              CategoryView[index].push(viewitem);
            }
          });
        }
      });

      return CategoryView;
    };

    _this.ViewTable = function () {
      var CategoryView = _this.UpdateTable();

      var columns = [{
        dataField: 'Code',
        text: '분류 코드'
      }, {
        dataField: 'Name',
        text: '분류 이름'
      }];
      var table = [];

      _this.props.name.forEach(function (item, catindex) {
        table.push( /*#__PURE__*/React.createElement(reactBootstrap.Carousel.Item, {
          className: "TableView",
          key: catindex
        }, /*#__PURE__*/React.createElement("div", {
          className: "TableTitle"
        }, item), /*#__PURE__*/React.createElement(BootstrapTable, {
          ref: _this.Table[catindex],
          data: CategoryView[catindex],
          keyField: "Code",
          orderField: "Num",
          columns: columns,
          selectRow: _this.selectRowProp(catindex)
        })));
      });

      return /*#__PURE__*/React.createElement(reactBootstrap.Carousel, {
        activeIndex: _this.state.index,
        direction: _this.state.direction,
        onSelect: _this.handleSelect,
        controls: false,
        indicators: false,
        interval: null
      }, table);
    };

    _this.onSelect = function (count, row) {
      var CategorySelect = _this.state.CategorySelect;

      for (var i = 0; i < CategorySelect.length; i++) {
        if (i === count) CategorySelect[i] = row;else if (i >= count) CategorySelect[i] = '';
      }

      if (count === _this.props.name.length - 1) {
        var _update;

        _this.setState({
          CategorySelect: CategorySelect,
          done: update(_this.state.done, (_update = {}, _update[count] = {
            $set: true
          }, _update))
        });
      } else {
        var _update2;

        _this.setState({
          CategorySelect: CategorySelect,
          next: update(_this.state.next, (_update2 = {}, _update2[count] = {
            $set: true
          }, _update2))
        });
      }
    };

    _this.onPrev = function () {
      var _update3, _update4;

      _this.MoveCarousel(_this.state.index - 1);

      _this.Table[_this.state.index].current.selectionContext.selected = [];

      _this.setState({
        CategorySelect: update(_this.state.CategorySelect, (_update3 = {}, _update3[_this.state.index] = {
          $set: ''
        }, _update3)),
        done: update(_this.state.done, (_update4 = {}, _update4[_this.state.index] = {
          $set: false
        }, _update4))
      });
    };

    _this.onNext = function () {
      var _update5;

      _this.MoveCarousel(_this.state.index + 1);

      _this.setState({
        prev: update(_this.state.prev, (_update5 = {}, _update5[_this.state.index + 1] = {
          $set: true
        }, _update5))
      });
    };

    _this.MoveCarousel = function (selectedIndex) {
      _this.setState({
        index: selectedIndex
      });
    };

    _this.selectRowProp = function (count) {
      return {
        mode: 'radio',
        hideSelectColumn: true,
        clickToSelect: true,
        onSelect: _this.onSelect.bind(_assertThisInitialized(_this), count),
        bgColor: '#ffffe0'
      };
    };

    _this.onHide = function () {
      _this.setState({
        index: 0
      });

      _this.props.onHide();
    };

    _this.ViewSelected = function () {
      var table = [];

      if (_this.state.CategorySelect !== undefined) {
        _this.state.CategorySelect.forEach(function (item, catindex) {
          if (catindex === _this.state.index) {
            table.push( /*#__PURE__*/React.createElement("div", {
              className: "SelectedContents",
              key: catindex
            }, /*#__PURE__*/React.createElement("div", {
              className: "SelectedTitleCurrent"
            }, _this.props.name[catindex]), /*#__PURE__*/React.createElement("div", {
              className: "SelectedBodyCurrent"
            }, item[_this.props.viewField])));
          } else {
            table.push( /*#__PURE__*/React.createElement("div", {
              className: "SelectedContents",
              key: catindex
            }, /*#__PURE__*/React.createElement("div", {
              className: "SelectedTitle"
            }, _this.props.name[catindex]), /*#__PURE__*/React.createElement("div", {
              className: "SelectedBody"
            }, item[_this.props.viewField])));
          }
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "SelectedView"
      }, table);
    };

    _this.Table = [];
    var _CategorySelect = [];
    var _CategoryView = [];
    var prev = [];
    var next = [];
    var done = [];

    for (var _i = 0; _i < _this.props.name.length; _i++) {
      _CategorySelect.push('');

      _CategoryView.push([]);

      prev.push(false);
      next.push(false);
      done.push(false);

      _this.Table.push(React.createRef());
    }

    _this.state = {
      isloading: false,
      index: 0,
      direction: 0,
      CategorySelect: _CategorySelect,
      CategoryView: _CategoryView,
      prev: prev,
      next: next,
      done: done
    };
    return _this;
  }

  var _proto = PopupCatSelect.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.UpdateTable();
  };

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/React.createElement("div", {
      className: "PopupCatSelect"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Modal, {
      centered: true,
      show: this.props.ispopup,
      size: "md",
      onHide: this.onHide
    }, /*#__PURE__*/React.createElement(reactBootstrap.Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "PopHeader"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Title"
    }, this.props.title))), /*#__PURE__*/React.createElement(reactBootstrap.Modal.Body, {
      className: "PopBody"
    }, this.ViewSelected(), this.ViewTable()), /*#__PURE__*/React.createElement(reactBootstrap.Modal.Footer, {
      className: "PopFooter"
    }, /*#__PURE__*/React.createElement("div", {
      className: "MoveView"
    }, !this.state.prev[this.state.index] ? null : /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "Move",
      className: "FooterButton",
      onClick: function onClick() {
        return _this2.onPrev();
      }
    }, "\uC774\uC804")), /*#__PURE__*/React.createElement("div", null, !this.state.done[this.state.index] ? null : /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "Submit",
      className: "FooterButton",
      onClick: function onClick() {
        return _this2.props.onOk(_this2.state.CategorySelect);
      }
    }, "\uC644\uB8CC")), /*#__PURE__*/React.createElement("div", {
      className: "MoveView"
    }, !this.state.next[this.state.index] ? null : /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "Move",
      className: "FooterButton",
      onClick: function onClick() {
        return _this2.onNext();
      }
    }, "\uB2E4\uC74C")), !this.state.isloading ? null : /*#__PURE__*/React.createElement(reactBootstrap.Spinner, {
      as: "span",
      animation: "grow",
      size: "sm",
      role: "status",
      "aria-hidden": "true"
    }))));
  };

  return PopupCatSelect;
}(React.Component);

var CatSelected = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CatSelected, _React$Component);

  function CatSelected(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.ViewSelected = function () {
      var table = [];

      if (_this.state.CategorySelect !== undefined) {
        _this.state.CategorySelect.forEach(function (item, catindex) {
          if (item !== null) table.push( /*#__PURE__*/React.createElement("div", {
            className: "ViewSelected",
            key: catindex
          }, /*#__PURE__*/React.createElement("div", {
            className: "name"
          }, _this.props.name[catindex], " : "), /*#__PURE__*/React.createElement("div", {
            className: "data"
          }, item[_this.props.viewField])));
        });
      }

      return table;
    };

    _this.openCatSelect = function () {
      _this.setState({
        ShowPopup: true
      });
    };

    _this.CatSelectOk = function (CategorySelect) {
      _this.setState({
        CategorySelect: CategorySelect,
        ShowPopup: false
      });
    };

    _this.hideCatSelect = function () {
      _this.setState({
        ShowPopup: false
      });
    };

    _this.state = {
      ShowPopup: false
    };
    return _this;
  }

  var _proto = CatSelected.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "CatSelectView"
    }, /*#__PURE__*/React.createElement(PopupCatSelect, {
      title: this.props.title,
      name: this.props.name,
      viewField: this.props.viewField,
      hierarchyData: this.props.hierarchyData,
      ispopup: this.state.ShowPopup,
      onHide: this.hideCatSelect,
      onOk: this.CatSelectOk
    }), /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      variant: "SelectPre",
      onClick: this.openCatSelect
    }, "\uC120\uD0DD"), /*#__PURE__*/React.createElement("div", {
      className: "CatSelectContent"
    }, this.ViewSelected()));
  };

  return CatSelected;
}(React.Component);

var CreatePage = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CreatePage, _React$Component);

  function CreatePage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.Submit = function () {
      _this.Submitbtn.current.click();
    };

    _this.InitDataSet = function (Struct) {
      var InitData = {};
      Struct.forEach(function (StructItems) {
        InitData = Object.assign(InitData, _this.InitItemsSet(StructItems.Items));
      });
      return InitData;
    };

    _this.InitItemsSet = function (Struct) {
      var InitData = {};
      Struct.forEach(function (item) {
        if (item.format === 'Text') {
          InitData[item.id] = '';
        } else if (item.format === 'UploadImage') {
          InitData[item.id] = {
            UploadInfo: [],
            FileList: []
          };
        } else if (item.format === 'UploadHtml') {
          InitData[item.id] = {
            UploadInfo: [],
            FileList: []
          };
        } else if (item.format === 'Price') {
          InitData[item.id] = '';
        } else if (item.format === 'Tab') {
          var TabData = _this.InitItemsSet(item.Items);

          InitData = Object.assign(InitData, TabData);
        } else if (item.format === 'Textline') {
          InitData[item.id] = '';
        }
      });
      return InitData;
    };

    _this.InitPopupSet = function (Struct) {
      var InitPopup = {};
      Struct.forEach(function (StructItems) {
        StructItems.Items.forEach(function (item, index) {
          if (item.format === 'Hierarchy') {
            InitPopup[item.id] = false;
          }
        });
      });
      return InitPopup;
    };

    _this.ItemsView = function (Struct, values, handleChange) {
      var ItemsTable = [];
      Struct.forEach(function (item, index) {
        if (item.format === 'CodeGen') ItemsTable.push( /*#__PURE__*/React.createElement("div", {
          className: "ItemView",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "ItemTitle"
        }, item.name), /*#__PURE__*/React.createElement("div", {
          className: "ItemContent"
        }, /*#__PURE__*/React.createElement(ProductCodeGen, {
          key: index,
          ModifyMode: _this.state.ModifyMode,
          InitialValue: values[item.id],
          name: item.id,
          forwardGetValue: function forwardGetValue(c) {
            _this.GetNum = c;
          }
        }))));else if (item.format === 'Text') ItemsTable.push( /*#__PURE__*/React.createElement("div", {
          className: "ItemView",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "ItemTitle"
        }, item.name), /*#__PURE__*/React.createElement("div", {
          className: "ItemContent"
        }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
          required: true,
          type: item.inputtype,
          name: item.id,
          value: values[item.id],
          onChange: handleChange
        }))));else if (item.format === 'Textline') ItemsTable.push( /*#__PURE__*/React.createElement("div", {
          className: "ItemView",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "ItemTitle"
        }, item.name), /*#__PURE__*/React.createElement("div", {
          className: "ItemContent"
        }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
          required: true,
          type: "text",
          name: item.id,
          value: values[item.id],
          onChange: handleChange
        }))));else if (item.format === 'Price') ItemsTable.push( /*#__PURE__*/React.createElement("div", {
          className: "ItemView",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "ItemTitle"
        }, item.name), /*#__PURE__*/React.createElement("div", {
          className: "ItemContent"
        }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
          required: true,
          type: "number",
          name: item.id,
          value: values[item.id],
          onChange: handleChange
        }))));else if (item.format === 'Select') ItemsTable.push( /*#__PURE__*/React.createElement("div", {
          className: "ItemView",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "ItemTitle"
        }, item.name), /*#__PURE__*/React.createElement("div", {
          className: "ItemContent"
        }, /*#__PURE__*/React.createElement(reactBootstrap.Form.Control, {
          required: true,
          custom: true,
          as: "select",
          name: item.id,
          value: values[item.id]
        }, _this.GetOption(item.SelectText)))));else if (item.format === 'Hierarchy') {
          ItemsTable.push( /*#__PURE__*/React.createElement("div", {
            className: "ItemView",
            key: index
          }, /*#__PURE__*/React.createElement("div", {
            className: "ItemTitle"
          }, item.name), /*#__PURE__*/React.createElement("div", {
            className: "ItemContent"
          }, /*#__PURE__*/React.createElement(CatSelected, {
            title: item.name,
            name: item.HierarchyData.name,
            viewField: item.HierarchyData.viewField,
            hierarchyData: _this.props.hierarchyData[item.id],
            selected: values[item.id]
          }))));
        } else if (item.format === 'UploadImage') {
          ItemsTable.push( /*#__PURE__*/React.createElement("div", {
            className: "ItemViewRow",
            key: index
          }, /*#__PURE__*/React.createElement("div", {
            className: "ItemHeader"
          }, /*#__PURE__*/React.createElement("div", {
            className: "ItemTitle"
          }, item.name), /*#__PURE__*/React.createElement("div", {
            className: "ItemContent"
          }, /*#__PURE__*/React.createElement(reactBootstrap.Form.File, {
            label: values[item.id].UploadInfo.length + "\uAC1C",
            "data-browse": "+",
            onChange: function onChange(e) {
              _this.ImageFileChange(e, item, values);
            },
            multiple: true,
            custom: true
          }))), /*#__PURE__*/React.createElement("div", {
            className: "ItemBody"
          }, /*#__PURE__*/React.createElement("div", {
            className: "ImageformBox"
          }, _this.GetImage(values, item)))));
        } else if (item.format === 'UploadHtml') ItemsTable.push( /*#__PURE__*/React.createElement("div", {
          className: "ItemViewRow",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "ItemHeader"
        }, /*#__PURE__*/React.createElement("div", {
          className: "ItemTitle"
        }, item.name), /*#__PURE__*/React.createElement("div", {
          className: "ItemContent"
        }, /*#__PURE__*/React.createElement(reactBootstrap.Form.File, {
          label: values[item.id].UploadInfo.length + "\uAC1C",
          "data-browse": "+",
          onChange: function onChange(e) {
            _this.ImageFileChange(e, item, values);
          },
          multiple: true,
          custom: true
        }))), /*#__PURE__*/React.createElement("div", {
          className: "ItemBody"
        }, /*#__PURE__*/React.createElement("div", {
          className: "ImageformBox"
        }, _this.GetImage(values, item)))));else if (item.format === 'Tab') {
          var FormViewTable = _this.ItemsView(item.Items, values, handleChange);

          var TabTable = [];
          FormViewTable.forEach(function (TabItem, Tabindex) {
            TabTable.push( /*#__PURE__*/React.createElement(reactBootstrap.Tab, {
              key: Tabindex,
              className: "ImageformBox",
              eventKey: item.Items[TabItem.key].id,
              title: item.Items[TabItem.key].name
            }, TabItem));
          });
          ItemsTable.push( /*#__PURE__*/React.createElement("div", {
            className: "ItemViewRow",
            key: index
          }, /*#__PURE__*/React.createElement("div", {
            className: "ItemHeader"
          }, /*#__PURE__*/React.createElement("div", {
            className: "ItemTitle"
          }, item.name), /*#__PURE__*/React.createElement("div", {
            className: "ItemContent"
          })), /*#__PURE__*/React.createElement("div", {
            className: "ItemBody"
          }, /*#__PURE__*/React.createElement(reactBootstrap.Tabs, {
            defaultActiveKey: item.Items[0].id,
            id: "noanim-tab-example"
          }, TabTable))));
        }
      });
      return ItemsTable;
    };

    _this.FormView = function (Struct, values, handleChange) {
      var FormTable = [];
      Struct.forEach(function (item, index) {
        if (item.format === 'Titletext') FormTable.push( /*#__PURE__*/React.createElement("div", {
          className: "FormView",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "FormViewTitle"
        }, item.name), /*#__PURE__*/React.createElement("div", {
          className: "FormViewPage"
        }, _this.ItemsView(item.Items, values, handleChange))));
      });
      return FormTable;
    };

    _this.GetImage = function (values, item) {
      var images = [];
      values[item.id].UploadInfo.forEach(function (value, index) {
        images.push( /*#__PURE__*/React.createElement("div", {
          className: "Imageform",
          key: index
        }, /*#__PURE__*/React.createElement(reactBootstrap.Image, {
          className: "ImageformImage",
          variant: "top",
          src: value.url
        }), /*#__PURE__*/React.createElement("div", {
          className: "ImageformTitle"
        }, value.name), /*#__PURE__*/React.createElement(reactBootstrap.Button, {
          className: "ImageformXBTN",
          onClick: function onClick() {
            _this.remove(value, index);
          }
        }, "x")));
      });
      return images;
    };

    _this.ImageFileChange = function (e, item, value) {
      if (e.target.files) {
        [].forEach.call(e.target.files, function (file) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onloadend = function (e) {
            var _update;

            _this.setState({
              InitData: update(_this.state.InitData, (_update = {}, _update[item.id] = {
                UploadInfo: {
                  $push: [{
                    name: file.name,
                    url: e.target.result
                  }]
                },
                FileList: {
                  $push: [file]
                }
              }, _update))
            }, function () {
              return console.log('InitData:', _this.state.InitData);
            });
          };
        });
      }
    };

    _this.GetOption = function (SelectText) {
      var opt = [];
      SelectText.forEach(function (SelectText, index) {
        opt.push( /*#__PURE__*/React.createElement("option", {
          key: index
        }, SelectText));
      });
      return opt;
    };

    _this.onSubmit = function (data) {
      data = Object.assign(data, _this.GetNum());

      _this.props.onSubmit(data);
    };

    _this.handleChange = function () {};

    _this.Submitbtn = React.createRef();
    if (_this.props.Submit !== undefined) _this.props.Submit(function () {
      return _this.Submit();
    });
    _this.state = {
      isloading: false,
      create_state: 0,
      InitData: _this.InitDataSet(_this.props.DataStruct.Struct),
      imagefile: [],
      htmlfile: null,
      deleteimage: []
    };
    return _this;
  }

  var _proto = CreatePage.prototype;

  _proto.render = function render() {
    var bt_style = {};

    if (this.props.CustomSubmit === true) {
      bt_style = {
        display: 'none'
      };
    } else {
      bt_style = {
        display: 'flex'
      };
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "ProductCreatePage"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "ProductCreateView"
    }, this.FormView(this.props.DataStruct.Struct, this.state.InitData, this.handleChange)), /*#__PURE__*/React.createElement("div", {
      className: "ProductCreateFooter",
      style: bt_style
    }, /*#__PURE__*/React.createElement(reactBootstrap.Button, {
      ref: this.Submitbtn,
      type: "submit",
      variant: "Submit",
      size: "sm"
    }, this.state.ModifyMode ? '수정' : '등록'))));
  };

  return CreatePage;
}(React.Component);

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.CreatePage = CreatePage;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
