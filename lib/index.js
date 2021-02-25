'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');
var core = require('@popperjs/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

exports.COLOR = void 0;
(function (COLOR) {
    COLOR["primary"] = "primary";
    COLOR["accent"] = "accent";
    COLOR["secondary"] = "secondary";
    COLOR["danger"] = "danger";
    COLOR["light"] = "light";
    COLOR["dark"] = "dark";
})(exports.COLOR || (exports.COLOR = {}));
exports.VARIANT = void 0;
(function (VARIANT) {
    VARIANT["contained"] = "contained";
    VARIANT["outline"] = "outline";
    VARIANT["text"] = "text";
})(exports.VARIANT || (exports.VARIANT = {}));
exports.SIZE = void 0;
(function (SIZE) {
    SIZE["sm"] = "sm";
    SIZE["md"] = "md";
    SIZE["lg"] = "lg";
})(exports.SIZE || (exports.SIZE = {}));
exports.POSITION = void 0;
(function (POSITION) {
    POSITION["right"] = "right";
    POSITION["left"] = "left";
})(exports.POSITION || (exports.POSITION = {}));

const AppBar = (props) => {
    const { children, color = exports.COLOR.primary, shadow = false } = props, rest = __rest(props, ["children", "color", "shadow"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`navbar navbar-expand`);
        cssClasses.push(`bg-${color}`);
        cssClasses.push('navbar-dark');
        shadow && cssClasses.push('shadow');
        return cssClasses.filter(css => css).join(' ');
    };
    return (React__default['default'].createElement("nav", Object.assign({ className: getCssClasses() }, rest), children));
};

const AppBarTitle = ({ children, onClick }) => {
    return (React__default['default'].createElement("div", { className: "navbar-brand w-100", onClick: () => onClick && onClick() }, children));
};

const Backdrop = (props) => {
    const { target = document.body, isTransparent = false, onClick } = props;
    const handleClick = (e) => {
        e.stopPropagation();
        onClick && onClick();
    };
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`modal-backdrop fade show`);
        if (isTransparent) {
            cssClasses.push(`bg-transparent`);
        }
        return cssClasses.filter(css => css).join(' ');
    };
    return (reactDom.createPortal(React__default['default'].createElement("div", { className: getCssClasses(), onClick: handleClick }), target));
};

const Button = (props) => {
    const { children, variant = exports.VARIANT.contained, color = exports.COLOR.primary, block, isRounded, isActive, className } = props, rest = __rest(props, ["children", "variant", "color", "block", "isRounded", "isActive", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`btn`);
        if (variant !== 'outline' && variant !== 'text') {
            cssClasses.push(`btn-${color}`);
        }
        if (variant === 'outline') {
            cssClasses.push(`btn-outline-${color}`);
        }
        if (variant === 'text') {
            cssClasses.push(`btn-link`);
            cssClasses.push(`btn-link-${color}`);
        }
        if (isRounded && variant !== 'text') {
            cssClasses.push(`rounded-pill`);
        }
        if (block) {
            cssClasses.push('btn-block');
        }
        if (isActive) {
            cssClasses.push('active');
        }
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React__default['default'].createElement("button", Object.assign({ type: "button", className: getCssClasses() }, rest), children));
};

const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

const Breadcrumb = (props) => {
    const { className, items, onItemClick } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push("breadcrumb");
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClickItem = (item) => {
        !item.isActive && onItemClick && onItemClick(item);
    };
    return (React__default['default'].createElement("nav", null,
        React__default['default'].createElement("ol", { className: getCssClasses() }, items && items.map((item, index) => (React__default['default'].createElement("li", { key: index, className: "breadcrumb-item" + (item.isActive ? ' active' : ''), onClick: () => handleClickItem(item) },
            React__default['default'].createElement(ConditionalWrapper, { condition: !item.isActive, wrapper: label => React__default['default'].createElement("a", null, label) }, item.label)))))));
};

const Card = (props) => {
    const { children, className } = props, rest = __rest(props, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(className);
        cssClasses.push('card shadow-sm');
        return cssClasses.filter(css => css).join(' ');
    };
    return (React__default['default'].createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

const CardBody = ({ children }) => (React__default['default'].createElement("div", { className: "card-body" }, children));

const CardFooter = ({ children }) => (React__default['default'].createElement("div", { className: "card-footer" }, children));

const CardSubtitle = ({ children }) => (React__default['default'].createElement("div", { className: "text-muted mb-2" }, children));

const CardText = (props) => (React__default['default'].createElement("div", { className: "card-text" }, props.children));

const CardTitle = ({ children }) => (React__default['default'].createElement("h5", { className: "card-title" }, children));

var checkSquareRegularSvg = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"check-square\" class=\"svg-inline--fa fa-check-square fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z\"></path></svg>";

var chevronDownSolidSvg = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"chevron-down\" class=\"svg-inline--fa fa-chevron-down fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\"></path></svg>";

var chevronUpSolidSvg = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"chevron-up\" class=\"svg-inline--fa fa-chevron-up fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z\"></path></svg>";

var chevronRightSolidSvg = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"chevron-right\" class=\"svg-inline--fa fa-chevron-right fa-w-10\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path fill=\"currentColor\" d=\"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z\"></path></svg>";

var homeSolid = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"home\" class=\"svg-inline--fa fa-home fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z\"></path></svg>";

var squareRegularSvg = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"square\" class=\"svg-inline--fa fa-square fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z\"></path></svg>";

const IconButton = (props) => {
    const { children, icon, variant = exports.VARIANT.text, color = exports.COLOR.primary, isActive, className } = props, rest = __rest(props, ["children", "icon", "variant", "color", "isActive", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`btn`);
        cssClasses.push(`btn-icon`);
        if (variant !== 'outline' && variant !== 'text') {
            cssClasses.push(`btn-icon-${color}`);
        }
        if (variant === 'outline') {
            cssClasses.push(`btn-outline-${color}`);
        }
        if (variant === 'text') {
            cssClasses.push(`btn-link`);
            cssClasses.push(`btn-link-${color}`);
        }
        if (isActive) {
            cssClasses.push('active');
        }
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React__default['default'].createElement("button", Object.assign({ type: "button", className: getCssClasses() }, rest),
        React__default['default'].createElement("span", { className: "svg-icon", dangerouslySetInnerHTML: { __html: icon } })));
};

const Checkbox = (props) => {
    const { id, checked, className, label, name, value = "off" } = props, rest = __rest(props, ["id", "checked", "className", "label", "name", "value"]);
    // TODO
    // add own value
    // set from outer
    // update on change
    // emit to outer
    // can be: true/false, custom
    const [isChecked, setIsChecked] = React.useState(false);
    const checkboxElement = React.useRef();
    React.useEffect(() => {
        if (checked === true || checked === false) {
            setIsChecked(checked);
        }
    }, [checked]);
    const icons = {
        default: squareRegularSvg,
        selected: checkSquareRegularSvg
    };
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('checkbox');
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const getIcon = () => {
        return isChecked ? icons.selected : icons.default;
    };
    const handleClick = () => {
        setIsChecked(!isChecked);
        checkboxElement.current.click();
    };
    return (React__default['default'].createElement("div", { className: "checkbox-container" },
        React__default['default'].createElement(IconButton, { className: getCssClasses(), onClick: handleClick, icon: getIcon() }),
        React__default['default'].createElement("label", { onClick: handleClick }, label),
        React__default['default'].createElement("input", Object.assign({ type: "checkbox", ref: checkboxElement, id: id, name: name, checked: isChecked, hidden: true, value: value }, rest))));
};

const Drawer = (props) => {
    const { children, position = 'left', onClickBackdrop } = props;
    React.useEffect(() => {
        document.body.classList.add('drawer-open');
        return () => {
            document.body.classList.remove('drawer-open');
        };
    }, []);
    const handleClickBackdrop = () => {
        onClickBackdrop && onClickBackdrop();
    };
    const positionStyles = {
        left: { left: '0px' },
        right: { right: '0px' },
    };
    const getStyles = () => {
        return positionStyles[position];
    };
    return reactDom.createPortal(React__default['default'].createElement(React.Fragment, null,
        React__default['default'].createElement("div", { className: "drawer", style: getStyles() }, children),
        React__default['default'].createElement(Backdrop, { onClick: handleClickBackdrop })), document.body);
};

const DropDownContext = React.createContext(null);

const DropDownMenu = (props) => {
    const { children, className, menuPosition = 'left' } = props;
    const { setIsShow } = React.useContext(DropDownContext);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`dropdown-menu show`);
        if (menuPosition === 'right') {
            cssClasses.push(`dropdown-menu-right`);
        }
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClickItem = () => {
        setIsShow(false);
    };
    return (React__default['default'].createElement("div", { className: getCssClasses() }, children &&
        React__default['default'].Children.map(children, child => (React__default['default'].cloneElement(child, {
            onClick: (e) => {
                child.props.onClick && child.props.onClick(e);
                child.props.type !== 'header' && handleClickItem();
            }
        })))));
};

const DropDown = (props) => {
    const { toggle, children, menuPosition, onToggleClick } = props;
    const [isShow, setIsShow] = React.useState(false);
    const dropDownMenuConainter = React.useRef();
    const dropDownContext = {
        isShow: isShow,
        setIsShow: setIsShow
    };
    const handleClickToggle = (e) => {
        e.stopPropagation();
        setIsShow(!isShow);
        onToggleClick && onToggleClick(e);
    };
    return (React__default['default'].createElement(DropDownContext.Provider, { value: dropDownContext },
        React__default['default'].createElement("div", { ref: dropDownMenuConainter, className: "dropdown" },
            React.cloneElement(toggle, { onClick: handleClickToggle }),
            isShow &&
                React__default['default'].createElement(React.Fragment, null,
                    React__default['default'].createElement(DropDownMenu, { menuPosition: menuPosition }, children),
                    React__default['default'].createElement(Backdrop, { target: dropDownMenuConainter.current, isTransparent: true, onClick: () => setIsShow(false) })))));
};

const DropDownItem = (props) => {
    const { children, onClick, type = 'item' } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        if (type === 'header') {
            cssClasses.push('dropdown-header');
        }
        if (type === 'item') {
            cssClasses.push('dropdown-item');
        }
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClick = (e) => {
        e.stopPropagation();
        onClick && onClick(e);
    };
    return (React__default['default'].createElement(ConditionalWrapper, { condition: true, wrapper: children => ((type === 'item' ? (React__default['default'].createElement("a", { className: getCssClasses(), onClick: handleClick }, children)) :
            React__default['default'].createElement("div", { className: getCssClasses(), onClick: handleClick }, children))) }, children));
};

const DropDownToggle = ({ children }) => {
    return (React__default['default'].createElement(React.Fragment, null, children));
};

const DropDownDivider = () => React__default['default'].createElement("div", { className: "dropdown-divider" });

const ExpansionPanelContent = ({ children }) => {
    return (React__default['default'].createElement("div", { className: "expansion-panel-content" }, children));
};

const SvgIcon = (props) => {
    const { svg, className } = props, rest = __rest(props, ["svg", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`svg-icon`);
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React__default['default'].createElement("div", Object.assign({ className: getCssClasses(), dangerouslySetInnerHTML: { __html: svg } }, rest)));
};

const ExpansionPanelHeader = (props) => {
    const { children, isExpanded, onClick } = props;
    const handleClick = (e) => {
        e.stopPropagation();
        onClick && onClick(e);
    };
    return (React__default['default'].createElement("div", { className: "expansion-panel-header d-flex align-items-center", onClick: handleClick },
        children,
        React__default['default'].createElement("span", { className: "ml-auto text-muted" },
            React__default['default'].createElement(SvgIcon, { svg: isExpanded ? chevronUpSolidSvg : chevronDownSolidSvg }))));
};

const ExpansionPanel = (props) => {
    const { header, children, isExpanded, onChange } = props;
    const [_isExpanded, setIsExpanded] = React.useState(false);
    React.useEffect(() => {
        setIsExpanded(isExpanded);
    }, [isExpanded]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`expansion-panel`);
        if (_isExpanded) {
            cssClasses.push(`is-expanded`);
        }
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClickHeader = (event) => {
        setIsExpanded(!_isExpanded);
        onChange && onChange(event, !_isExpanded);
    };
    return (React__default['default'].createElement("div", { className: getCssClasses() },
        React__default['default'].createElement(ExpansionPanelHeader, { isExpanded: _isExpanded, onClick: handleClickHeader }, header),
        _isExpanded &&
            React__default['default'].createElement(ExpansionPanelContent, null, children)));
};

const FormLabel = ({ children, className, htmlFor }) => (React__default['default'].createElement("label", { htmlFor: htmlFor, className: className }, children));

const FormGroup = (props) => {
    const { children, className = 'form-group' } = props;
    return (React__default['default'].createElement("div", { className: className }, children));
};

const FormInput = (props) => {
    const { value, name, type, placeholder, className = 'form-control', isValid, options = [], textareaOptions, autoFocus, label, disabled = false, readonly = false, onChange, onBlur, onKeyDown } = props;
    return (React__default['default'].createElement(React.Fragment, null,
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
                options.map((option) => React__default['default'].createElement("option", { key: option.value, value: option.value }, option.label ? option.label : option.value))),
        type === 'checkbox' &&
            React__default['default'].createElement(Checkbox, { id: name, name: name, label: label, className: (!isValid ? ' is-invalid' : ''), onChange: onChange, checked: value, onKeyDown: onKeyDown }),
        type === 'checkboxgroup' &&
            options && options.map(option => React__default['default'].createElement(Checkbox, { key: option.id, label: option.label, id: option.id, name: name, value: option.value, checked: value && value.some(v => v === option.value), onChange: onChange, onKeyDown: onKeyDown })),
        type === 'radio' &&
            React__default['default'].createElement(React.Fragment, null, options.map((option) => React__default['default'].createElement("div", { className: "form-check", key: option.id },
                React__default['default'].createElement("input", { id: option.id ? option.id : option.value, name: name, type: "radio", className: "form-check-input", onChange: onChange, value: option.value, checked: value === option.value, onKeyDown: onKeyDown }),
                React__default['default'].createElement("label", { className: "form-check-label", htmlFor: option.id }, option.label))))));
};

const FormHint = ({ hint, className = 'form-text text-muted' }) => (React__default['default'].createElement("small", { className: className }, hint));

const FormError = (props) => {
    const { className = 'invalid-feedback', errors = [] } = props;
    return (React__default['default'].createElement(React.Fragment, null, errors &&
        React__default['default'].createElement("div", { className: className }, errors.map(e => React__default['default'].createElement("div", { key: e.validator }, e.message)))));
};

const IsEmptyValidator = (value) => value === '' || value === null || value === undefined;

const EmailValidator = (value) => {
    const isInvalidEmailFormat = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null;
    const isInvalid = !IsEmptyValidator(value) && isInvalidEmailFormat;
    return isInvalid;
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.myForm = React.createRef();
        this.state = { controls: undefined, isValid: false, isChanged: false, isSubmitted: false, submitOnEnter: props.submitOnEnter !== undefined ? props.submitOnEnter : true };
    }
    static getDerivedStateFromProps(nextProps, state) {
        if (!state.controls && nextProps.controls) {
            return ({ controls: nextProps.controls });
        }
        return null;
    }
    handleChange() {
        // get value by myForm instead of getControl?
        if (this.state.isChanged || this.state.isSubmitted) {
            const keys = Object.keys(this.state.controls);
            const values = keys.reduce((obj, f) => {
                const control = this.getControl(f);
                // TODO - refactor
                const newValue = ((control.type === 'date' || control.type === 'datetime-local') && control.value && isValidDate(control.value)) ? new Date(control.value).toISOString() : control.value;
                return (Object.assign(Object.assign({}, obj), { [f]: newValue }));
            }, {});
            if (this.state.isValid && this.state.isSubmitted) {
                this.props.onSubmit && this.props.onSubmit(values);
            }
            this.props.onChange && this.props.onChange(values);
            this.setState({ isChanged: false, isSubmitted: false });
        }
    }
    validateField(fieldValue, fieldValidators) {
        const errors = [];
        if (fieldValidators) {
            for (const validator of fieldValidators) {
                switch (validator) {
                    case 'required':
                        if (IsEmptyValidator(fieldValue)) {
                            errors.push({ validator, message: 'This field is required' });
                        }
                        break;
                    case 'email':
                        if (EmailValidator(fieldValue)) {
                            errors.push({ validator, message: 'Email format is wrong' });
                        }
                        break;
                }
            }
        }
        return errors;
    }
    handleInputChange(e) {
        let { name, value, checked, type, files } = e.target;
        // TODO! - read value from formElements
        const htmlInputElement = this.myForm.current[name];
        // TODO - type checkboxgroup with component?
        if (type === 'checkbox' && htmlInputElement.length > 0) {
            const formControls = htmlInputElement;
            const formControlsAsArray = Array.from(formControls);
            const values = formControlsAsArray.map((control) => control.checked ? control.value : '').filter(v => v);
            value = values;
        }
        const field = this.getControl(name);
        // redundant mit handleOnBlur
        field.value = type === 'checkbox' && (value === 'on' || value === 'off') ? checked : value;
        field.isDirty = true;
        field.errors = this.validateField(field.value, field.validators);
        field.isValid = field.errors.length === 0;
        const newControls = Object.assign({}, this.state.controls);
        newControls[name] = field;
        this.setState({ controls: newControls, isChanged: true }, () => this.handleChange());
    }
    handleOnBlur(e) {
        if (this.props.validateOnBlur) {
            const { name } = e.target;
            const field = this.getControl(name);
            field.isDirty = true;
            field.errors = this.validateField(field.value, field.validators);
            field.isValid = field.errors.length === 0;
            const controls = this.state.controls;
            controls[name] = field;
            this.setState({ controls: controls, isChanged: true }, () => this.handleChange());
        }
    }
    ;
    isRequired(fieldName) {
        let result = false;
        result = this.getControl(fieldName).validators.indexOf('required') >= 0;
        return result;
    }
    isInvalid(fieldName) {
        let result = false;
        const field = this.getControl(fieldName);
        result = field.isDirty && !field.isValid;
        return result;
    }
    getControl(name) {
        return this.state.controls[name];
    }
    renderLabel(fieldKey, label, labelClassName = '') {
        const cssClasses = [labelClassName, this.isRequired(fieldKey) ? 'required' : undefined];
        return React__default['default'].createElement(FormLabel, { htmlFor: fieldKey, className: cssClasses.join(' ') }, label);
    }
    ;
    // trigger via ref
    handleFormSubmit() {
        for (const fieldKey of Object.keys(this.state.controls)) {
            const field = this.getControl(fieldKey);
            // redundant mit handleBlur
            field.isDirty = true;
            field.errors = this.validateField(field.value, field.validators);
            field.isValid = field.errors.length === 0;
        }
        this.setState({
            controls: Object.assign({}, this.state.controls),
            isSubmitted: true,
            isValid: Object.keys(this.state.controls).map(f => this.getControl(f).isValid).every(valid => valid === true)
        }, () => this.handleChange());
    }
    // trigger via ref
    handleFormReset() {
        for (const fieldKey of Object.keys(this.state.controls)) {
            const field = this.getControl(fieldKey);
            field.value = '';
            field.isDirty = false;
            field.errors = [];
            field.isValid = field.errors.length === 0;
        }
        this.setState({
            controls: Object.assign({}, this.state.controls),
            isSubmitted: false,
            isChanged: false,
            isValid: false
        });
    }
    handleOnKeyDown(e) {
        if (e.key === 'Enter') {
            this.state.submitOnEnter && this.handleFormSubmit();
        }
    }
    destroy() {
        this.setState({ controls: undefined, isValid: false, isChanged: false, isSubmitted: false });
    }
    render() {
        return (React__default['default'].createElement("form", { ref: this.myForm }, this.state && this.state.controls && Object.keys(this.state.controls).map((fieldKey) => {
            return (React__default['default'].createElement(FormGroup, { key: fieldKey, className: this.getControl(fieldKey).config.formGroupClassName },
                this.getControl(fieldKey).config.labelPosition !== 'behind' && this.getControl(fieldKey).type !== 'checkbox' &&
                    this.renderLabel(fieldKey, this.getControl(fieldKey).config.label, this.getControl(fieldKey).config.labelClassName),
                React__default['default'].createElement(FormInput, { autoFocus: this.getControl(fieldKey).config.autoFocus, className: this.getControl(fieldKey).config.formControlClassName, isValid: !this.isInvalid(fieldKey), label: this.getControl(fieldKey).config.label, name: fieldKey, options: this.getControl(fieldKey).config.options, placeholder: this.getControl(fieldKey).config.placeholder, textareaOptions: this.getControl(fieldKey).config.textareaOptions, type: this.getControl(fieldKey).type, value: this.getControl(fieldKey).value, disabled: this.getControl(fieldKey).config.disabled, readonly: this.getControl(fieldKey).config.readonly, onChange: (e) => this.handleInputChange(e), onBlur: (e) => this.handleOnBlur(e), onKeyDown: (e) => this.handleOnKeyDown(e) }),
                this.getControl(fieldKey).config.labelPosition === 'behind' && this.getControl(fieldKey).type !== 'checkbox' &&
                    this.renderLabel(fieldKey, this.getControl(fieldKey).config.label, this.getControl(fieldKey).config.labelClassName),
                this.getControl(fieldKey).config.hint &&
                    React__default['default'].createElement(FormHint, { hint: this.getControl(fieldKey).config.hint }),
                this.getControl(fieldKey).errors &&
                    React__default['default'].createElement(FormError, { errors: this.getControl(fieldKey).errors })));
        })));
    }
}
function isValidDate(dateObject) {
    return new Date(dateObject).toString() !== 'Invalid Date';
}

class FormControl {
    constructor(value, validators = [], type, config) {
        this.value = value;
        this.validators = validators;
        this.type = type;
        this.config = config;
        this.errors = [];
        this.isValid = false;
        this.isDirty = false;
    }
}

class ListItemModel {
    constructor(dto) {
        return Object.assign({}, dto);
    }
}

const List = (props) => {
    const { children, isFlush = false, isHoverable = true } = props;
    const [listItems, setListItems] = React.useState(null);
    React.useEffect(() => {
        if (children) {
            if (Array.isArray(children)) {
                setListItems(children.map(child => new ListItemModel(child)));
            }
            else {
                setListItems([new ListItemModel(children)]);
            }
        }
    }, [children]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('list list-group');
        if (isFlush) {
            cssClasses.push(`list-group-flush`);
        }
        return cssClasses.filter(css => css).join(' ');
    };
    return (React__default['default'].createElement("ul", { className: getCssClasses() }, listItems && listItems.map((listItem, index) => (React.cloneElement(listItem, {
        isHoverable: isHoverable,
        key: listItem.key ? listItem.key : index
    })))));
};

const ListItem = (props) => {
    const { children, active = false, className, isHoverable = true, isDisabled = false, onClick } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('list-group-item d-flex justify-content-start');
        if (active) {
            cssClasses.push(`active`);
        }
        if (isHoverable) {
            cssClasses.push(`list-group-item-action`);
        }
        if (isDisabled) {
            cssClasses.push(`disabled`);
        }
        if (className) {
            cssClasses.push(className);
        }
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClick = (e) => {
        onClick && onClick(e);
    };
    return (React__default['default'].createElement("li", { onClick: handleClick, className: getCssClasses() }, children));
};

const ListItemAvatar = ({ avatar }) => (React__default['default'].createElement("div", { className: "avatar" },
    React__default['default'].createElement("div", { className: "svg-icon", dangerouslySetInnerHTML: { __html: avatar } })));

const ListItemAction = ({ children }) => (React__default['default'].createElement("div", { className: "list-item-action" }, children));

const ListItemText = ({ children }) => (React__default['default'].createElement("div", { className: "list-item-text" }, children));

const ModalHeader = (props) => {
    const { children, isDismissable = false, onClose } = props;
    const handleClick = () => {
        onClose && onClose();
    };
    return (React__default['default'].createElement("div", { className: "modal-header" },
        React__default['default'].createElement("h5", { className: "modal-title" }, children),
        isDismissable &&
            React__default['default'].createElement("button", { type: "button", className: "close", onClick: handleClick },
                React__default['default'].createElement("span", { "aria-hidden": "true" }, "\u00D7"))));
};

const ModalBody = ({ children }) => (React__default['default'].createElement("div", { className: "modal-body" }, children));

const Modal = (props) => {
    const { children, header, footer, onHeaderCloseClick, onBackdropClick, isDismissable = false } = props;
    React.useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);
    const handleClickBackdrop = () => {
        onBackdropClick && onBackdropClick();
    };
    return (React__default['default'].createElement(React.Fragment, null,
        React__default['default'].createElement("div", { className: "modal show", style: { display: 'block' } },
            React__default['default'].createElement("div", { className: "modal-dialog modal-dialog-centered", role: "document" },
                React__default['default'].createElement("div", { className: "modal-content" },
                    header &&
                        React__default['default'].createElement(ModalHeader, { isDismissable: isDismissable, onClose: () => onHeaderCloseClick && onHeaderCloseClick() }, header),
                    React__default['default'].createElement(ModalBody, null, children),
                    footer &&
                        React__default['default'].createElement("div", { className: "modal-footer" }, footer)))),
        React__default['default'].createElement(Backdrop, { onClick: handleClickBackdrop })));
};

const ModalFooter = ({ children }) => (React__default['default'].createElement("div", { className: "modal-body" }, children));

// export enum MODALRESULT { OK = 'OK', CANCEL = 'CANCEL', DELETE = 'DELETE' }
exports.MODALTYPE = void 0;
(function (MODALTYPE) {
    MODALTYPE["BASIC"] = "BASIC";
    MODALTYPE["FORM"] = "FORM";
})(exports.MODALTYPE || (exports.MODALTYPE = {}));
exports.MODALBUTTONTYPE = void 0;
(function (MODALBUTTONTYPE) {
    MODALBUTTONTYPE["OK"] = "OK";
    MODALBUTTONTYPE["CANCEL"] = "CANCEL";
    MODALBUTTONTYPE["RESET"] = "RESET";
    MODALBUTTONTYPE["DEFAULT"] = "DEFAULT";
})(exports.MODALBUTTONTYPE || (exports.MODALBUTTONTYPE = {}));

const GlobalModal = ({ title, description, formControls, onOk, onCancel, isDismissable = false, buttons = [
    { label: 'cancel', type: exports.MODALBUTTONTYPE.CANCEL, color: exports.COLOR.secondary, variant: exports.VARIANT.text, focus: true },
    { label: 'ok', type: exports.MODALBUTTONTYPE.OK, variant: exports.VARIANT.contained },
] }) => {
    // workaround for getDerivedStateFromProps
    const [myControls, setMyControls] = React.useState(null);
    React.useEffect(() => {
        setMyControls(Object.assign({}, formControls));
    }, []);
    // end
    const modalType = formControls ? exports.MODALTYPE.FORM : exports.MODALTYPE.BASIC;
    const myForm = React.useRef();
    const handleOk = () => {
        if (modalType === exports.MODALTYPE.FORM) {
            myForm.current.handleFormSubmit();
        }
        else {
            onOk();
        }
    };
    const handleCancel = () => {
        onCancel();
    };
    const onSubmit = (values) => {
        onOk(values);
    };
    // TODO
    const handleClickBackdrop = () => {
        console.warn('backdrop click');
    };
    const handleClickButton = (button) => {
        switch (button.type) {
            case exports.MODALBUTTONTYPE.OK:
                handleOk();
                break;
            case exports.MODALBUTTONTYPE.CANCEL:
                handleCancel();
                break;
            default:
                handleCancel();
                break;
        }
        button.handler && button.handler();
    };
    return (React__default['default'].createElement(Modal, { header: title, onHeaderCloseClick: onCancel, isDismissable: isDismissable, onBackdropClick: handleClickBackdrop, footer: React__default['default'].createElement(React.Fragment, null, buttons.map((button, index) => (React__default['default'].createElement(Button, { key: index, variant: button.variant, color: button.color, autoFocus: button.autoFocus, onClick: () => handleClickButton(button) }, button.label)))) },
        description && React__default['default'].createElement("div", null, description),
        modalType === exports.MODALTYPE.FORM &&
            React__default['default'].createElement(React.Fragment, null,
                React__default['default'].createElement(Form, { ref: myForm, controls: myControls, validateOnBlur: true, onSubmit: onSubmit }))));
};

class ModalService {
    show(title, description, options) {
        if (!this.container) {
            this.container = document.createElement('div');
            document.body.appendChild(this.container);
            return new Promise((resolve, reject) => {
                const handleOk = (values) => {
                    resolve(values);
                    this.hide();
                };
                const handleCancel = () => {
                    reject();
                    this.hide();
                };
                reactDom.render(React__default['default'].createElement(GlobalModal, { title: title, description: description, formControls: options && options.formControls, onCancel: handleCancel, onOk: handleOk, isDismissable: options && options.isDismissable, buttons: options && options.buttons }), this.container);
            });
        }
    }
    hide() {
        if (this.container) {
            reactDom.unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);
            this.container = undefined;
        }
    }
}
const modalService = new ModalService();

class SidebarItemModel {
    constructor(id, label, path, icon, isActive, items) {
        this.id = id;
        this.label = label;
        this.path = path;
        this.icon = icon;
        this.isActive = isActive;
        this.items = items;
    }
}

const Sidebar = (props) => {
    const { items, currentUrl, onItemClicked } = props;
    const [menuItems, setMenuItems] = React.useState([]);
    React.useEffect(() => {
        if (items && items.length > 0) {
            initMenuItems();
        }
    }, [items]);
    React.useEffect(() => { initMenuItems(); }, [currentUrl]);
    const initMenuItems = () => {
        const newItems = items.map(item => new SidebarItemModel(item.id, item.label, item.path, item.icon, isMenuItemActive(item.path), item.items && item.items.map(subItem => new SidebarItemModel(subItem.id, subItem.label, subItem.path, subItem.icon, isMenuItemActive(`${item.path}/${subItem.path}`)))));
        setMenuItems(newItems);
    };
    const isMenuItemActive = (path) => {
        return path === currentUrl || ("/" + path) === currentUrl;
    };
    const navigate = (e, path) => {
        e.stopPropagation();
        onItemClicked(path);
    };
    return (React__default['default'].createElement("nav", { className: "sidebar navbar navbar-expand-lg align-items-start" },
        React__default['default'].createElement(List, null, menuItems.map(item => React__default['default'].createElement(ListItem, { key: item.id, onClick: (e) => navigate(e, `/${item.path}`) },
            React__default['default'].createElement("div", { className: "d-flex flex-column w-100" },
                item.label,
                item.items &&
                    React__default['default'].createElement(List, null, item.items.map(subItem => (React__default['default'].createElement(ListItem, { key: subItem.id, onClick: (e) => navigate(e, `/${item.path}/${subItem.path}`) }, subItem.label))))))))));
};

const Snackbar = (props) => {
    const { message, color = exports.COLOR.dark, actionText = 'ok', onOk } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`snackbar shadow-lg`);
        cssClasses.push(`bg-${color}`);
        cssClasses.push(`text-white`);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClickAction = () => {
        onOk && onOk();
    };
    return (React__default['default'].createElement("div", { className: getCssClasses() },
        React__default['default'].createElement("div", { className: "text" }, message),
        React__default['default'].createElement("div", { className: "action text-accent", onClick: handleClickAction },
            React__default['default'].createElement("span", null, actionText))));
};

class SnackbarService {
    show(message, options) {
        const defaultOptions = { timeout: 3000, actionText: 'ok', color: exports.COLOR.dark };
        const mergedOptions = Object.assign(defaultOptions, options);
        return new Promise((resolve, reject) => {
            if (this.container) {
                this.hide();
            }
            this.container = document.createElement('div');
            this.container.classList.add('snackbar-container');
            document.body.appendChild(this.container);
            if (mergedOptions.timeout > 0) {
                this.handler = setTimeout(() => {
                    this.hide();
                }, mergedOptions.timeout);
            }
            const handleOk = () => {
                resolve();
                this.hide();
            };
            reactDom.render(React__default['default'].createElement(Snackbar, { message: message, color: mergedOptions.color, actionText: mergedOptions.actionText, onOk: handleOk }), this.container);
        });
    }
    hide() {
        if (this.container) {
            reactDom.unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);
            this.container = null;
            clearTimeout(this.handler);
        }
    }
}
const snackbarService = new SnackbarService();

const Table = (props) => {
    const { children, className, bordered, striped, hover, responsive } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('table');
        cssClasses.push(className);
        bordered && cssClasses.push('table-bordered');
        striped && cssClasses.push('table-striped');
        hover && cssClasses.push('table-hover');
        return cssClasses.filter(css => css).join(' ');
    };
    return (React__default['default'].createElement(ConditionalWrapper, { condition: responsive, wrapper: children => React__default['default'].createElement("div", { className: "table-responsive" }, children) },
        React__default['default'].createElement("table", { className: getCssClasses() }, children)));
};

class TabNavModel {
    constructor(dto) {
        this.eventKey = dto.props.eventKey;
        this.title = dto.props.title;
        this.disabled = dto.props.disabled;
    }
}
class TabModel {
    constructor(dto) {
        return Object.assign({}, dto);
    }
}

const TabNav = (props) => {
    const { eventKey, disabled, children, isActive, onClick } = props;
    return (React__default['default'].createElement("li", { key: eventKey, className: "nav-item" + (disabled ? ' disabled' : '') },
        React__default['default'].createElement("a", { className: "nav-link" + (isActive ? ' active' : '') + (disabled ? ' disabled' : ''), onClick: () => !disabled && onClick && onClick(eventKey) }, children)));
};

const Tabset = (props) => {
    const { children, className, fill, onTabSelect, selectedEventKey } = props;
    const [_selectedEventKey, setSelectedEventKey] = React.useState(selectedEventKey);
    const [navs, setNavs] = React.useState(null);
    const [tabs, setTabs] = React.useState(null);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push("nav nav-tabs tabset");
        cssClasses.push(className);
        if (fill)
            cssClasses.push('nav-fill');
        return cssClasses.filter(css => css).join(' ');
    };
    React.useEffect(() => {
        if (children) {
            if (Array.isArray(children)) {
                setTabs(children.map(child => new TabModel(child)));
                setNavs(children.map(child => new TabNavModel(child)));
            }
            else {
                setTabs([new TabModel(children)]);
                setNavs([new TabNavModel(children)]);
            }
        }
    }, [children]);
    React.useEffect(() => {
        if (tabs && tabs.length > 0) {
            const activeTab = tabs.find(tab => tab.props.eventKey === _selectedEventKey);
            if (activeTab) {
                setSelectedEventKey(activeTab.props.eventKey);
            }
            else {
                setSelectedEventKey(tabs[0].props.eventKey);
            }
        }
    }, [tabs]);
    const handleClickTab = (eventKey) => {
        setSelectedEventKey(eventKey);
        onTabSelect && onTabSelect(eventKey);
    };
    return (navs && tabs &&
        React__default['default'].createElement(React.Fragment, null,
            React__default['default'].createElement("ul", { className: getCssClasses() }, navs.map(nav => (React__default['default'].createElement(TabNav, { key: nav.eventKey, eventKey: nav.eventKey, isActive: nav.eventKey === _selectedEventKey, disabled: nav.disabled, onClick: (eventKey) => handleClickTab(eventKey) }, nav.title)))),
            React__default['default'].createElement("div", { className: "tab-content" }, tabs.map((tab) => (React.cloneElement(tab, {
                isActive: tab.props.eventKey === _selectedEventKey,
                key: tab.props.eventKey
            }))))));
};

const Tab = (props) => {
    const { children, className, isActive } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`tab-pane fade`);
        if (isActive) {
            cssClasses.push(`show active`);
        }
        if (className) {
            cssClasses.push(className);
        }
        return cssClasses.filter(css => css).join(' ');
    };
    return (React__default['default'].createElement("div", { className: getCssClasses() }, children));
};

const Tooltip = (props) => {
    const { children, text, placement = 'left' } = props;
    const [show, setShow] = React.useState(false);
    const refChild = React.useRef();
    const refTooltip = React.useRef();
    React.useEffect(() => {
        if (show === true) {
            core.createPopper(refChild.current, refTooltip.current, {
                placement: placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                ],
            });
        }
    }, [show]);
    // const handleClick = () => {
    // 	console.warn('handleClick');
    // }
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseLeave = () => {
        setShow(false);
    };
    return (React__default['default'].createElement(React.Fragment, null,
        React__default['default'].createElement("div", { ref: refChild, id: "tooltip-container" }, React.cloneElement(children, {
            // onClick: handleClick,
            onMouseOver: handleMouseOver,
            onMouseLeave: handleMouseLeave,
        })),
        show &&
            React__default['default'].createElement("div", { ref: refTooltip, id: "tooltip" },
                text,
                React__default['default'].createElement("div", { id: "arrow", "data-popper-arrow": true }))));
};

const TreeNode = (props) => {
    const { id, name, level, parentId, hasChildren, isExpanded, isSelected, onClick, onClickSelect } = props;
    return (React__default['default'].createElement("li", { className: "tree-node", style: { paddingLeft: `${40 * level}px` } },
        hasChildren ?
            React__default['default'].createElement(IconButton, { className: "btn-toggle", onClick: () => onClick(id), icon: !isExpanded ? chevronRightSolidSvg : chevronDownSolidSvg })
            :
                React__default['default'].createElement("button", { className: "btn-toggle" }),
        React__default['default'].createElement(Checkbox, { checked: isSelected, onChange: () => onClickSelect(id) }),
        "ID: ",
        id,
        ", ",
        name,
        ", LEVEL: ",
        level,
        ", PARENT: ",
        parentId));
};

const TreeView = (props) => {
    const { data, onSelect } = props;
    const [flattenData, setFlattenData] = React.useState([]);
    const [expandedItems, setExpandedItems] = React.useState([]);
    const [selectedItemIds, setSelectedItemIds] = React.useState([]);
    const flattenDeep = (arr1, parentId = 0, level = 0) => {
        let result = [];
        result = arr1.reduce((acc, val) => {
            return (Array.isArray(val.children) ?
                acc.concat([
                    { id: val.id, name: val.name, level: level, hasChildren: true, parentId: parentId },
                    ...flattenDeep(val.children, val.id, level + 1)
                ]) :
                acc.concat([{ id: val.id, name: val.name, level: level, hasChildren: false, parentId: parentId }]));
        }, []);
        return result;
    };
    React.useEffect(() => {
        setFlattenData(flattenDeep(data));
    }, [data]);
    const handleNodeClick = (item) => {
        if (item.hasChildren) {
            let newExpandedItems = [...expandedItems];
            if (isExpanded(item.id)) {
                newExpandedItems = collapseRecursive(item, [...expandedItems]);
            }
            else {
                newExpandedItems.push(item);
            }
            setExpandedItems(newExpandedItems);
        }
    };
    const collapseRecursive = (item, expandedItems) => {
        let expandedItemIds = expandedItems.map(i => i.id);
        if (expandedItemIds.indexOf(item.id) >= 0) {
            expandedItems = expandedItems.filter(i => i.id !== item.id);
        }
        if (item.hasChildren) {
            let children = expandedItems.filter(child => child.parentId === item.id);
            for (let child of children) {
                expandedItems = collapseRecursive(child, expandedItems);
            }
        }
        return expandedItems;
    };
    const isExpanded = (id) => {
        return expandedItems.map(i => i.id).indexOf(id) >= 0;
    };
    const isItemVisible = (item) => {
        return item.parentId === 0 || (expandedItems.map(i => i.id).indexOf(item.parentId) >= 0);
    };
    const handleNodeClickSelect = (item) => {
        let newSelectedItems = [...selectedItemIds];
        if (isSelected(item.id)) {
            newSelectedItems = newSelectedItems.filter(id => id !== item.id);
            // remove from selected
        }
        else {
            newSelectedItems.push(item.id);
        }
        setSelectedItemIds(newSelectedItems);
        onSelect && onSelect(newSelectedItems);
    };
    const isSelected = (id) => {
        return selectedItemIds.indexOf(id) >= 0;
    };
    return (React__default['default'].createElement("ul", { className: "treeview" }, flattenData.map(item => {
        return isItemVisible(item) &&
            React__default['default'].createElement(TreeNode, { key: item.id, id: item.id, name: item.name, level: item.level, parentId: item.parentId, isExpanded: isExpanded(item.id), isSelected: isSelected(item.id), hasChildren: item.hasChildren, onClick: () => handleNodeClick(item), onClickSelect: () => handleNodeClickSelect(item) });
    })));
};

exports.LogType = void 0;
(function (LogType) {
    LogType["log"] = "log";
    LogType["info"] = "info";
    LogType["warn"] = "warn";
    LogType["debug"] = "debug";
    LogType["error"] = "error";
})(exports.LogType || (exports.LogType = {}));
class LoggerService {
    constructor() {
        this.logType = exports.LogType;
    }
    log(...args) {
        this._doLog(this.logType.log, args);
    }
    info(...args) {
        this._doLog(this.logType.info, args);
    }
    warn(...args) {
        this._doLog(this.logType.warn, args);
    }
    debug(...args) {
        this._doLog(this.logType.debug, args);
    }
    error(...args) {
        this._doLog(this.logType.error, args);
    }
    _doLog(logType, args) {
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
    }
}
const loggerService = new LoggerService();

exports.AppBar = AppBar;
exports.AppBarTitle = AppBarTitle;
exports.Backdrop = Backdrop;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardSubtitle = CardSubtitle;
exports.CardText = CardText;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.ConditionalWrapper = ConditionalWrapper;
exports.Drawer = Drawer;
exports.DropDown = DropDown;
exports.DropDownDivider = DropDownDivider;
exports.DropDownItem = DropDownItem;
exports.DropDownMenu = DropDownMenu;
exports.DropDownToggle = DropDownToggle;
exports.EmailValidator = EmailValidator;
exports.ExpansionPanel = ExpansionPanel;
exports.ExpansionPanelContent = ExpansionPanelContent;
exports.ExpansionPanelHeader = ExpansionPanelHeader;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormError = FormError;
exports.FormGroup = FormGroup;
exports.FormHint = FormHint;
exports.FormInput = FormInput;
exports.FormLabel = FormLabel;
exports.GlobalModal = GlobalModal;
exports.IconButton = IconButton;
exports.IsEmptyValidator = IsEmptyValidator;
exports.List = List;
exports.ListItem = ListItem;
exports.ListItemAction = ListItemAction;
exports.ListItemAvatar = ListItemAvatar;
exports.ListItemText = ListItemText;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Sidebar = Sidebar;
exports.Snackbar = Snackbar;
exports.SvgIcon = SvgIcon;
exports.Tab = Tab;
exports.Table = Table;
exports.Tabset = Tabset;
exports.Tooltip = Tooltip;
exports.TreeView = TreeView;
exports.checkSquareRegularSvg = checkSquareRegularSvg;
exports.chevronDownSolidSvg = chevronDownSolidSvg;
exports.chevronRightSolidSvg = chevronRightSolidSvg;
exports.chevronUpSolidSvg = chevronUpSolidSvg;
exports.homeSolidSvg = homeSolid;
exports.loggerService = loggerService;
exports.modalService = modalService;
exports.snackbarService = snackbarService;
exports.squareRegularSvg = squareRegularSvg;
//# sourceMappingURL=index.js.map
