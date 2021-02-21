function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var update$1 = _interopDefault(require('react-addons-update'));
require('react-datepicker/dist/react-datepicker.css');
var reactBootstrap = require('react-bootstrap');
var moment = _interopDefault(require('moment-timezone'));
require('moment/locale/ko');
var go = require('react-icons/go');
var TextareaAutosize = _interopDefault(require('react-textarea-autosize'));
var NumberFormat = _interopDefault(require('react-number-format'));
var BootstrapTable = _interopDefault(require('react-bootstrap-table-next'));
var _ = require('lodash');
var reactDraftWysiwyg = require('react-draft-wysiwyg');
var draftJs = require('draft-js');
require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css');
var draftToHtml = _interopDefault(require('draftjs-to-html'));
var htmlToDraft = _interopDefault(require('html-to-draftjs'));
var DatePicker = _interopDefault(require('react-datepicker'));
var BootstrapSwitchButton = _interopDefault(require('bootstrap-switch-button-react'));
var fa = require('react-icons/fa');
var im = require('react-icons/im');
var ReactJson = _interopDefault(require('react-json-view'));
var paginationFactory = _interopDefault(require('react-bootstrap-table2-paginator'));
var ToolkitProvider = require('react-bootstrap-table2-toolkit');
var ToolkitProvider__default = _interopDefault(ToolkitProvider);
var bs = require('react-icons/bs');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
        var Code = _this.state.prefix + moment().format('X');

        _this.setState({
          Code: Code
        }, function () {
          return _this.onChange();
        });
      }
    };

    _this.RefreshNum = function (event) {
      event.preventDefault();
      event.stopPropagation();
      var Code = _this.state.prefix + moment().format('X');

      _this.setState({
        Code: Code
      }, function () {
        return _this.onChange();
      });
    };

    _this.onChange = function () {
      if (_this.props.onChange !== undefined) {
        _this.props.onChange({
          target: {
            name: _this.props.name,
            value: _this.state.Code
          }
        });
      }
    };

    var prefix = _this.props.prefix;
    if (prefix === undefined) prefix = '';
    _this.state = {
      Code: _this.props.InitialValue,
      prefix: prefix
    };
    return _this;
  }

  var _proto = ProductCodeGen.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "CodeGen"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "CodeGenText"
    }, this.state.Code), this.props.ModifyMode ? null : /*#__PURE__*/React__default.createElement("button", {
      size: "sm",
      className: "btn-SelectEnd",
      onClick: this.RefreshNum
    }, /*#__PURE__*/React__default.createElement(go.GoSync, {
      color: "#1f8b3b",
      size: "1.5em"
    })));
  };

  return ProductCodeGen;
}(React__default.Component);

var InitData = function InitData() {
  return '';
};
var ItemsView = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemView",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(ProductCodeGen, {
    key: index,
    ModifyMode: ModifyMode,
    InitialValue: values[item.id],
    name: item.id,
    onChange: handleChange,
    prefix: item.prefix
  })));
};

var M_CodeGen = {
  __proto__: null,
  InitData: InitData,
  ItemsView: ItemsView
};

var InitData$1 = function InitData() {
  return '';
};
var ItemsView$1 = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemView",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
    value: values[item.id],
    className: "TextInput",
    required: item.required,
    type: "text",
    name: item.id,
    onChange: handleChange
  })));
};

var M_Text = {
  __proto__: null,
  InitData: InitData$1,
  ItemsView: ItemsView$1
};

var InitData$2 = function InitData() {
  return '';
};
var ItemsView$2 = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemView",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
    value: values[item.id] || '',
    className: "TextInput",
    required: item.required,
    type: "date",
    name: item.id,
    onChange: handleChange
  })));
};

var M_Date = {
  __proto__: null,
  InitData: InitData$2,
  ItemsView: ItemsView$2
};

var InitData$3 = function InitData() {
  return '';
};
var ItemsView$3 = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemView",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(TextareaAutosize, {
    value: values[item.id],
    className: "TextInput",
    required: item.required,
    name: item.id,
    onChange: handleChange,
    minRows: 5,
    maxRows: 10
  })));
};

var M_Textline = {
  __proto__: null,
  InitData: InitData$3,
  ItemsView: ItemsView$3
};

var InitData$4 = function InitData() {
  return '';
};

var _onValueChange = function onValueChange(id, value, handleChange) {
  handleChange({
    target: {
      name: id,
      value: value.value
    }
  });
};

var ItemsView$4 = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemView",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(NumberFormat, {
    required: item.required,
    className: "TextInput form-control",
    value: values[item.id],
    thousandSeparator: item.Separator,
    suffix: item.suffix,
    onValueChange: function onValueChange(value) {
      return _onValueChange(item.id, value, handleChange);
    }
  })));
};

var M_Price = {
  __proto__: null,
  InitData: InitData$4,
  ItemsView: ItemsView$4
};

var InitData$5 = function InitData(item) {
  return item.SelectText[0];
};
var ItemsView$5 = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemView",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
    value: values[item.id],
    className: "TextSelect",
    required: item.required,
    custom: true,
    as: "select",
    name: item.id,
    onChange: handleChange
  }, GetOption(item.SelectText))));
};

var GetOption = function GetOption(SelectText) {
  var opt = [];
  SelectText.forEach(function (SelectText, index) {
    opt.push( /*#__PURE__*/React__default.createElement("option", {
      key: index
    }, SelectText));
  });
  return opt;
};

var M_Select = {
  __proto__: null,
  InitData: InitData$5,
  ItemsView: ItemsView$5
};

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
        table.push( /*#__PURE__*/React__default.createElement(reactBootstrap.Carousel.Item, {
          className: "TableView",
          key: catindex
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "TableTitle"
        }, item), /*#__PURE__*/React__default.createElement(BootstrapTable, {
          ref: _this.Table[catindex],
          data: CategoryView[catindex],
          keyField: "Code",
          orderField: "Num",
          columns: columns,
          selectRow: _this.selectRowProp(catindex)
        })));
      });

      return /*#__PURE__*/React__default.createElement(reactBootstrap.Carousel, {
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
          done: update$1(_this.state.done, (_update = {}, _update[count] = {
            $set: true
          }, _update))
        });
      } else {
        var _update2;

        _this.setState({
          CategorySelect: CategorySelect,
          next: update$1(_this.state.next, (_update2 = {}, _update2[count] = {
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
        CategorySelect: update$1(_this.state.CategorySelect, (_update3 = {}, _update3[_this.state.index] = {
          $set: ''
        }, _update3)),
        done: update$1(_this.state.done, (_update4 = {}, _update4[_this.state.index] = {
          $set: false
        }, _update4))
      });
    };

    _this.onNext = function () {
      var _update5;

      _this.MoveCarousel(_this.state.index + 1);

      _this.setState({
        prev: update$1(_this.state.prev, (_update5 = {}, _update5[_this.state.index + 1] = {
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
            table.push( /*#__PURE__*/React__default.createElement("div", {
              className: "SelectedContents",
              key: catindex
            }, /*#__PURE__*/React__default.createElement("div", {
              className: "SelectedTitleCurrent"
            }, _this.props.name[catindex]), /*#__PURE__*/React__default.createElement("div", {
              className: "SelectedBodyCurrent"
            }, item[_this.props.viewField])));
          } else {
            table.push( /*#__PURE__*/React__default.createElement("div", {
              className: "SelectedContents",
              key: catindex
            }, /*#__PURE__*/React__default.createElement("div", {
              className: "SelectedTitle"
            }, _this.props.name[catindex]), /*#__PURE__*/React__default.createElement("div", {
              className: "SelectedBody"
            }, item[_this.props.viewField])));
          }
        });
      }

      return /*#__PURE__*/React__default.createElement("div", {
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

      _this.Table.push(React__default.createRef());
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

    return /*#__PURE__*/React__default.createElement("div", {
      className: "PopupCatSelect"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Modal, {
      centered: true,
      show: this.props.ispopup,
      size: "md",
      onHide: this.onHide
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "PopHeader"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "Title"
    }, this.props.title))), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Body, {
      className: "PopBody"
    }, this.ViewSelected(), this.ViewTable()), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Footer, {
      className: "PopFooter"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "MoveView"
    }, !this.state.prev[this.state.index] ? null : /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "Move",
      className: "FooterButton",
      onClick: function onClick() {
        return _this2.onPrev();
      }
    }, "\uC774\uC804")), /*#__PURE__*/React__default.createElement("div", null, !this.state.done[this.state.index] ? null : /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "Submit",
      className: "FooterButton",
      onClick: function onClick() {
        return _this2.props.onOk(_this2.state.CategorySelect).then(function () {
          var CategorySelect = [];
          var prev = [];
          var next = [];
          var done = [];

          for (var i = 0; i < _this2.props.name.length; i++) {
            CategorySelect.push('');
            prev.push(false);
            next.push(false);
            done.push(false);

            _this2.Table.push(React__default.createRef());
          }

          _this2.setState({
            index: 0,
            direction: 0,
            CategorySelect: CategorySelect,
            prev: prev,
            next: next,
            done: done
          });
        });
      }
    }, "\uC644\uB8CC")), /*#__PURE__*/React__default.createElement("div", {
      className: "MoveView"
    }, !this.state.next[this.state.index] ? null : /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "Move",
      className: "FooterButton",
      onClick: function onClick() {
        return _this2.onNext();
      }
    }, "\uB2E4\uC74C")), !this.state.isloading ? null : /*#__PURE__*/React__default.createElement(reactBootstrap.Spinner, {
      as: "span",
      animation: "grow",
      size: "sm",
      role: "status",
      "aria-hidden": "true"
    }))));
  };

  return PopupCatSelect;
}(React__default.Component);

var CatSelect = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CatSelect, _React$Component);

  function CatSelect(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.ViewSelected = function () {
      var table = [];

      if (_this.state.CategorySelect !== []) {
        _this.state.CategorySelect.forEach(function (item, catindex) {
          if (item !== null) table.push( /*#__PURE__*/React__default.createElement("div", {
            className: "ViewSelected",
            key: catindex
          }, /*#__PURE__*/React__default.createElement("div", {
            className: "name"
          }, _this.props.HierarchyNames[catindex], " : "), /*#__PURE__*/React__default.createElement("div", {
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
        CategorySelect: _this.props.InitialValue !== undefined ? CategorySelect : [],
        ShowPopup: false
      }, function () {
        return _this.onChange(CategorySelect);
      });
    };

    _this.onChange = function (CategorySelect) {
      if (_this.props.onChange !== undefined) {
        _this.props.onChange({
          target: {
            name: _this.props.name,
            value: CategorySelect
          }
        });
      }
    };

    _this.hideCatSelect = function () {
      _this.setState({
        ShowPopup: false
      });
    };

    var _CategorySelect = [];
    if (_this.props.InitialValue !== undefined) _CategorySelect = _this.props.InitialValue;
    _this.state = {
      CategorySelect: _CategorySelect,
      ShowPopup: false
    };
    return _this;
  }

  var _proto = CatSelect.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/React__default.createElement("div", {
      className: "CatSelectView"
    }, /*#__PURE__*/React__default.createElement(PopupCatSelect, {
      CategorySelect: this.props.CategorySelect,
      title: this.props.title,
      name: this.props.HierarchyNames,
      viewField: this.props.viewField,
      hierarchyData: this.props.hierarchyData,
      ispopup: this.state.ShowPopup,
      onHide: this.hideCatSelect,
      onOk: function onOk(value) {
        return new Promise(function (resolve) {
          _this2.CatSelectOk(value);

          resolve();
        });
      }
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "SelectPre",
      onClick: this.openCatSelect
    }, "\uC120\uD0DD"), /*#__PURE__*/React__default.createElement("div", {
      className: "CatSelectContent"
    }, this.ViewSelected()));
  };

  return CatSelect;
}(React__default.Component);

var InitData$6 = function InitData() {
  return [];
};
var ItemsView$6 = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  if (item.Select === undefined) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "ItemView",
      key: index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "ItemTitle"
    }, item.name), /*#__PURE__*/React__default.createElement("div", {
      className: "ItemContent"
    }, /*#__PURE__*/React__default.createElement(CatSelect, {
      InitialValue: values[item.id],
      name: item.id,
      title: item.name,
      HierarchyNames: item.HierarchyData.name,
      viewField: item.HierarchyData.viewField,
      hierarchyData: M.props.hierarchyData[item.id],
      selected: values[item.id],
      onChange: handleChange
    })));
  } else if (item.Select === 'Multi') {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "ItemViewRow",
      key: index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "ItemHeader"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "ItemTitle"
    }, item.name), /*#__PURE__*/React__default.createElement("div", {
      className: "ItemContent"
    }, /*#__PURE__*/React__default.createElement(CatSelect, {
      name: item.id,
      title: item.name,
      HierarchyNames: item.HierarchyData.name,
      viewField: item.HierarchyData.viewField,
      hierarchyData: M.props.hierarchyData[item.Selectid],
      selected: values[item.id],
      onChange: function onChange(e) {
        var _update;

        var dat = [];

        if (ModifyMode.state.InitData[item.Selectid] !== undefined) {
          var bool = true;
          dat = M.state.InitData[item.Selectid];
          dat.forEach(function (val, ind) {
            if (val[3].Code === e.target.value[3].Code) bool = false;
          });
          if (bool) dat.push(e.target.value);
        } else {
          dat.push(e.target.value);
        }

        M.setState({
          InitData: update(M.state.InitData, (_update = {}, _update[item.Selectid] = {
            $set: dat
          }, _update))
        });
      }
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "ItemBody"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "ViewListformBox"
    }, GetHierarchy(values, item))));
  } else {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "ItemView",
      key: index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "ItemTitle"
    }, item.name), /*#__PURE__*/React__default.createElement("div", {
      className: "ItemContent"
    }, /*#__PURE__*/React__default.createElement(CatSelect, {
      InitialValue: values[item.id],
      name: item.id,
      title: item.name,
      HierarchyNames: item.HierarchyData.name,
      viewField: item.HierarchyData.viewField,
      hierarchyData: M.props.hierarchyData[item.id],
      selected: values[item.id],
      onChange: handleChange
    })));
  }
};

var GetHierarchy = function GetHierarchy(values, item) {
  var viewlist = [];

  var onRemove = function onRemove(Selvalue) {
    var RemoveData = values[item.Selectid].filter(function (arr) {
      return arr[3].Code !== Selvalue[3].Code;
    });
    console.log(RemoveData);
  };

  function DataView(Selvalue) {
    var table = '';
    Selvalue.forEach(function (catitem, catindex) {
      if (catitem !== null) {
        table += catitem[item.HierarchyData.viewField] + ' ';
      }
    });
    return table;
  }

  if (values[item.Selectid] !== undefined) {
    values[item.Selectid].forEach(function (Selvalue, Selindex) {
      console.log(Selvalue);
      viewlist.push( /*#__PURE__*/React__default.createElement("div", {
        className: "ViewList",
        key: Selindex
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "Viewitle"
      }, Selindex + 1), /*#__PURE__*/React__default.createElement("div", {
        className: "ViewContent"
      }, DataView(Selvalue)), /*#__PURE__*/React__default.createElement(Button, {
        style: {
          top: 0,
          right: 0,
          margin: 0,
          padding: 0,
          width: 34,
          height: 34,
          fontSize: 10,
          backgroundColor: '#555555'
        },
        onClick: function onClick() {
          return onRemove(Selvalue);
        }
      }, "\uC0AD\uC81C")));
    });
  }

  return viewlist;
};

var M_Hierarchy = {
  __proto__: null,
  InitData: InitData$6,
  ItemsView: ItemsView$6
};

var PopupListSelect = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PopupListSelect, _React$Component);

  function PopupListSelect(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.ListData = function () {
      var ListData = _this.props[_this.props.dataprops];

      if (ListData === undefined) {
        ListData = [];
      }

      return ListData;
    };

    _this.onSelect = function (row) {
      _this.setState({
        Selected: row,
        done: true
      });
    };

    _this.MoveCarousel = function (selectedIndex) {
      _this.setState({
        index: selectedIndex
      });
    };

    _this.selectRowProp = function () {
      return {
        mode: 'radio',
        hideSelectColumn: true,
        clickToSelect: true,
        onSelect: _this.onSelect,
        bgColor: '#ffffe0'
      };
    };

    _this.onHide = function () {
      _this.setState({
        index: 0
      });

      _this.props.onHide();
    };

    _this.state = {
      isloading: false,
      done: false
    };
    return _this;
  }

  var _proto = PopupListSelect.prototype;

  _proto.componentDidMount = function componentDidMount() {};

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/React__default.createElement("div", {
      className: "PopupCatSelect"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Modal, {
      centered: true,
      show: this.props.ispopup,
      onHide: this.onHide
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "PopHeader"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "Title"
    }, this.props.title))), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Body, {
      className: "PopBody"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "TableView"
    }, /*#__PURE__*/React__default.createElement(BootstrapTable, _extends({}, this.props, {
      data: this.ListData(),
      selectRow: this.selectRowProp()
    })))), /*#__PURE__*/React__default.createElement(reactBootstrap.Modal.Footer, {
      className: "PopFooter"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "DoneView"
    }, !this.state.done ? null : /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "Submit",
      className: "FooterButton",
      onClick: function onClick() {
        return _this2.props.onOk(_this2.state.Selected);
      }
    }, "\uC644\uB8CC")), !this.state.isloading ? null : /*#__PURE__*/React__default.createElement(reactBootstrap.Spinner, {
      as: "span",
      animation: "grow",
      size: "sm",
      role: "status",
      "aria-hidden": "true"
    }))));
  };

  return PopupListSelect;
}(React__default.Component);

var ListSelected = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ListSelected, _React$Component);

  function ListSelected(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.ViewSelected = function () {
      if (_this.state.Selected !== '') {
        var name = '';

        _this.props.columns.forEach(function (element) {
          if (element.dataField === _this.props.viewField) name = element.text;
        });

        return /*#__PURE__*/React__default.createElement("div", {
          className: "ViewSelected"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "name"
        }, name, " : "), /*#__PURE__*/React__default.createElement("div", {
          className: "data"
        }, _this.state.Selected[_this.props.viewField]));
      }

      return '';
    };

    _this.openSelect = function () {
      _this.setState({
        ShowPopup: true
      });
    };

    _this.onSelectOk = function (Selected) {
      _this.setState({
        Selected: Selected,
        ShowPopup: false
      }, function () {
        return _this.onChange();
      });
    };

    _this.onChange = function () {
      if (_this.props.onChange !== undefined) {
        _this.props.onChange({
          target: {
            name: _this.props.name,
            value: _this.state.Selected
          }
        });
      }
    };

    _this.hideCatSelect = function () {
      _this.setState({
        ShowPopup: false
      });
    };

    var _Selected = '';
    if (_this.props.InitialValue !== undefined) _Selected = _this.props.InitialValue;
    _this.state = {
      Selected: _Selected,
      ShowPopup: false
    };
    return _this;
  }

  var _proto = ListSelected.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "CatSelectView"
    }, /*#__PURE__*/React__default.createElement(PopupListSelect, _extends({}, this.props, {
      ispopup: this.state.ShowPopup,
      onHide: this.hideCatSelect,
      onOk: this.onSelectOk
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "SelectPre",
      onClick: this.openSelect
    }, "\uC120\uD0DD"), /*#__PURE__*/React__default.createElement("div", {
      className: "CatSelectContent"
    }, this.ViewSelected()));
  };

  return ListSelected;
}(React__default.Component);

var ViewList = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ViewList, _React$Component);

  function ViewList(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.ItemsView = function () {
      var viewlist = [];

      if (_this.props.selected !== '') {
        _this.props.columns.forEach(function (item, index) {
          viewlist.push( /*#__PURE__*/React__default.createElement("div", {
            className: "ViewList",
            key: index
          }, /*#__PURE__*/React__default.createElement("div", {
            className: "Viewitle"
          }, item.text, " "), /*#__PURE__*/React__default.createElement("div", {
            className: "ViewContent"
          }, _this.props.selected[item.dataField])));
        });
      }

      return viewlist;
    };

    return _this;
  }

  var _proto = ViewList.prototype;

  _proto.render = function render() {
    return this.ItemsView();
  };

  return ViewList;
}(React__default.Component);

var InitData$7 = function InitData() {
  return '';
};
var ItemsView$7 = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(ListSelected, _extends({}, M.props, {
    InitialValue: values[item.id],
    name: item.id,
    title: item.name,
    selected: values[item.id],
    onChange: handleChange,
    columns: item.columns,
    dataprops: item.dataprops,
    keyField: item.keyField,
    orderField: item.orderField,
    viewField: item.viewField
  })))), item.Viewhidden ? null : /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ViewListformBox"
  }, /*#__PURE__*/React__default.createElement(ViewList, {
    InitialValue: values[item.id],
    name: item.id,
    title: item.name,
    selected: values[item.id],
    columns: item.columns,
    keyField: item.keyField,
    orderField: item.orderField,
    viewField: item.viewField
  }))));
};

var M_ListSelect = {
  __proto__: null,
  InitData: InitData$7,
  ItemsView: ItemsView$7
};

var InitData$8 = function InitData() {
  return '';
};
var ItemsView$8 = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformBox"
  }, M.ImageSelectList(values, item))));
};

var M_ImageSelect = {
  __proto__: null,
  InitData: InitData$8,
  ItemsView: ItemsView$8
};

var InitData$9 = function InitData() {
  return {
    FileList: [],
    UrlList: []
  };
};
var ItemsView$9 = function ItemsView(M, index, item, values, handleChange, ModifyMode, UpdateInitData) {
  if (values[item.id].FileList === undefined) values[item.id].FileList = [];
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.File, {
    label: values[item.id].FileList.length + "\uAC1C",
    "data-browse": "\uD30C\uC77C \uCD94\uAC00",
    onChange: function onChange(e) {
      ImageFileChange(e, item.id, UpdateInitData, values);
    },
    multiple: true,
    custom: true
  }))), !ModifyMode ? /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformBox"
  }, /*#__PURE__*/React__default.createElement(GetUploagImage, {
    values: values,
    item: item,
    UpdateInitData: UpdateInitData
  }))) : /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody2"
  }, /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
    style: {
      paddingBottom: '10px'
    }
  }, "\uAE30\uC874 \uC774\uBBF8\uC9C0"), /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformBox"
  }, /*#__PURE__*/React__default.createElement(GetCurrentImage, {
    values: values,
    item: item,
    UpdateInitData: UpdateInitData
  })), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
    style: {
      paddingBottom: '10px'
    }
  }, "\uC0C8 \uC774\uBBF8\uC9C0"), /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformBox"
  }, /*#__PURE__*/React__default.createElement(GetUploagImage, {
    values: values,
    item: item,
    UpdateInitData: UpdateInitData
  }))));
};

var GetUploagImage = function GetUploagImage(props) {
  var values = props.values,
      item = props.item,
      UpdateInitData = props.UpdateInitData;

  var _useState = React.useState(false),
      isShown = _useState[0],
      setIsShown = _useState[1];

  var images = [];
  var FileList = values[item.id].FileList;
  FileList.forEach(function (value, index) {
    images.push( /*#__PURE__*/React__default.createElement("div", {
      className: "Imageform",
      key: 'UP' + index
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      className: "ImageformImage",
      variant: "top",
      src: value.url,
      onMouseEnter: function onMouseEnter() {
        return setIsShown('UP' + index);
      },
      onMouseLeave: function onMouseLeave() {
        return setIsShown(false);
      }
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "ImageformTitle"
    }, value.file.name), isShown === 'UP' + index && /*#__PURE__*/React__default.createElement("div", {
      className: "ImageformPop"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      variant: "top",
      src: value.url
    }), /*#__PURE__*/React__default.createElement("div", null, value.file.name)), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      className: "ImageformXBTN",
      onClick: function onClick() {
        var Fi = _.concat(values[item.id].FileList);

        var Ur = _.concat(values[item.id].UrlList);

        Up.splice(index, 1);
        Fi.splice(index, 1);
        var data = {
          UrlList: Ur,
          FileList: Fi
        };
        UpdateInitData(item.id, data);
      }
    }, "x")));
  });
  return images;
};

var getFilename = function getFilename(url) {
  var ext = url.split('/').pop();
  if (ext === url) return '';
  return ext;
};

var GetCurrentImage = function GetCurrentImage(props) {
  var values = props.values,
      item = props.item,
      UpdateInitData = props.UpdateInitData;

  var _useState2 = React.useState(false),
      isShown = _useState2[0],
      setIsShown = _useState2[1];

  var images = [];
  var UrlList = values[item.id].UrlList;
  UrlList.forEach(function (value, index) {
    images.push( /*#__PURE__*/React__default.createElement("div", {
      className: "Imageform",
      key: 'UR' + index
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      className: "ImageformImage",
      variant: "top",
      src: value,
      onMouseEnter: function onMouseEnter() {
        return setIsShown('UR' + index);
      },
      onMouseLeave: function onMouseLeave() {
        return setIsShown(false);
      }
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "ImageformTitle"
    }, getFilename(value)), isShown === 'UR' + index && /*#__PURE__*/React__default.createElement("div", {
      className: "ImageformPop"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      variant: "top",
      src: value
    }), /*#__PURE__*/React__default.createElement("div", null, value)), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      className: "ImageformXBTN",
      onClick: function onClick() {
        var Fi = _.concat(values[item.id].FileList);

        var Ur = _.concat(values[item.id].UrlList);

        Ur.splice(index, 1);
        var data = {
          UrlList: Ur,
          FileList: Fi
        };
        UpdateInitData(item.id, data);
      }
    }, "x")));
  });
  return images;
};

var ImageFileChange = function ImageFileChange(e, id, UpdateInitData, values) {
  if (e.target.files) {
    [].forEach.call(e.target.files, function (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        var data = update$1(values[id], {
          FileList: {
            $push: [{
              file: file,
              url: e.target.result
            }]
          }
        });
        UpdateInitData(id, data);
      };
    });
  }
};

var M_UploadImage = {
  __proto__: null,
  InitData: InitData$9,
  ItemsView: ItemsView$9
};

var InitData$a = function InitData() {
  return [];
};
var ItemsView$a = function ItemsView(M, index, item, values, handleChange, ModifyMode, UpdateInitData) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name)), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformBox"
  }, ListImage(values, item, UpdateInitData))));
};

var ListImage = function ListImage(values, item, UpdateInitData) {
  if (values[item.id] === undefined) values[item.id] = [];
  var images = [];
  values[item.id].forEach(function (value, index) {
    images.push( /*#__PURE__*/React__default.createElement("div", {
      className: "Imageform",
      key: index
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      className: "ImageformImage",
      variant: "top",
      src: value
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "ImageformTitle"
    }, value.name), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      className: "ImageformXBTN",
      onClick: function onClick() {
        var data = _.concat(values[item.id]);

        data.splice(index, 1);
        UpdateInitData(item.id, data);
      }
    }, "x")));
  });
  return images;
};

var M_Imageset = {
  __proto__: null,
  InitData: InitData$a,
  ItemsView: ItemsView$a
};

var InitData$b = function InitData() {
  return '';
};
var ItemsView$b = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(UploadBoard, {
    InitData: values[item.id],
    onValueChange: function onValueChange(value) {
      return handleChange({
        target: {
          name: item.id,
          value: value
        }
      });
    }
  }))));
};

var UploadBoard = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(UploadBoard, _React$Component);

  function UploadBoard(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.onEditorStateChange = function (editorState) {
      _this.setState({
        editorState: editorState
      });

      var value = draftToHtml(draftJs.convertToRaw(_this.state.editorState.getCurrentContent()));

      _this.props.onValueChange(value);
    };

    var contentBlock = htmlToDraft(_this.props.InitData);

    if (contentBlock) {
      var contentState = draftJs.ContentState.createFromBlockArray(contentBlock.contentBlocks);
      var editorState = draftJs.EditorState.createWithContent(contentState);
      _this.state = {
        editorState: editorState
      };
    }

    return _this;
  }

  var _proto = UploadBoard.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(reactDraftWysiwyg.Editor, {
      defaultEditorState: this.state.editorState,
      toolbarClassName: "editorToolbar",
      wrapperClassName: "editorWrapper",
      editorClassName: "editorBox",
      onEditorStateChange: this.onEditorStateChange,
      localization: {
        locale: 'ko'
      },
      toolbar: {
        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'textAlign', 'colorPicker', 'emoji']
      }
    });
  };

  return UploadBoard;
}(React__default.Component);

var M_HtmlEditer = {
  __proto__: null,
  InitData: InitData$b,
  ItemsView: ItemsView$b
};

var InitData$c = function InitData(item) {
  var _Object$assign;

  if (item["default"] === undefined) item["default"] = item.Items[0].id;
  var TabData = InitItemsSet(item.Items);
  Object.assign(TabData, (_Object$assign = {}, _Object$assign[item.id] = item["default"], _Object$assign));
  return TabData;
};
var ItemsView$c = function ItemsView(M, index, item, values, handleChange, ModifyMode, UpdateInitData) {
  var ItemsTable = [];
  var FormViewTable = [];
  item.Items.forEach(function (Tabitem, index) {
    FormViewTable.push(ItemsView$i(M, index, Tabitem, values, handleChange, ModifyMode, UpdateInitData));
  });
  var TabTable = [];
  FormViewTable.forEach(function (TabItem, Tabindex) {
    TabTable.push( /*#__PURE__*/React__default.createElement(reactBootstrap.Tab, {
      key: Tabindex,
      className: "ImageformBox",
      eventKey: item.Items[TabItem.key].id,
      title: item.Items[TabItem.key].name
    }, TabItem));
  });
  if (item["default"] === undefined) item["default"] = item.Items[0].id;
  ItemsTable.push( /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Tabs, {
    defaultActiveKey: item["default"],
    id: "noanim-tab-example",
    onSelect: function onSelect(value) {
      return onValueChange(item.id, value, handleChange);
    }
  }, TabTable))));
  return ItemsTable;
};

var onValueChange = function onValueChange(id, value, handleChange) {
  handleChange({
    target: {
      name: id,
      value: value
    }
  });
};

var M_Tab = {
  __proto__: null,
  InitData: InitData$c,
  ItemsView: ItemsView$c
};

var InitData$d = function InitData() {
  return '';
};
var ItemsView$d = function ItemsView(M, index, item, values, handleChange, ModifyMode) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ViewListformBox"
  }, element)));
};

var M_Child = {
  __proto__: null,
  InitData: InitData$d,
  ItemsView: ItemsView$d
};

var InitData$e = function InitData() {
  return '';
};
var ItemsView$e = function ItemsView(M, index, item, values, handleChange, ModifyMode, UpdateInitData) {
  var selected;
  if (values[item.id]) selected = new Date(values[item.id]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(DatePicker, {
    name: item.id,
    selected: selected,
    dateFormat: item.dateFormat,
    onChange: function onChange(date) {
      return UpdateInitData(item.id, date);
    },
    showTimeSelect: item.showTimeSelect
  }))));
};

var M_DatePicker = {
  __proto__: null,
  InitData: InitData$e,
  ItemsView: ItemsView$e
};

var InitData$f = function InitData(item) {
  if (item["default"] === undefined) return false;else return item["default"];
};
var ItemsView$f = function ItemsView(M, index, item, values, handleChange, ModifyMode, UpdateInitData) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(BootstrapSwitchButton, {
    onlabel: item.onlabel,
    onstyle: item.onstyle,
    offlabel: item.offlabel,
    offstyle: item.offstyle,
    checked: values[item.id],
    width: item.width,
    height: item.height,
    size: item.size,
    style: item.style,
    onChange: function onChange(value) {
      return UpdateInitData(item.id, value);
    }
  }))));
};

var M_Switch = {
  __proto__: null,
  InitData: InitData$f,
  ItemsView: ItemsView$f
};

var InitData$g = function InitData() {
  return '';
};
var ItemsView$g = function ItemsView(M, index, item, values, handleChange, ModifyMode, ViewCallback) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
    type: 'text',
    value: values[item.id],
    className: "TextInput",
    name: item.id,
    placeholder: "\uC27C\uD45C(,)\uB85C \uAD6C\uBD84",
    onChange: handleChange
  }), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    style: {
      top: 0,
      right: 0,
      margin: 0,
      padding: 0,
      width: 34,
      height: 34,
      fontSize: 10,
      backgroundColor: '#555555'
    },
    onClick: function onClick() {
      var dat = [];
      var strArray = M.state.InitData[item.id].split(',');
      strArray.forEach(function (value) {
        if (value.trim() !== '') dat.push({
          name: value.trim(),
          price: 0
        });
      });
      ViewCallback(item.Selectid, dat);
    }
  }, "\uCD94\uAC00"))), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ViewListformBox"
  }, M.GetSetOption(values, item))));
};

var M_Option = {
  __proto__: null,
  InitData: InitData$g,
  ItemsView: ItemsView$g
};

var InitData$h = function InitData() {
  return {
    File: '',
    Url: ''
  };
};
var ItemsView$h = function ItemsView(M, index, item, values, handleChange, ModifyMode, UpdateInitData) {
  var File = values[item.id].File;
  var Url = values[item.id].Url;
  var name = '';
  var browseText = '이미지 추가';

  if (File !== '' && File !== undefined) {
    name = File.name;
  }

  if (Url !== '' && Url !== undefined) {
    browseText = '이미지 교체';
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemViewRow",
    key: index
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemHeader"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ItemTitle"
  }, item.name), /*#__PURE__*/React__default.createElement("div", {
    className: "ItemContent"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form.File, {
    label: name,
    "data-browse": browseText,
    onChange: function onChange(e) {
      ImageFileChange$1(e, item.id, UpdateInitData);
    },
    custom: true
  }))), /*#__PURE__*/React__default.createElement(GetUploagImage$1, {
    values: values,
    item: item,
    UpdateInitData: UpdateInitData
  }));
};

var GetUploagImage$1 = function GetUploagImage(props) {
  var values = props.values,
      item = props.item;

  var _useState = React.useState(false),
      isShown = _useState[0],
      setIsShown = _useState[1];

  var images = '';
  var File = values[item.id].File;
  var Url = values[item.id].Url;
  var name = '';
  if (Url !== '' && Url !== undefined) name = Url;
  if (File !== '' && File !== undefined) name = File.name;
  if (Url !== '' && Url !== undefined) images = /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformSingle"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
    className: "ImageformSingleImage",
    variant: "top",
    src: Url,
    onMouseEnter: function onMouseEnter() {
      return setIsShown('UP');
    },
    onMouseLeave: function onMouseLeave() {
      return setIsShown(false);
    }
  }), isShown === 'UP' && /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformPop"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
    variant: "top",
    src: Url
  }), /*#__PURE__*/React__default.createElement("div", null, name)));
  return /*#__PURE__*/React__default.createElement("div", {
    className: "ItemBody2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformBox",
    style: {
      flexDirection: 'column'
    }
  }, images, /*#__PURE__*/React__default.createElement("div", {
    className: "ImageformTitle"
  }, name)));
};

var ImageFileChange$1 = function ImageFileChange(e, id, UpdateInitData, values) {
  if (e.target.files) {
    [].forEach.call(e.target.files, function (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        var data = {
          File: file,
          Url: e.target.result
        };
        UpdateInitData(id, data);
      };
    });
  }
};

var M_UploadImageSingle = {
  __proto__: null,
  InitData: InitData$h,
  ItemsView: ItemsView$h
};

var FormatSet = [{
  name: 'CodeGen',
  module: M_CodeGen
}, {
  name: 'Text',
  module: M_Text
}, {
  name: 'Date',
  module: M_Date
}, {
  name: 'Textline',
  module: M_Textline
}, {
  name: 'Price',
  module: M_Price
}, {
  name: 'Select',
  module: M_Select
}, {
  name: 'Hierarchy',
  module: M_Hierarchy
}, {
  name: 'ListSelect',
  module: M_ListSelect
}, {
  name: 'ImageSelect',
  module: M_ImageSelect
}, {
  name: 'UploadImage',
  module: M_UploadImage
}, {
  name: 'Imageset',
  module: M_Imageset
}, {
  name: 'HtmlEditer',
  module: M_HtmlEditer
}, {
  name: 'Tab',
  module: M_Tab
}, {
  name: 'Child',
  module: M_Child
}, {
  name: 'DatePicker',
  module: M_DatePicker
}, {
  name: 'Switch',
  module: M_Switch
}, {
  name: 'Option',
  module: M_Option
}, {
  name: 'UploadImageSingle',
  module: M_UploadImageSingle
}];
var GetModule = function GetModule(format) {
  return FormatSet.find(function (m) {
    return m.name.toLowerCase() === format.toLowerCase();
  }).module;
};
var InitData$i = function InitData(item) {
  return GetModule(item.format).InitData(item);
};
var ItemsView$i = function ItemsView(M, index, item, values, handleChange, ModifyMode, ViewCallback) {
  return GetModule(item.format).ItemsView(M, index, item, values, handleChange, ModifyMode, ViewCallback);
};

var InitItemsSet = function InitItemsSet(Struct) {
  var InitData = {};
  Struct.forEach(function (item) {
    if (item.format === 'Tab') Object.assign(InitData, InitData$i(item));else InitData[item.id] = InitData$i(item);
  });
  return InitData;
};

var CreatePage = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CreatePage, _React$Component);

  function CreatePage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.Submit = function () {
      _this.Submitbtn.current.click();
    };

    _this.FormView = function (Struct, InitData, handleChange) {
      var ModifyMode = _this.props.ModifyMode;
      if (ModifyMode === undefined) ModifyMode = false;
      var FormTable = [];
      Struct.forEach(function (item, index) {
        if (item.format === 'Titletext') FormTable.push( /*#__PURE__*/React__default.createElement("div", {
          className: "FormView",
          key: index
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "FormViewTitle"
        }, item.name), /*#__PURE__*/React__default.createElement("div", {
          className: "FormViewPage"
        }, _this.ItemsView(item.Items, _this.state.InitData, handleChange, ModifyMode))));
      });
      return FormTable;
    };

    _this.InitDataSet = function (ModifyMode, Struct, Data) {
      var InitData = {};

      if (ModifyMode) {
        Struct.forEach(function (StructItems) {
          InitData = Object.assign(InitData, InitItemsSet(StructItems.Items));
        });
        InitData = Object.assign(InitData, Data);
      } else {
        Struct.forEach(function (StructItems) {
          InitData = Object.assign(InitData, InitItemsSet(StructItems.Items));
        });
      }

      return InitData;
    };

    _this.InitPopupSet = function (StructItems) {
      var InitPopup = {};
      StructItems.Items.forEach(function (item) {
        InitPopup[item.id] = false;
      });
      return InitPopup;
    };

    _this.ItemsView = function (Struct, values, handleChange, ModifyMode) {
      if (values === null) return null;
      var ItemsTable = [];
      Struct.forEach(function (item, index) {
        if (item.format === 'Child') {
          _this.props.children.forEach(function (element) {
            if (element.key === item.key) {
              ItemsTable.push( /*#__PURE__*/React__default.createElement("div", {
                className: "ItemViewRow",
                key: index
              }, /*#__PURE__*/React__default.createElement("div", {
                className: "ItemBody"
              }, /*#__PURE__*/React__default.createElement("div", {
                className: "ViewListformBox"
              }, element))));
            }
          });
        } else {
          ItemsTable.push(ItemsView$i(_assertThisInitialized(_this), index, item, values, handleChange, ModifyMode, _this.UpdateInitData));
        }
      });
      return ItemsTable;
    };

    _this.UpdateInitData = function (id, data) {
      var _update;

      _this.setState({
        InitData: update$1(_this.state.InitData, (_update = {}, _update[id] = {
          $set: data
        }, _update))
      });
    };

    _this.GetSetOption = function (values, item) {
      var viewlist = [];

      if (values[item.Selectid] !== undefined) {
        values[item.Selectid].forEach(function (Selvalue, Selindex) {
          viewlist.push( /*#__PURE__*/React__default.createElement("div", {
            className: "ViewList",
            key: Selindex
          }, /*#__PURE__*/React__default.createElement("div", {
            className: "ItemTitle"
          }, Selvalue.name), /*#__PURE__*/React__default.createElement("input", {
            type: 'number',
            className: "TextInput",
            required: true,
            value: Selvalue.price,
            name: Selvalue.price,
            onChange: function onChange(e) {
              var _item$Selectid, _update2;

              _this.setState({
                InitData: update$1(_this.state.InitData, (_update2 = {}, _update2[item.Selectid] = (_item$Selectid = {}, _item$Selectid[ind] = {
                  price: {
                    $set: e.target.value
                  }
                }, _item$Selectid), _update2))
              });
            }
          })));
        });
      }

      return viewlist;
    };

    _this.ImageSelectList = function (values, item) {
      var images = [];

      if (item.Select === 'Multi') {
        values[item.id].forEach(function (value, index) {
          var apple = _this.state.InitData.image.find(function (element) {
            if (element === value) {
              return true;
            }
          });

          images.push( /*#__PURE__*/React__default.createElement("div", {
            style: {
              borderWidth: apple !== undefined ? 2 : 0,
              borderColor: '#1f8b3b'
            },
            onClick: function onClick() {
              if (apple !== undefined) {
                var array = [].concat(_this.state.InitData[item.Selectid]);
                var ind = array.indexOf(value);

                if (ind !== -1) {
                  var _update3;

                  array.splice(ind, 1);

                  _this.setState({
                    InitData: update$1(_this.state.InitData, (_update3 = {}, _update3[item.Selectid] = {
                      $set: array
                    }, _update3))
                  });
                }
              } else {
                var _update4;

                _this.setState({
                  InitData: update$1(_this.state.InitData, (_update4 = {}, _update4[item.Selectid] = {
                    $push: [value]
                  }, _update4))
                });
              }
            },
            className: "Imageform",
            key: index
          }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
            className: "ImageformImage",
            variant: "top",
            src: value
          })));
        });
      } else {
        values[item.id].forEach(function (value, index) {
          images.push( /*#__PURE__*/React__default.createElement("div", {
            style: {
              borderWidth: _this.state.InitData.image[0] === value ? 2 : 0,
              borderColor: '#1f8b3b'
            },
            onClick: function onClick() {
              var _update5;

              _this.setState({
                InitData: update$1(_this.state.InitData, (_update5 = {}, _update5[item.Selectid] = {
                  0: {
                    $set: value
                  }
                }, _update5))
              });
            },
            className: "Imageform",
            key: index
          }, /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
            className: "ImageformImage",
            variant: "top",
            src: value
          })));
        });
      }

      return images;
    };

    _this.onSubmit = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.props.onSubmit(_this.state.InitData);
    };

    _this.handleChange = function (item) {
      var _update6;

      _this.setState({
        InitData: update$1(_this.state.InitData, (_update6 = {}, _update6[item.target.name] = {
          $set: item.target.value
        }, _update6))
      });
    };

    _this.Submitbtn = React__default.createRef();
    if (_this.props.Submit !== undefined) _this.props.Submit(function () {
      return _this.Submit();
    });
    _this.state = {
      isloading: false,
      create_state: 0,
      InitData: null,
      imagefile: [],
      htmlfile: null,
      deleteimage: []
    };
    return _this;
  }

  var _proto = CreatePage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var ModifyMode = this.props.ModifyMode;
    if (ModifyMode === undefined) ModifyMode = false;
    var values = this.InitDataSet(ModifyMode, this.props.DataStruct.Struct, this.props.InitData);
    this.setState({
      InitData: values
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.DataStruct.Struct != this.props.DataStruct.Struct || prevProps.InitData != this.props.InitData) {
      var values = this.InitDataSet(this.props.ModifyMode, this.props.DataStruct.Struct, this.props.InitData);
      this.setState({
        InitData: values
      });
    }
  };

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

    return /*#__PURE__*/React__default.createElement("div", {
      className: "ProductCreatePage"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Form, {
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "ProductCreateView"
    }, this.FormView(this.props.DataStruct.Struct, this.props.InitData, this.handleChange)), /*#__PURE__*/React__default.createElement("div", {
      className: "ProductCreateFooter",
      style: bt_style
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      ref: this.Submitbtn,
      type: "submit",
      variant: "Submit",
      size: "sm"
    }, this.props.ModifyMode ? '수정' : '등록'))));
  };

  return CreatePage;
}(React__default.Component);

var TableButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TableButton, _React$Component);

  function TableButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TableButton.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/React__default.createElement("div", {
      className: "TableButtonSet"
    }, this.props.UpDownBT && /*#__PURE__*/React__default.createElement("div", {
      className: "TableButtonGroup"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "TButton",
      onClick: function onClick() {
        return _this.props.DoubleUp();
      }
    }, /*#__PURE__*/React__default.createElement(fa.FaAngleDoubleUp, {
      className: "bannerIcons"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "TButton",
      onClick: function onClick() {
        return _this.props.Up();
      }
    }, /*#__PURE__*/React__default.createElement(fa.FaAngleUp, {
      className: "bannerIcons"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "TButton",
      onClick: function onClick() {
        return _this.props.Down();
      }
    }, /*#__PURE__*/React__default.createElement(fa.FaAngleDown, {
      className: "bannerIcons"
    })), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "TButton",
      onClick: function onClick() {
        return _this.props.DoubleDown();
      }
    }, /*#__PURE__*/React__default.createElement(fa.FaAngleDoubleDown, {
      className: "bannerIcons"
    }))), this.props.setBT && /*#__PURE__*/React__default.createElement("div", {
      className: "TableButtonGroup"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "TButton",
      onClick: function onClick() {
        return _this.props.Remove();
      }
    }, "\uC120\uD0DD \uC0AD\uC81C"), /*#__PURE__*/React__default.createElement("div", {
      className: "Split"
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "TButton",
      onClick: function onClick() {
        return _this.props.Add();
      }
    }, "\uB4F1\uB85D"), /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "TButton",
      onClick: function onClick() {
        return _this.props.Modify();
      }
    }, "\uC218\uC815")));
  };

  return TableButton;
}(React__default.Component);

var formatter = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  var Dateformat = item.Dateformat;
  if (Dateformat === undefined) Dateformat = 'YYYY-MM-D';
  var OutDate = moment(cell);
  return /*#__PURE__*/React__default.createElement("div", null, OutDate.format(Dateformat));
};

var F_DateTime = {
  __proto__: null,
  formatter: formatter
};

var formatter$1 = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  var _onChange = Data.onChange;
  return /*#__PURE__*/React__default.createElement(BootstrapSwitchButton, {
    onlabel: item.onlabel,
    onstyle: item.onstyle,
    offlabel: item.offlabel,
    offstyle: item.offstyle,
    checked: cell,
    width: item.width,
    height: item.height,
    size: item.size,
    style: item.style,
    onChange: function onChange(value) {
      return _onChange(item.dataField, cell, row, rowIndex, value);
    }
  });
};

var F_Switch = {
  __proto__: null,
  formatter: formatter$1
};

var formatter$2 = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  return /*#__PURE__*/React__default.createElement(NumberFormat, {
    value: cell,
    displayType: 'text',
    thousandSeparator: item.thousandSeparator,
    suffix: item.suffix,
    renderText: function renderText(value) {
      return /*#__PURE__*/React__default.createElement("div", null, value);
    }
  });
};

var F_Number = {
  __proto__: null,
  formatter: formatter$2
};

var formatter$3 = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  var onChange = Data.onChange;
  return /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
    src: cell,
    width: item.width,
    height: item.height,
    onMouseEnter: function onMouseEnter() {
      return onChange(item.dataField, cell, row, rowIndex, 'onMouseEnter');
    },
    onMouseLeave: function onMouseLeave() {
      return onChange(item.dataField, cell, row, rowIndex, 'onMouseLeave');
    }
  });
};

var F_Image = {
  __proto__: null,
  formatter: formatter$3
};

var formatter$4 = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  var onChange = Data.onChange;
  var celldata = [];

  if (typeof cell === 'object') {
    celldata = cell;
  } else if (typeof cell === 'string') {
    try {
      celldata = JSON.parse(cell);
    } catch (exception) {
      celldata = [];
    }
  }

  return /*#__PURE__*/React__default.createElement("div", null, celldata.map(function (value, index) {
    return /*#__PURE__*/React__default.createElement(reactBootstrap.Image, {
      key: item.dataField + index,
      style: {
        margin: 5
      },
      src: value,
      width: item.width,
      height: item.height,
      onMouseEnter: function onMouseEnter() {
        return onChange(item.dataField, cell, row, rowIndex, 'onMouseEnter' + index);
      },
      onMouseLeave: function onMouseLeave() {
        return onChange(item.dataField, cell, row, rowIndex, 'onMouseLeave' + index);
      }
    });
  }));
};

var F_Images = {
  __proto__: null,
  formatter: formatter$4
};

var formatter$5 = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  var onChange = Data.onChange;
  return /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
    variant: item.variant,
    onClick: function onClick() {
      return onChange(item.dataField, cell, row, rowIndex, 'onClick');
    }
  }, cell);
};

var F_Button = {
  __proto__: null,
  formatter: formatter$5
};

var formatter$6 = function formatter(cell, row, rowIndex, Data) {
  var ColorFormat = {
    color: cell
  };
  return /*#__PURE__*/React__default.createElement("div", {
    style: ColorFormat
  }, cell);
};

var F_Color = {
  __proto__: null,
  formatter: formatter$6
};

var formatter$7 = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  var jsondata;

  if (typeof cell === 'object') {
    jsondata = cell;
  } else if (typeof cell === 'string') {
    try {
      jsondata = JSON.parse(cell);
    } catch (exception) {
      jsondata = 'error';
    }
  }

  return /*#__PURE__*/React__default.createElement(ReactJson, _extends({}, item, {
    src: jsondata,
    style: {
      textAlign: 'left'
    }
  }));
};

var F_Jsonview = {
  __proto__: null,
  formatter: formatter$7
};

var formatter$8 = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  var onChange = Data.onChange;
  if (item.custom) return /*#__PURE__*/React__default.createElement("div", {
    style: {
      cursor: 'pointer',
      color: item.color
    },
    onClick: function onClick() {
      return onChange(item.dataField, cell, row, rowIndex, 'onClick');
    }
  }, cell);else return /*#__PURE__*/React__default.createElement("a", {
    target: item.target,
    href: cell
  }, cell);
};

var F_Link = {
  __proto__: null,
  formatter: formatter$8
};

var formatter$9 = function formatter(cell, row, rowIndex, Data) {
  if (cell !== undefined) return /*#__PURE__*/React__default.createElement("div", null, cell.map(function (value, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: index,
      style: {
        marginBottom: 5
      }
    }, index, " : ", value);
  }));
};

var F_Array = {
  __proto__: null,
  formatter: formatter$9
};

var formatter$a = function formatter(cell, row, rowIndex, Data) {
  return /*#__PURE__*/React__default.createElement(BootstrapTable, {
    keyField: cell.keyField,
    data: cell.data,
    columns: cell.columns
  });
};

var F_Table = {
  __proto__: null,
  formatter: formatter$a
};

var formatter$b = function formatter(cell, row, rowIndex, Data) {
  var item = Data.item;
  var index = item.match.findIndex(function (m) {
    return m === cell;
  });
  if (index === -1) return '';else return /*#__PURE__*/React__default.createElement("div", {
    style: {
      color: item.colors[index]
    }
  }, item.icons[index]);
};

var F_Icon = {
  __proto__: null,
  formatter: formatter$b
};

var formatter$c = function formatter(cell, row, rowIndex, Data) {
  return /*#__PURE__*/React__default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: cell
    }
  });
};

var F_Html = {
  __proto__: null,
  formatter: formatter$c
};

var FormatSet$1 = [{
  name: 'DateTime',
  module: F_DateTime
}, {
  name: 'Switch',
  module: F_Switch
}, {
  name: 'Number',
  module: F_Number
}, {
  name: 'Image',
  module: F_Image
}, {
  name: 'Images',
  module: F_Images
}, {
  name: 'Button',
  module: F_Button
}, {
  name: 'Color',
  module: F_Color
}, {
  name: 'Jsonview',
  module: F_Jsonview
}, {
  name: 'Link',
  module: F_Link
}, {
  name: 'Array',
  module: F_Array
}, {
  name: 'Table',
  module: F_Table
}, {
  name: 'Icon',
  module: F_Icon
}, {
  name: 'Html',
  module: F_Html
}];
var Getformatter = function Getformatter(format) {
  if (format === undefined) return null;
  return FormatSet$1.find(function (m) {
    return m.name.toLowerCase() === format.toLowerCase();
  }).module.formatter;
};
var InitColumns = function InitColumns(propscolumns, onChange) {
  var columns = [];
  propscolumns.forEach(function (item) {
    var c_item = item;
    var formatter = Getformatter(item.format);

    if (formatter !== null) {
      c_item = update$1(c_item, {
        formatter: {
          $set: formatter
        }
      });
      c_item = update$1(c_item, {
        formatExtraData: {
          $set: {
            item: item,
            onChange: onChange
          }
        }
      });
    }

    c_item = update$1(c_item, {
      sortCaret: {
        $set: Caret
      }
    });
    columns.push(c_item);
  });
  return columns;
};

var Caret = function Caret(order) {
  if (!order) return /*#__PURE__*/React__default.createElement("span", {
    className: "Caret",
    style: {
      position: 'absolute',
      right: '10px',
      top: '5px'
    }
  });else if (order === 'asc') return /*#__PURE__*/React__default.createElement("span", {
    className: "Caret",
    style: {
      position: 'absolute',
      right: '10px',
      top: '5px'
    }
  }, /*#__PURE__*/React__default.createElement(im.ImSortAlphaAsc, {
    color: "#238b23"
  }));else if (order === 'desc') return /*#__PURE__*/React__default.createElement("span", {
    className: "Caret",
    style: {
      position: 'absolute',
      right: '10px',
      top: '5px'
    }
  }, /*#__PURE__*/React__default.createElement(im.ImSortAlphaDesc, {
    color: "#238b23"
  }));
  return null;
};

var CreateTable = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CreateTable, _React$Component);

  function CreateTable(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.dataChange = function (data) {
      _this.setState({
        Tabledata: data
      });
    };

    _this.GetRow = function () {
      return _this.Table.current.selectionContext.selected;
    };

    _this.GetRowSelectedData = function () {
      var rowKeys = _this.Table.current.selectionContext.selected;
      var rowData = [];
      rowKeys.forEach(function (num) {
        rowData.push(_this.props.data.find(function (item) {
          return item[_this.props.keyField] === num;
        }));
      });
      return rowData;
    };

    _this.onUnload = function () {
      _this.setState(function (state) {
        return _extends({}, state, {
          showModal: false,
          showImgPreview: false,
          showDataPreview: false
        });
      });
    };

    _this.Table = React__default.createRef();
    _this.SearchBar = React__default.createRef();
    _this.state = {
      Tabledata: _this.props.data
    };
    return _this;
  }

  var _proto = CreateTable.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var ToggleList = ToolkitProvider.ColumnToggle.ToggleList;

    var customTotal = function customTotal(from, to, size) {
      return /*#__PURE__*/React__default.createElement("span", {
        className: "react-bootstrap-table-pagination-total"
      }, "\uC804\uCCB4 (", size, "\uAC1C) : ", from, " \uBD80\uD130 ", to, " \uAE4C\uC9C0");
    };

    var options = {
      paginationSize: 10,
      pageStartIndex: 1,
      alwaysShowAllBtns: true,
      withFirstAndLast: true,
      firstPageText: '<<',
      prePageText: '<',
      nextPageText: '>',
      lastPageText: '>>',
      nextPageTitle: '처음 페이지',
      prePageTitle: '이전 페이지',
      firstPageTitle: '다음 페이지',
      lastPageTitle: '마지막 페이지',
      showTotal: true,
      paginationTotalRenderer: customTotal,
      sizePerPageList: [{
        text: '20개',
        value: 20
      }, {
        text: '50개',
        value: 50
      }, {
        text: '100개',
        value: 100
      }, {
        text: '200개',
        value: 200
      }, {
        text: '500개',
        value: 500
      }, {
        text: '전체',
        value: this.props.data.length
      }]
    };
    var selectRow = this.props.selectRow;

    if (selectRow !== undefined) {
      if (selectRow.bgColor === undefined) selectRow.bgColor = '#ffffe0';
    }

    return /*#__PURE__*/React__default.createElement("div", null, this.state.showImageHover ? /*#__PURE__*/React__default.createElement("img", {
      className: "imageHoverView",
      alt: "",
      src: this.state.hoversrc
    }) : null, /*#__PURE__*/React__default.createElement(ToolkitProvider__default, {
      keyField: this.props.keyField,
      data: this.props.data,
      columns: InitColumns(this.props.columns, this.props.onChange),
      onTableChange: this.onTableChange,
      search: true,
      columnToggle: true
    }, function (props) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "Table_main"
      }, /*#__PURE__*/React__default.createElement(reactBootstrap.Accordion, {
        style: {
          marginBottom: '15px'
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "THeader"
      }, /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: 'flex'
        }
      }, _this2.props.toggleList ? /*#__PURE__*/React__default.createElement(reactBootstrap.Accordion.Toggle, {
        as: reactBootstrap.Button,
        variant: "secondary",
        className: "TButton",
        eventKey: "0",
        style: {
          marginRight: '20px',
          minWidth: '20px'
        }
      }, /*#__PURE__*/React__default.createElement(bs.BsLayoutThreeColumns, null)) : null, /*#__PURE__*/React__default.createElement(TableButton, {
        UpDownBT: _this2.props.UpDownBT,
        setBT: _this2.props.setBT,
        Add: _this2.props.Add,
        Remove: _this2.props.Remove,
        Modify: _this2.props.Modify
      })), _this2.props.searchBar ? /*#__PURE__*/React__default.createElement(SearchForm, _extends({}, props.searchProps, {
        ref: _this2.SearchBar,
        SendSearch: _this2.props.SendSearch
      })) : null), _this2.props.toggleList ? /*#__PURE__*/React__default.createElement(reactBootstrap.Accordion.Collapse, {
        eventKey: "0"
      }, /*#__PURE__*/React__default.createElement(ToggleList, _extends({
        contextual: "secondary",
        className: "ToggleList",
        btnClassName: "ToggleListBtn"
      }, props.columnToggleProps))) : null), /*#__PURE__*/React__default.createElement(BootstrapTable, _extends({
        id: _this2.props.id
      }, props.baseProps, {
        selectRow: selectRow,
        ref: _this2.Table,
        rowEvents: _this2.props.rowEvents,
        pagination: !_this2.props.pagination ? null : paginationFactory(options)
      })));
    }));
  };

  return CreateTable;
}(React__default.Component);

var SearchForm = /*#__PURE__*/function (_React$Component2) {
  _inheritsLoose(SearchForm, _React$Component2);

  function SearchForm(props) {
    var _this3;

    _this3 = _React$Component2.call(this, props) || this;

    _this3.SendSearch = function (input) {
      _this3.props.onSearch(input);
    };

    _this3.SearchClick = function () {
      _this3.props.onSearch(_this3.state.input);
    };

    _this3.ClearClick = function () {
      _this3.setState(function () {
        return {
          input: ''
        };
      });

      _this3.props.onSearch('');
    };

    _this3.SearchTable = function (item) {
      _this3.setState(function () {
        return {
          input: item
        };
      });

      _this3.props.onSearch(item);
    };

    _this3.FormChange = function (e) {
      var in_text = e.target.value;

      _this3.setState(function () {
        return {
          input: in_text
        };
      });
    };

    _this3.appKeyPress = function (e) {
      if (e.key === 'Enter') {
        _this3.SearchClick();
      }
    };

    _this3.state = {
      input: ''
    };
    return _this3;
  }

  var _proto2 = SearchForm.prototype;

  _proto2.render = function render() {
    var _this4 = this;

    return /*#__PURE__*/React__default.createElement("div", {
      className: "TopSearchBar"
    }, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup, null, /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup.Prepend, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "ClearBT",
      onClick: this.ClearClick
    }, "Clear")), /*#__PURE__*/React__default.createElement(reactBootstrap.FormControl, {
      className: "SearchForm",
      onChange: function onChange(e) {
        return _this4.FormChange(e);
      },
      value: this.state.input,
      onKeyPress: function onKeyPress(e) {
        return _this4.appKeyPress(e);
      }
    }), /*#__PURE__*/React__default.createElement(reactBootstrap.InputGroup.Append, null, /*#__PURE__*/React__default.createElement(reactBootstrap.Button, {
      variant: "secondary",
      className: "SearchBT",
      onClick: this.SearchClick
    }, "\uAC80\uC0C9"))));
  };

  return SearchForm;
}(React__default.Component);

var getStructFromFormat = function getStructFromFormat(DataStruct, FormatName) {
  return getFormat(DataStruct.Struct, FormatName);
};

var getFormat = function getFormat(DataStruct, FormatName) {
  var sttable = [];
  DataStruct.forEach(function (item) {
    if (item.format === FormatName) {
      sttable.push(item);
    } else if (item.format === 'Tab' || item.format === 'Titletext') {
      var TabData = getFormat(item.Items, FormatName);
      TabData.forEach(function (tbaitem) {
        sttable.push(tbaitem);
      });
    }
  });
  return sttable;
};

var getIDList = function getIDList(DataStruct) {
  return getID(DataStruct.Struct);
};

var getID = function getID(DataStruct) {
  var IDList = [];
  DataStruct.forEach(function (item) {
    if (item.format === 'Tab' || item.format === 'Titletext') {
      var TabData = getID(item.Items);
      TabData.forEach(function (tbaitem) {
        IDList.push(tbaitem);
      });
    } else {
      IDList.push(item.id);
    }
  });
  return IDList;
};

var getIFList = function getIFList(DataStruct) {
  return getIF(DataStruct.Struct);
};

var getIF = function getIF(DataStruct) {
  var IFList = [];
  DataStruct.forEach(function (item) {
    if (item.format === 'Tab' || item.format === 'Titletext') {
      var TabData = getIF(item.Items);
      TabData.forEach(function (tbaitem) {
        IFList.push(tbaitem);
      });
    } else {
      IFList.push({
        id: item.id,
        format: item.format
      });
    }
  });
  return IFList;
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default.createElement("div", {
    className: undefined.test
  }, "Example Component: ", text);
};

exports.CreatePage = CreatePage;
exports.CreateTable = CreateTable;
exports.ExampleComponent = ExampleComponent;
exports.getIDList = getIDList;
exports.getIFList = getIFList;
exports.getStructFromFormat = getStructFromFormat;
//# sourceMappingURL=index.js.map
