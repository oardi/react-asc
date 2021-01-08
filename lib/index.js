'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

(function (COLOR) {
    COLOR["primary"] = "primary";
    COLOR["accent"] = "accent";
    COLOR["secondary"] = "secondary";
    COLOR["danger"] = "danger";
    COLOR["light"] = "light";
    COLOR["dark"] = "dark";
})(exports.COLOR || (exports.COLOR = {}));
(function (VARIANT) {
    VARIANT["normal"] = "normal";
    VARIANT["outline"] = "outline";
    VARIANT["text"] = "text";
})(exports.VARIANT || (exports.VARIANT = {}));
(function (SIZE) {
    SIZE["sm"] = "sm";
    SIZE["md"] = "md";
    SIZE["lg"] = "lg";
})(exports.SIZE || (exports.SIZE = {}));
(function (POSITION) {
    POSITION["right"] = "right";
    POSITION["left"] = "left";
})(exports.POSITION || (exports.POSITION = {}));

var AppBar = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? exports.COLOR.primary : _b;
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push("navbar navbar-expand");
        cssClasses.push("bg-" + color);
        cssClasses.push('navbar-dark');
        return cssClasses.join(' ');
    };
    return (React__default['default'].createElement("nav", { className: getCssClasses() }, children));
};

var Button = function (_a) {
    var children = _a.children, _b = _a.block, block = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? exports.COLOR.primary : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.isActive, isActive = _e === void 0 ? false : _e, _f = _a.isRounded, isRounded = _f === void 0 ? false : _f, onClick = _a.onClick, _g = _a.variant, variant = _g === void 0 ? exports.VARIANT.normal : _g, className = _a.className;
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push("btn");
        if (variant !== 'outline' && variant !== 'text') {
            cssClasses.push("btn-" + color);
        }
        if (variant === 'outline') {
            cssClasses.push("btn-outline-" + color);
        }
        if (variant === 'text') {
            cssClasses.push("btn-link");
            cssClasses.push("btn-link-" + color);
        }
        if (isRounded && variant !== 'text') {
            cssClasses.push("rounded-pill");
        }
        if (block) {
            cssClasses.push('btn-block');
        }
        if (isActive) {
            cssClasses.push('active');
        }
        if (className) {
            cssClasses.push(className);
        }
        return cssClasses.join(' ');
    };
    var handleClick = function (e) {
        onClick ? onClick(e) : undefined;
    };
    return (React__default['default'].createElement("button", { type: "button", className: getCssClasses(), disabled: disabled, onClick: function (e) { return handleClick(e); } }, children));
};

var Card = function (props) {
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push(props.className);
        cssClasses.push('card shadow-sm');
        return cssClasses.join(' ');
    };
    return (React__default['default'].createElement("div", { className: getCssClasses() }, props.children));
};

var CardBody = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "card-body" }, children));
};

var CardFooter = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "card-footer" }, children));
};

var CardSubtitle = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "text-muted mb-2" }, children));
};

var CardText = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "card-text" }, children));
};

var CardTitle = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement("h5", { className: "card-title" }, children));
};

function caretDownSolid() {
  return (new DOMParser().parseFromString("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"caret-down\" class=\"svg-inline--fa fa-caret-down fa-w-10\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path fill=\"currentColor\" d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"></path></svg>", 'image/svg+xml')).firstChild;
}

function checkSquareRegularSvg() {
  return (new DOMParser().parseFromString("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"check-square\" class=\"svg-inline--fa fa-check-square fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z\"></path></svg>", 'image/svg+xml')).firstChild;
}

function chevronDownSolidSvg() {
  return (new DOMParser().parseFromString("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"chevron-down\" class=\"svg-inline--fa fa-chevron-down fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\"></path></svg>", 'image/svg+xml')).firstChild;
}

function chevronRightSolidSvg() {
  return (new DOMParser().parseFromString("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"chevron-right\" class=\"svg-inline--fa fa-chevron-right fa-w-10\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path fill=\"currentColor\" d=\"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z\"></path></svg>", 'image/svg+xml')).firstChild;
}

function homeSolid() {
  return (new DOMParser().parseFromString("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"home\" class=\"svg-inline--fa fa-home fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z\"></path></svg>", 'image/svg+xml')).firstChild;
}

function squareRegularSvg() {
  return (new DOMParser().parseFromString("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"square\" class=\"svg-inline--fa fa-square fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z\"></path></svg>", 'image/svg+xml')).firstChild;
}

var IconButton = function (_a) {
    var icon = _a.icon, _b = _a.color, color = _b === void 0 ? exports.COLOR.primary : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, onClick = _a.onClick, _d = _a.variant, variant = _d === void 0 ? exports.VARIANT.normal : _d, className = _a.className;
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push("btn");
        cssClasses.push("btn-icon");
        if (variant !== 'outline' && variant !== 'text') {
            cssClasses.push("btn-icon-" + color);
        }
        if (variant === 'outline') {
            cssClasses.push("btn-outline-" + color);
        }
        if (variant === 'text') {
            cssClasses.push("btn-link");
            cssClasses.push("btn-link-" + color);
        }
        // if (isFloating) {
        // 	cssClasses.push(`floating`);
        // 	cssClasses.push(`${position}`);
        // }
        cssClasses.push(className);
        return cssClasses.join(' ');
    };
    var handleClick = function (e) {
        onClick ? onClick(e) : undefined;
    };
    return (React__default['default'].createElement("button", { type: "button", className: getCssClasses(), disabled: disabled, onClick: function (e) { return handleClick(e); } },
        React__default['default'].createElement("span", { className: "svg-icon", dangerouslySetInnerHTML: { __html: icon } })));
};

var Checkbox = function (_a) {
    var id = _a.id, checked = _a.checked, className = _a.className, label = _a.label, name = _a.name, value = _a.value, onChange = _a.onChange, onKeyDown = _a.onKeyDown;
    var _b = React.useState(false), isChecked = _b[0], setIsChecked = _b[1];
    var checkboxElement = React.useRef();
    React.useEffect(function () {
        if (checked === true || checked === false) {
            setIsChecked(checked);
        }
    }, [checked]);
    var icons = {
        default: squareRegularSvg,
        selected: checkSquareRegularSvg
    };
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push('checkbox');
        cssClasses.push(className);
        return cssClasses.join(' ');
    };
    var getIcon = function () {
        return isChecked ? icons.selected : icons.default;
    };
    var handleClick = function () {
        setIsChecked(!isChecked);
        checkboxElement.current.click();
    };
    var handleChange = function (e) {
        onChange && onChange(e);
    };
    return (React__default['default'].createElement("div", { className: "checkbox-container" },
        React__default['default'].createElement(IconButton, { className: getCssClasses(), onClick: handleClick, icon: getIcon() }),
        React__default['default'].createElement("label", { onClick: handleClick }, label),
        React__default['default'].createElement("input", { type: "checkbox", ref: checkboxElement, id: id, name: name, onChange: handleChange, checked: isChecked, hidden: true, value: value, onKeyDown: onKeyDown })));
};

var DropDownContext = React.createContext(null);

var DropDown = function (_a) {
    var toggle = _a.toggle, menu = _a.menu, onToggleClick = _a.onToggleClick;
    var _b = React.useState(false), isShow = _b[0], setIsShow = _b[1];
    var dropDownContext = {
        isShow: isShow,
        setIsShow: setIsShow
    };
    var handleClickToggle = function (e) {
        e.stopPropagation();
        setIsShow(!isShow);
        onToggleClick && onToggleClick(e);
    };
    return (React__default['default'].createElement(DropDownContext.Provider, { value: dropDownContext },
        React__default['default'].createElement("div", { className: "dropdown" },
            React.cloneElement(toggle, { onClick: handleClickToggle }),
            isShow ? menu : null)));
};

var DropDownBackdrop = function (_a) {
    var onClick = _a.onClick;
    var handleClick = function () {
        onClick && onClick();
    };
    return (reactDom.createPortal(React__default['default'].createElement("div", { className: "modal-backdrop fade show", onClick: handleClick, style: { background: 'transparent' } }), document.body));
};

var DropDownMenu = function (_a) {
    var items = _a.items, children = _a.children, className = _a.className, _b = _a.menuPosition, menuPosition = _b === void 0 ? 'left' : _b;
    var setIsShow = React.useContext(DropDownContext).setIsShow;
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push("dropdown-menu show");
        if (menuPosition === 'right') {
            cssClasses.push("dropdown-menu-right");
        }
        cssClasses.push(className);
        return cssClasses.join(' ');
    };
    var handleClickItem = function () {
        // TODO - trigger hide only if prop -> hide menu onItemClick === true?
        setIsShow(false);
    };
    return (React__default['default'].createElement("div", { className: getCssClasses() },
        items && !children ?
            items.map(function (item, index) { return React.cloneElement(item, {
                onClick: function (e) {
                    item.props.onClick && item.props.onClick(e);
                    handleClickItem();
                },
                key: item.key ? item.key : index
            }); })
            : null,
        children && !items ? children : null,
        React__default['default'].createElement(DropDownBackdrop, { onClick: handleClickItem })));
};

var DropDownItem = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    var handleClick = function (e) {
        e.stopPropagation();
        onClick && onClick(e);
    };
    return (React__default['default'].createElement("a", { className: "dropdown-item", onClick: handleClick }, children));
};

var DropDownToggle = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement(React.Fragment, null, children));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var IsEmptyValidator = function (value) { return value === '' || value === null || value === undefined; };

var EmailValidator = function (value) {
    var isInvalidEmailFormat = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null;
    var isInvalid = !IsEmptyValidator(value) && isInvalidEmailFormat;
    return isInvalid;
};

var FormLabel = function (_a) {
    var children = _a.children, className = _a.className, htmlFor = _a.htmlFor;
    return (React__default['default'].createElement("label", { htmlFor: htmlFor, className: className }, children));
};

var FormGroup = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? 'form-group' : _b;
    return (React__default['default'].createElement("div", { className: className }, children));
};

var FormInput = function (_a) {
    var value = _a.value, name = _a.name, type = _a.type, placeholder = _a.placeholder, _b = _a.className, className = _b === void 0 ? 'form-control' : _b, isValid = _a.isValid, _c = _a.options, options = _c === void 0 ? [] : _c, textareaOptions = _a.textareaOptions, autoFocus = _a.autoFocus, label = _a.label, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.readonly, readonly = _e === void 0 ? false : _e, onChange = _a.onChange, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        (type === 'text' ||
            type === 'date' ||
            type === 'datetime-local' ||
            type === 'email' ||
            type === 'number' ||
            type === 'password' ||
            type === 'color' ||
            type === 'time' ||
            type === 'file')
            &&
                React__default['default'].createElement("input", { id: name, name: name, type: type, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, onChange: onChange, onBlur: onBlur, placeholder: placeholder, readOnly: readonly, disabled: disabled, onKeyDown: onKeyDown })
    // autoComplete="new-password"
    ,
        type === 'textarea' &&
            React__default['default'].createElement("textarea", { id: name, name: name, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, onChange: onChange, placeholder: placeholder, rows: textareaOptions && textareaOptions.rows ? textareaOptions.rows : null, style: textareaOptions && textareaOptions.resize !== false ? null : { resize: 'none' }, onKeyDown: onKeyDown }),
        type === 'select' &&
            React__default['default'].createElement("select", { id: name, name: name, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, onChange: onChange, onKeyDown: onKeyDown },
                React__default['default'].createElement("option", { value: "" }, "choose"),
                options.map(function (option) {
                    return React__default['default'].createElement("option", { key: option.value, value: option.value }, option.label);
                })),
        type === 'checkbox' &&
            React__default['default'].createElement(Checkbox, { id: name, name: name, label: label, className: className + (!isValid ? ' is-invalid' : ''), onChange: onChange, checked: value, onKeyDown: onKeyDown }),
        type === 'checkboxgroup' &&
            options && options.map(function (option) {
            return React__default['default'].createElement(Checkbox, { key: option.id, label: option.label, id: option.id, name: name, value: option.value, checked: value && value.some(function (v) { return v === option.value; }), onChange: onChange, onKeyDown: onKeyDown });
        }),
        type === 'radio' &&
            React__default['default'].createElement(React__default['default'].Fragment, null, options.map(function (option) {
                return React__default['default'].createElement("div", { className: "form-check", key: option.id },
                    React__default['default'].createElement("input", { id: option.id ? option.id : option.value, name: name, type: "radio", className: "form-check-input", onChange: onChange, value: option.value, checked: value === option.value, onKeyDown: onKeyDown }),
                    React__default['default'].createElement("label", { className: "form-check-label", htmlFor: option.id }, option.label));
            }))));
};

var FormHint = function (_a) {
    var hint = _a.hint, _b = _a.className, className = _b === void 0 ? 'form-text text-muted' : _b;
    return (React__default['default'].createElement("small", { className: className }, hint));
};

var FormError = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'invalid-feedback' : _b, _c = _a.errors, errors = _c === void 0 ? [] : _c;
    return (React__default['default'].createElement(React.Fragment, null, errors &&
        React__default['default'].createElement("div", { className: className }, errors.map(function (e) { return React__default['default'].createElement("div", { key: e.validator }, e.message); }))));
};

var FormOld = function (_a) {
    var controls = _a.controls, validateOnBlur = _a.validateOnBlur, onSubmit = _a.onSubmit, onChange = _a.onChange;
    var _b = React.useState({
        controls: controls,
        isValid: false,
        isSubmitted: false,
        isChanged: false
    }), form = _b[0], setForm = _b[1];
    React.useEffect(function () {
        if (form.isSubmitted || form.isChanged) {
            var keys = Object.keys(form.controls);
            var values = keys.reduce(function (obj, f) {
                var _a;
                return (__assign(__assign({}, obj), (_a = {}, _a[f] = form.controls[f].value, _a)));
            }, {});
            if (form.isValid) {
                onSubmit && onSubmit(values);
            }
            onChange && onChange(values);
            setForm(__assign(__assign({}, form), { isSubmitted: false, isChanged: false }));
        }
    }, [form]);
    var validateField = function (fieldValue, fieldValidators) {
        var errors = [];
        for (var _i = 0, fieldValidators_1 = fieldValidators; _i < fieldValidators_1.length; _i++) {
            var validator = fieldValidators_1[_i];
            switch (validator) {
                case 'required':
                    if (IsEmptyValidator(fieldValue)) {
                        errors.push({ validator: validator, message: 'This field is required' });
                    }
                    break;
                case 'email':
                    if (EmailValidator(fieldValue)) {
                        errors.push({ validator: validator, message: 'Email format is wrong' });
                    }
                    break;
            }
        }
        return errors;
    };
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value, checked = _a.checked, type = _a.type, files = _a.files;
        var field = form.controls[name];
        field.value = type === 'checkbox' ? checked : value;
        field.isDirty = true;
        field.errors = validateField(field.value, field.validators);
        field.isValid = field.errors.length === 0;
        form.controls[name] = field;
        setForm(__assign(__assign({}, form), { isChanged: true }));
    };
    var handleOnBlur = function (e) {
        if (validateOnBlur) {
            var name_1 = e.target.name; // value, checked, type
            var field = form.controls[name_1];
            field.isDirty = true;
            field.errors = validateField(field.value, field.validators);
            field.isValid = field.errors.length === 0;
            form.controls[name_1] = field;
            setForm(__assign(__assign({}, form), { isChanged: true }));
        }
    };
    var isRequired = function (fieldName) {
        var result = false;
        result = form.controls[fieldName].validators.indexOf('required') >= 0;
        return result;
    };
    var isInvalid = function (fieldName) {
        var result = false;
        var field = form.controls[fieldName];
        result = field.isDirty && !field.isValid;
        return result;
    };
    var renderLabel = function (fieldKey, label, labelClassName) {
        if (labelClassName === void 0) { labelClassName = ''; }
        var cssClasses = [labelClassName, isRequired(fieldKey) ? 'required' : undefined];
        return (React__default['default'].createElement(FormLabel, { htmlFor: fieldKey, className: cssClasses.join(' ') }, label));
    };
    return (React__default['default'].createElement("form", null, form && form.controls && Object.keys(form.controls).map(function (fieldKey) {
        return (React__default['default'].createElement(FormGroup, { key: fieldKey, className: form.controls[fieldKey].config.formGroupClassName },
            form.controls[fieldKey].config.labelPosition !== 'behind' && form.controls[fieldKey].type !== 'checkbox' &&
                renderLabel(fieldKey, form.controls[fieldKey].config.label, form.controls[fieldKey].config.labelClassName),
            React__default['default'].createElement(FormInput, { name: fieldKey, type: form.controls[fieldKey].type, className: form.controls[fieldKey].config.formControlClassName, onChange: handleInputChange, value: form.controls[fieldKey].value, isValid: !isInvalid(fieldKey), options: form.controls[fieldKey].config.options, textareaOptions: form.controls[fieldKey].config.textareaOptions, autoFocus: form.controls[fieldKey].config.autoFocus, onBlur: handleOnBlur, placeholder: form.controls[fieldKey].config.placeholder, label: form.controls[fieldKey].config.label }),
            form.controls[fieldKey].config.labelPosition === 'behind' && form.controls[fieldKey].type !== 'checkbox' &&
                renderLabel(fieldKey, form.controls[fieldKey].config.label, form.controls[fieldKey].config.labelClassName),
            form.controls[fieldKey].config.hint &&
                React__default['default'].createElement(FormHint, { hint: form.controls[fieldKey].config.hint }),
            form.controls[fieldKey].errors &&
                React__default['default'].createElement(FormError, { errors: form.controls[fieldKey].errors })));
    })));
};

var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.myForm = React.createRef();
        _this.state = { controls: undefined, isValid: false, isChanged: false, isSubmitted: false, submitOnEnter: props.submitOnEnter !== undefined ? props.submitOnEnter : true };
        return _this;
    }
    Form.getDerivedStateFromProps = function (nextProps, state) {
        if (!state.controls && nextProps.controls) {
            return ({ controls: nextProps.controls });
        }
        return null;
    };
    Form.prototype.handleChange = function () {
        var _this = this;
        // get value by myForm instead of getControl?
        if (this.state.isChanged || this.state.isSubmitted) {
            var keys = Object.keys(this.state.controls);
            var values = keys.reduce(function (obj, f) {
                var _a;
                var control = _this.getControl(f);
                var newValue = (control.type === 'date' || control.type === 'datetime-local' && isValidDate(control.value)) ? new Date(control.value).toISOString() : control.value;
                return (__assign(__assign({}, obj), (_a = {}, _a[f] = newValue, _a)));
            }, {});
            if (this.state.isValid && this.state.isSubmitted) {
                this.props.onSubmit && this.props.onSubmit(values);
            }
            this.props.onChange && this.props.onChange(values);
            this.setState({ isChanged: false, isSubmitted: false });
        }
    };
    Form.prototype.validateField = function (fieldValue, fieldValidators) {
        var errors = [];
        for (var _i = 0, fieldValidators_1 = fieldValidators; _i < fieldValidators_1.length; _i++) {
            var validator = fieldValidators_1[_i];
            switch (validator) {
                case 'required':
                    if (IsEmptyValidator(fieldValue)) {
                        errors.push({ validator: validator, message: 'This field is required' });
                    }
                    break;
                case 'email':
                    if (EmailValidator(fieldValue)) {
                        errors.push({ validator: validator, message: 'Email format is wrong' });
                    }
                    break;
            }
        }
        return errors;
    };
    Form.prototype.handleInputChange = function (e) {
        var _this = this;
        var _a = e.target, name = _a.name, value = _a.value, checked = _a.checked, type = _a.type, files = _a.files;
        // TODO! - read value from formElements
        var formControl = this.myForm.current[name];
        console.warn('type', type, formControl.length);
        if (type === 'checkbox' && formControl.length > 0) {
            console.warn('is checkbox group');
            var formControls = formControl;
            var formControlsAsArray = Array.from(formControls);
            var values = formControlsAsArray.map(function (control) { return control.checked ? control.value : ''; }).filter(function (v) { return v; });
            value = values;
        }
        var field = this.getControl(name);
        // redundant mit handleOnBlur
        // field.value = type === 'checkbox' ? checked : value;
        field.value = type === 'checkbox' && (value === 'on' || value === 'off') ? checked : value;
        field.isDirty = true;
        field.errors = this.validateField(field.value, field.validators);
        field.isValid = field.errors.length === 0;
        var newControls = __assign({}, this.state.controls);
        newControls[name] = field;
        this.setState({ controls: newControls, isChanged: true }, function () { return _this.handleChange(); });
    };
    Form.prototype.handleOnBlur = function (e) {
        var _this = this;
        if (this.props.validateOnBlur) {
            var name_1 = e.target.name;
            var field = this.getControl(name_1);
            field.isDirty = true;
            field.errors = this.validateField(field.value, field.validators);
            field.isValid = field.errors.length === 0;
            var controls = this.state.controls;
            controls[name_1] = field;
            this.setState({ controls: controls, isChanged: true }, function () { return _this.handleChange(); });
        }
    };
    Form.prototype.isRequired = function (fieldName) {
        var result = false;
        result = this.getControl(fieldName).validators.indexOf('required') >= 0;
        return result;
    };
    Form.prototype.isInvalid = function (fieldName) {
        var result = false;
        var field = this.getControl(fieldName);
        result = field.isDirty && !field.isValid;
        return result;
    };
    Form.prototype.getControl = function (name) {
        return this.state.controls[name];
    };
    Form.prototype.renderLabel = function (fieldKey, label, labelClassName) {
        if (labelClassName === void 0) { labelClassName = ''; }
        var cssClasses = [labelClassName, this.isRequired(fieldKey) ? 'required' : undefined];
        return React__default['default'].createElement(FormLabel, { htmlFor: fieldKey, className: cssClasses.join(' ') }, label);
    };
    // trigger via ref
    Form.prototype.handleFormSubmit = function () {
        var _this = this;
        for (var _i = 0, _a = Object.keys(this.state.controls); _i < _a.length; _i++) {
            var fieldKey = _a[_i];
            var field = this.getControl(fieldKey);
            // redundant mit handleBlur
            field.isDirty = true;
            field.errors = this.validateField(field.value, field.validators);
            field.isValid = field.errors.length === 0;
        }
        this.setState({
            controls: __assign({}, this.state.controls),
            isSubmitted: true,
            isValid: Object.keys(this.state.controls).map(function (f) { return _this.getControl(f).isValid; }).every(function (valid) { return valid === true; })
        }, function () { return _this.handleChange(); });
    };
    // trigger via ref
    Form.prototype.handleFormReset = function () {
        for (var _i = 0, _a = Object.keys(this.state.controls); _i < _a.length; _i++) {
            var fieldKey = _a[_i];
            var field = this.getControl(fieldKey);
            field.value = '';
            field.isDirty = false;
            field.errors = [];
            field.isValid = field.errors.length === 0;
        }
        this.setState({
            controls: __assign({}, this.state.controls),
            isSubmitted: false,
            isChanged: false,
            isValid: false
        });
    };
    Form.prototype.handleOnKeyDown = function (e) {
        if (e.key === 'Enter') {
            this.state.submitOnEnter && this.handleFormSubmit();
        }
    };
    Form.prototype.destroy = function () {
        this.setState({ controls: undefined, isValid: false, isChanged: false, isSubmitted: false });
    };
    Form.prototype.render = function () {
        var _this = this;
        return (React__default['default'].createElement("form", { ref: this.myForm }, this.state && this.state.controls && Object.keys(this.state.controls).map(function (fieldKey) {
            return (React__default['default'].createElement(FormGroup, { key: fieldKey, className: _this.getControl(fieldKey).config.formGroupClassName },
                _this.getControl(fieldKey).config.labelPosition !== 'behind' && _this.getControl(fieldKey).type !== 'checkbox' &&
                    _this.renderLabel(fieldKey, _this.getControl(fieldKey).config.label, _this.getControl(fieldKey).config.labelClassName),
                React__default['default'].createElement(FormInput, { autoFocus: _this.getControl(fieldKey).config.autoFocus, className: _this.getControl(fieldKey).config.formControlClassName, isValid: !_this.isInvalid(fieldKey), label: _this.getControl(fieldKey).config.label, name: fieldKey, options: _this.getControl(fieldKey).config.options, placeholder: _this.getControl(fieldKey).config.placeholder, textareaOptions: _this.getControl(fieldKey).config.textareaOptions, type: _this.getControl(fieldKey).type, value: _this.getControl(fieldKey).value, disabled: _this.getControl(fieldKey).config.disabled, readonly: _this.getControl(fieldKey).config.readonly, onChange: function (e) { return _this.handleInputChange(e); }, onBlur: function (e) { return _this.handleOnBlur(e); }, onKeyDown: function (e) { return _this.handleOnKeyDown(e); } }),
                _this.getControl(fieldKey).config.labelPosition === 'behind' && _this.getControl(fieldKey).type !== 'checkbox' &&
                    _this.renderLabel(fieldKey, _this.getControl(fieldKey).config.label, _this.getControl(fieldKey).config.labelClassName),
                _this.getControl(fieldKey).config.hint &&
                    React__default['default'].createElement(FormHint, { hint: _this.getControl(fieldKey).config.hint }),
                _this.getControl(fieldKey).errors &&
                    React__default['default'].createElement(FormError, { errors: _this.getControl(fieldKey).errors })));
        })));
    };
    return Form;
}(React.Component));
function isValidDate(dateObject) {
    return new Date(dateObject).toString() !== 'Invalid Date';
}

var FormControl = /** @class */ (function () {
    function FormControl(value, validators, type, config) {
        if (validators === void 0) { validators = []; }
        this.value = value;
        this.validators = validators;
        this.type = type;
        this.config = config;
        this.errors = [];
        this.isValid = false;
        this.isDirty = false;
    }
    return FormControl;
}());

var List = function (_a) {
    var children = _a.children, _b = _a.isFlush, isFlush = _b === void 0 ? false : _b;
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push('list list-group');
        if (isFlush) {
            cssClasses.push("list-group-flush");
        }
        return cssClasses.join(' ');
    };
    return (React__default['default'].createElement("ul", { className: getCssClasses() }, children));
};

var ListItem = function (_a) {
    var children = _a.children, _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.isHoverable, isHoverable = _c === void 0 ? true : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, onClick = _a.onClick;
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push('list-group-item d-flex align-items-center');
        if (active) {
            cssClasses.push("active");
        }
        if (isHoverable) {
            cssClasses.push("list-group-item-actions");
        }
        if (isDisabled) {
            cssClasses.push("disabled");
        }
        return cssClasses.join(' ');
    };
    var handleClick = function (e) {
        onClick && onClick(e);
    };
    return (React__default['default'].createElement("li", { onClick: handleClick, className: getCssClasses() }, children));
};

var ListItemAvatar = function (_a) {
    var avatar = _a.avatar;
    return (React__default['default'].createElement("div", { className: "avatar" },
        React__default['default'].createElement("div", { className: "svg-icon", dangerouslySetInnerHTML: { __html: avatar } })));
};

var ListItemAction = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "list-item-action" }, children));
};

var ListItemText = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "list-item-text" }, children));
};

var ModalHeader = function (_a) {
    var children = _a.children, _b = _a.isDismissable, isDismissable = _b === void 0 ? false : _b, onClose = _a.onClose;
    var handleClick = function () {
        onClose && onClose();
    };
    return (React__default['default'].createElement("div", { className: "modal-header" },
        React__default['default'].createElement("h5", { className: "modal-title" }, children),
        isDismissable &&
            React__default['default'].createElement("button", { type: "button", className: "close", onClick: handleClick },
                React__default['default'].createElement("span", { "aria-hidden": "true" }, "\u00D7"))));
};

var ModalBody = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement("div", { className: "modal-body" }, children);
};

var ModalBackdrop = function () { return reactDom.createPortal(React__default['default'].createElement("div", { className: "modal-backdrop fade show" }), document.body); };

var Modal = function (_a) {
    var children = _a.children, header = _a.header, footer = _a.footer, onHeaderCloseClick = _a.onHeaderCloseClick, onBackdropClick = _a.onBackdropClick, _b = _a.isDismissable, isDismissable = _b === void 0 ? false : _b;
    var clickListener;
    var removeClickListener = function () {
        if (clickListener) {
            document.removeEventListener('click', clickListener);
            clickListener = function () { };
        }
    };
    var initClickBackdropListener = function () {
        clickListener = function (e) {
            var modalDialog = document.querySelector('.modal-dialog');
            var clickedOutside = modalDialog && !modalDialog.contains(e.target);
            if (clickedOutside) {
                removeClickListener();
                if (onBackdropClick) {
                    onBackdropClick();
                }
            }
        };
        document.addEventListener('click', clickListener);
    };
    React.useEffect(function () {
        document.body.classList.add('modal-open');
        initClickBackdropListener();
        return function () {
            document.body.classList.remove('modal-open');
            removeClickListener();
        };
    }, []);
    return (React__default['default'].createElement(React.Fragment, null,
        React__default['default'].createElement("div", { className: "modal show", style: { display: 'block' } },
            React__default['default'].createElement("div", { className: "modal-dialog modal-dialog-centered", role: "document" },
                React__default['default'].createElement("div", { className: "modal-content" },
                    header &&
                        React__default['default'].createElement(ModalHeader, { isDismissable: isDismissable, onClose: function () { return onHeaderCloseClick && onHeaderCloseClick(); } }, header),
                    React__default['default'].createElement(ModalBody, null, children),
                    footer &&
                        React__default['default'].createElement("div", { className: "modal-footer" }, footer)))),
        React__default['default'].createElement(ModalBackdrop, null)));
};

var ModalFooter = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement("div", { className: "modal-body" }, children);
};

(function (MODALRESULT) {
    MODALRESULT["OK"] = "OK";
    MODALRESULT["CANCEL"] = "CANCEL";
    MODALRESULT["DELETE"] = "DELETE";
})(exports.MODALRESULT || (exports.MODALRESULT = {}));
(function (MODALTYPE) {
    MODALTYPE["BASIC"] = "BASIC";
    MODALTYPE["FORM"] = "FORM";
})(exports.MODALTYPE || (exports.MODALTYPE = {}));

var GlobalModal = function (_a) {
    var title = _a.title, description = _a.description, formControls = _a.formControls, onOk = _a.onOk, onCancel = _a.onCancel, _b = _a.showOkButton, showOkButton = _b === void 0 ? true : _b, _c = _a.showCancelButton, showCancelButton = _c === void 0 ? true : _c, _d = _a.isDismissable, isDismissable = _d === void 0 ? false : _d;
    // workaround for getDerivedStateFromProps
    var _e = React.useState(null), myControls = _e[0], setMyControls = _e[1];
    React.useEffect(function () {
        setMyControls(__assign({}, formControls));
    }, []);
    // end
    var modalType = formControls ? exports.MODALTYPE.FORM : exports.MODALTYPE.BASIC;
    var myForm = React.useRef();
    var handleOk = function () {
        if (modalType === exports.MODALTYPE.FORM) {
            myForm.current.handleFormSubmit();
        }
        else {
            onOk();
        }
    };
    var handleCancel = function () {
        onCancel();
    };
    var onSubmit = function (values) {
        onOk(values);
    };
    return (React__default['default'].createElement(Modal, { header: title, onHeaderCloseClick: onCancel, isDismissable: isDismissable, footer: React__default['default'].createElement(React.Fragment, null,
            showCancelButton && React__default['default'].createElement(Button, { color: exports.COLOR.secondary, variant: exports.VARIANT.text, onClick: handleCancel }, "cancel"),
            showOkButton && React__default['default'].createElement(Button, { onClick: handleOk }, "ok")) },
        description &&
            React__default['default'].createElement("div", null, description),
        modalType === exports.MODALTYPE.FORM &&
            React__default['default'].createElement(React.Fragment, null,
                React__default['default'].createElement(Form, { ref: myForm, controls: myControls, validateOnBlur: true, onSubmit: onSubmit }))));
};

var ModalService = /** @class */ (function () {
    function ModalService() {
    }
    ModalService.prototype.show = function (title, description, options) {
        var _this = this;
        if (!this.container) {
            this.container = document.createElement('div');
            document.body.appendChild(this.container);
            return new Promise(function (resolve, reject) {
                var handleOk = function (values) {
                    resolve(values);
                    _this.hide();
                };
                var handleCancel = function () {
                    reject();
                    _this.hide();
                };
                reactDom.render(React__default['default'].createElement(GlobalModal, { title: title, description: description, formControls: options && options.formControls, onCancel: handleCancel, onOk: handleOk, showCancelButton: options && options.showCancelButton, showOkButton: options && options.showOkButton, isDismissable: options && options.isDismissable }), _this.container);
            });
        }
    };
    ModalService.prototype.hide = function () {
        if (this.container) {
            reactDom.unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);
            this.container = undefined;
        }
    };
    return ModalService;
}());

var SidebarItemModel = /** @class */ (function () {
    function SidebarItemModel(id, label, path, icon, isActive, items) {
        this.id = id;
        this.label = label;
        this.path = path;
        this.icon = icon;
        this.isActive = isActive;
        this.items = items;
    }
    return SidebarItemModel;
}());

var Sidebar = function (_a) {
    var title = _a.title, items = _a.items, currentUrl = _a.currentUrl, onItemClicked = _a.onItemClicked;
    var _b = React.useState([]), menuItems = _b[0], setMenuItems = _b[1];
    React.useEffect(function () {
        if (items && items.length > 0) {
            initMenuItems();
        }
    }, [items]);
    React.useEffect(function () { initMenuItems(); }, [currentUrl]);
    var initMenuItems = function () {
        var newItems = items.map(function (item) { return new SidebarItemModel(item.id, item.label, item.path, item.icon, isMenuItemActive(item.path), item.items && item.items.map(function (subItem) { return new SidebarItemModel(subItem.id, subItem.label, subItem.path, subItem.icon, isMenuItemActive(item.path + "/" + subItem.path)); })); });
        setMenuItems(newItems);
    };
    var isMenuItemActive = function (path) {
        return path === currentUrl || ("/" + path) === currentUrl;
    };
    var navigate = function (path) {
        onItemClicked(path);
    };
    return (React__default['default'].createElement("nav", { className: "sidebar navbar navbar-expand-lg navbar-dark bg-primary align-items-start" },
        React__default['default'].createElement("ul", { className: "navbar-nav navbar-dark accordion d-flex flex-column" },
            React__default['default'].createElement("a", { className: "sidebar-brand" },
                React__default['default'].createElement("div", { className: "sidebar-brand-icon rotate-n-15" }),
                React__default['default'].createElement("div", { className: "sidebar-brand-text mx-3" }, title)),
            menuItems.map(function (item) {
                return React__default['default'].createElement("li", { key: item.id, className: "nav-item level-0 " + (item.isActive ? "active" : "") },
                    React__default['default'].createElement("a", { className: "nav-link", onClick: function () { return navigate("/" + item.path); } }, item.label),
                    item.items &&
                        React__default['default'].createElement("ul", null, item.items.map(function (subItem) { return (React__default['default'].createElement("li", { key: subItem.id, className: "nav-item level-1 " + (subItem.isActive ? "active" : "") },
                            React__default['default'].createElement("a", { className: "nav-link", onClick: function () { return navigate("/" + item.path + "/" + subItem.path); } }, subItem.label))); })));
            }))));
};

var SvgIcon = function (_a) {
    var svg = _a.svg;
    return (React__default['default'].createElement("div", { className: "svg-icon", dangerouslySetInnerHTML: { __html: svg } }));
};

var Snackbar = function (_a) {
    var message = _a.message, _b = _a.color, color = _b === void 0 ? exports.COLOR.accent : _b, _c = _a.actionText, actionText = _c === void 0 ? 'ok' : _c, onOk = _a.onOk;
    var getCssClasses = function () {
        var cssClasses = [];
        cssClasses.push("snackbar shadow-lg");
        cssClasses.push("bg-" + color);
        cssClasses.push("text-white");
        return cssClasses.join(' ');
    };
    var handleClickAction = function () {
        onOk && onOk();
    };
    return (React__default['default'].createElement("div", { className: getCssClasses() },
        React__default['default'].createElement("div", { className: "text" }, message),
        React__default['default'].createElement("div", { className: "action", onClick: handleClickAction },
            React__default['default'].createElement("span", null, actionText))));
};

var SnackbarService = /** @class */ (function () {
    function SnackbarService() {
    }
    SnackbarService.prototype.show = function (message, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 3000; }
        this.container = document.createElement('div');
        this.container.classList.add('snackbar-container');
        document.body.appendChild(this.container);
        if (timeout > 0) {
            setTimeout(function () {
                _this.hide();
            }, timeout);
        }
        return new Promise(function (resolve, reject) {
            var handleOk = function () {
                resolve();
                _this.hide();
            };
            reactDom.render(React__default['default'].createElement(Snackbar, { message: message, onOk: handleOk }), _this.container);
        });
    };
    SnackbarService.prototype.hide = function () {
        if (this.container) {
            reactDom.unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);
            this.container = null;
        }
    };
    return SnackbarService;
}());

var TreeNode = function (_a) {
    var id = _a.id, name = _a.name, level = _a.level, parentId = _a.parentId, hasChildren = _a.hasChildren, isExpanded = _a.isExpanded, isSelected = _a.isSelected, onClick = _a.onClick, onClickSelect = _a.onClickSelect;
    return (React__default['default'].createElement("li", { className: "tree-node", style: { paddingLeft: 40 * level + "px" } },
        hasChildren ?
            React__default['default'].createElement(IconButton, { className: "btn-toggle", onClick: function () { return onClick(id); }, icon: !isExpanded ? chevronRightSolidSvg : chevronDownSolidSvg })
            :
                React__default['default'].createElement("button", { className: "btn-toggle" }),
        React__default['default'].createElement(Checkbox, { checked: isSelected, onChange: function () { return onClickSelect(id); } }),
        "ID: ",
        id,
        ", ",
        name,
        ", LEVEL: ",
        level,
        ", PARENT: ",
        parentId));
};

var TreeView = function (_a) {
    var data = _a.data, onSelect = _a.onSelect;
    var _b = React.useState([]), flattenData = _b[0], setFlattenData = _b[1];
    var _c = React.useState([]), expandedItems = _c[0], setExpandedItems = _c[1];
    var _d = React.useState([]), selectedItemIds = _d[0], setSelectedItemIds = _d[1];
    var flattenDeep = function (arr1, parentId, level) {
        if (parentId === void 0) { parentId = 0; }
        if (level === void 0) { level = 0; }
        var result = [];
        result = arr1.reduce(function (acc, val) {
            return (Array.isArray(val.children) ?
                acc.concat(__spreadArrays([
                    { id: val.id, name: val.name, level: level, hasChildren: true, parentId: parentId }
                ], flattenDeep(val.children, val.id, level + 1))) :
                acc.concat([{ id: val.id, name: val.name, level: level, hasChildren: false, parentId: parentId }]));
        }, []);
        return result;
    };
    React.useEffect(function () {
        setFlattenData(flattenDeep(data));
    }, [data]);
    var handleNodeClick = function (item) {
        if (item.hasChildren) {
            var newExpandedItems = __spreadArrays(expandedItems);
            if (isExpanded(item.id)) {
                newExpandedItems = collapseRecursive(item, __spreadArrays(expandedItems));
            }
            else {
                newExpandedItems.push(item);
            }
            setExpandedItems(newExpandedItems);
        }
    };
    var collapseRecursive = function (item, expandedItems) {
        var expandedItemIds = expandedItems.map(function (i) { return i.id; });
        if (expandedItemIds.indexOf(item.id) >= 0) {
            expandedItems = expandedItems.filter(function (i) { return i.id !== item.id; });
        }
        if (item.hasChildren) {
            var children = expandedItems.filter(function (child) { return child.parentId === item.id; });
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                expandedItems = collapseRecursive(child, expandedItems);
            }
        }
        return expandedItems;
    };
    var isExpanded = function (id) {
        return expandedItems.map(function (i) { return i.id; }).indexOf(id) >= 0;
    };
    var isItemVisible = function (item) {
        return item.parentId === 0 || (expandedItems.map(function (i) { return i.id; }).indexOf(item.parentId) >= 0);
    };
    var handleNodeClickSelect = function (item) {
        var newSelectedItems = __spreadArrays(selectedItemIds);
        if (isSelected(item.id)) {
            newSelectedItems = newSelectedItems.filter(function (id) { return id !== item.id; });
            // remove from selected
        }
        else {
            newSelectedItems.push(item.id);
        }
        setSelectedItemIds(newSelectedItems);
        onSelect && onSelect(newSelectedItems);
    };
    var isSelected = function (id) {
        return selectedItemIds.indexOf(id) >= 0;
    };
    return (React__default['default'].createElement("ul", { className: "treeview" }, flattenData.map(function (item) {
        return isItemVisible(item) &&
            React__default['default'].createElement(TreeNode, { key: item.id, id: item.id, name: item.name, level: item.level, parentId: item.parentId, isExpanded: isExpanded(item.id), isSelected: isSelected(item.id), hasChildren: item.hasChildren, onClick: function () { return handleNodeClick(item); }, onClickSelect: function () { return handleNodeClickSelect(item); } });
    })));
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
        this.logType = { log: 'log', info: 'info', warn: 'warn', debug: 'debug', error: 'error' };
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._doLog(this.logType.log, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._doLog(this.logType.info, args);
    };
    LoggerService.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._doLog(this.logType.warn, args);
    };
    LoggerService.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._doLog(this.logType.debug, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._doLog(this.logType.error, args);
    };
    LoggerService.prototype._doLog = function (logType, args) {
        switch (logType) {
            case this.logType.log:
                console.log.apply(console, args);
                break;
            case this.logType.info:
                console.info.apply(console, args);
                break;
            case this.logType.warn:
                console.warn.apply(console, args);
                break;
            case this.logType.debug:
                console.debug.apply(console, args);
                break;
            case this.logType.error:
                console.error.apply(console, args);
                break;
        }
    };
    return LoggerService;
}());

exports.AppBar = AppBar;
exports.Button = Button;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardSubtitle = CardSubtitle;
exports.CardText = CardText;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.DropDown = DropDown;
exports.DropDownItem = DropDownItem;
exports.DropDownMenu = DropDownMenu;
exports.DropDownToggle = DropDownToggle;
exports.EmailValidator = EmailValidator;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormError = FormError;
exports.FormGroup = FormGroup;
exports.FormHint = FormHint;
exports.FormInput = FormInput;
exports.FormLabel = FormLabel;
exports.FormOld = FormOld;
exports.GlobalModal = GlobalModal;
exports.IconButton = IconButton;
exports.IsEmptyValidator = IsEmptyValidator;
exports.List = List;
exports.ListItem = ListItem;
exports.ListItemAction = ListItemAction;
exports.ListItemAvatar = ListItemAvatar;
exports.ListItemText = ListItemText;
exports.LoggerService = LoggerService;
exports.Modal = Modal;
exports.ModalBackdrop = ModalBackdrop;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalService = ModalService;
exports.Sidebar = Sidebar;
exports.Snackbar = Snackbar;
exports.SnackbarService = SnackbarService;
exports.SvgIcon = SvgIcon;
exports.TreeView = TreeView;
exports.caretDownSolidSvg = caretDownSolid;
exports.checkSquareRegularSvg = checkSquareRegularSvg;
exports.chevronDownSolidSvg = chevronDownSolidSvg;
exports.chevronRightSolidSvg = chevronRightSolidSvg;
exports.homeSolidSvg = homeSolid;
exports.squareRegularSvg = squareRegularSvg;
//# sourceMappingURL=index.js.map
