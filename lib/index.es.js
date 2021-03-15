import React, { useState, useRef, useEffect, Fragment, createContext, useContext, cloneElement, Component, createRef } from 'react';
import { createPortal, render, unmountComponentAtNode } from 'react-dom';
import { createPopper } from '@popperjs/core';

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

var COLOR;
(function (COLOR) {
    COLOR["primary"] = "primary";
    COLOR["accent"] = "accent";
    COLOR["secondary"] = "secondary";
    COLOR["danger"] = "danger";
    COLOR["light"] = "light";
    COLOR["dark"] = "dark";
})(COLOR || (COLOR = {}));
var VARIANT;
(function (VARIANT) {
    VARIANT["contained"] = "contained";
    VARIANT["outline"] = "outline";
    VARIANT["text"] = "text";
})(VARIANT || (VARIANT = {}));
var SIZE;
(function (SIZE) {
    SIZE["sm"] = "sm";
    SIZE["md"] = "md";
    SIZE["lg"] = "lg";
})(SIZE || (SIZE = {}));
var POSITION;
(function (POSITION) {
    POSITION["right"] = "right";
    POSITION["left"] = "left";
})(POSITION || (POSITION = {}));

const AppBar = (props) => {
    const { children, color = COLOR.primary, shadow = false } = props, rest = __rest(props, ["children", "color", "shadow"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`navbar navbar-expand`);
        cssClasses.push(`bg-${color}`);
        cssClasses.push('navbar-dark');
        shadow && cssClasses.push('shadow');
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("nav", Object.assign({ className: getCssClasses() }, rest), children));
};

const AppBarTitle = ({ children, onClick }) => {
    return (React.createElement("div", { className: "navbar-brand w-100", onClick: () => onClick && onClick() }, children));
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
    return (createPortal(React.createElement("div", { className: getCssClasses(), onClick: handleClick }), target));
};

const Button = (props) => {
    const { children, variant = VARIANT.contained, color = COLOR.primary, block, isRounded, isActive, className = '' } = props, rest = __rest(props, ["children", "variant", "color", "block", "isRounded", "isActive", "className"]);
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
    return (React.createElement("button", Object.assign({ type: "button", className: getCssClasses() }, rest), children));
};

const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

const Breadcrumb = (props) => {
    const { className = '', items, onItemClick } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push("breadcrumb");
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClickItem = (item) => {
        !item.isActive && onItemClick && onItemClick(item);
    };
    return (React.createElement(React.Fragment, null, items && items.length > 0 &&
        React.createElement("nav", null,
            React.createElement("ol", { className: getCssClasses() }, items.map((item, index) => (React.createElement("li", { key: index, className: "breadcrumb-item" + (item.isActive ? ' active' : ''), onClick: () => handleClickItem(item) },
                React.createElement(ConditionalWrapper, { condition: !item.isActive, 
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    wrapper: label => React.createElement("a", null, label) }, item.label))))))));
};

const Card = (props) => {
    const { children, className = '' } = props, rest = __rest(props, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(className);
        cssClasses.push('card shadow-sm');
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

const CardBody = ({ children }) => (React.createElement("div", { className: "card-body" }, children));

const CardFooter = ({ children }) => (React.createElement("div", { className: "card-footer" }, children));

const CardSubtitle = ({ children }) => (React.createElement("div", { className: "text-muted mb-2" }, children));

const CardText = (props) => (React.createElement("div", { className: "card-text" }, props.children));

const CardTitle = (props) => {
    const { children, className = '', as: As = 'div' } = props, rest = __rest(props, ["children", "className", "as"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(className);
        cssClasses.push('card-title');
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement(As, Object.assign({ className: getCssClasses() }, rest), children));
};

const CaretDownSolidIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "caret-down", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
    React.createElement("path", { fill: "currentColor", d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" })));

const CheckSquareRegularIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "check-square", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
    React.createElement("path", { fill: "currentColor", d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z" })));

const ChevronDownSolidIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "chevron-down", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
    React.createElement("path", { fill: "currentColor", d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" })));

const ChevronRightSolidIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "chevron-right", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
    React.createElement("path", { fill: "currentColor", d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" })));

const ChevronUpSolidIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "chevron-up", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
    React.createElement("path", { fill: "currentColor", d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" })));

const HomeSolidIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "home", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
    React.createElement("path", { fill: "currentColor", d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" })));

const SquareRegularIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "square", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
    React.createElement("path", { fill: "currentColor", d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" })));

const IconButton = (props) => {
    const { children, icon, variant = VARIANT.text, color = COLOR.primary, isActive, className = '' } = props, rest = __rest(props, ["children", "icon", "variant", "color", "isActive", "className"]);
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
    return (React.createElement("button", Object.assign({ type: "button", className: getCssClasses() }, rest),
        React.createElement("span", { className: "svg-icon" }, icon)));
};

const Checkbox = (props) => {
    const { id, checked, className = '', label, name, value = "off" } = props, rest = __rest(props, ["id", "checked", "className", "label", "name", "value"]);
    // TODO
    // add own value
    // set from outer
    // update on change
    // emit to outer
    // can be: true/false, custom
    const [isChecked, setIsChecked] = useState(false);
    const checkboxElement = useRef(null);
    useEffect(() => {
        if (checked === true || checked === false) {
            setIsChecked(checked);
        }
    }, [checked]);
    const icons = {
        default: React.createElement(SquareRegularIcon, null),
        selected: React.createElement(CheckSquareRegularIcon, null)
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
        var _a;
        setIsChecked(!isChecked);
        (_a = checkboxElement === null || checkboxElement === void 0 ? void 0 : checkboxElement.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    return (React.createElement("div", { className: "checkbox-container" },
        React.createElement(IconButton, { className: getCssClasses(), onClick: handleClick, icon: getIcon() }),
        React.createElement("label", { onClick: handleClick }, label),
        React.createElement("input", Object.assign({ type: "checkbox", ref: checkboxElement, id: id, name: name, checked: isChecked, hidden: true, value: value }, rest))));
};

const Drawer = (props) => {
    const { children, position = 'left', onClickBackdrop } = props;
    useEffect(() => {
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
    return createPortal(React.createElement(Fragment, null,
        React.createElement("div", { className: "drawer", style: getStyles() }, children),
        React.createElement(Backdrop, { onClick: handleClickBackdrop })), document.body);
};

const DropDownContext = createContext({
    isShow: false,
    setIsShow: () => { }
});

const DropDownMenu = (props) => {
    const { children, className = '', menuPosition = 'left' } = props;
    const { setIsShow } = useContext(DropDownContext);
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
    return (React.createElement("div", { className: getCssClasses() }, children &&
        React.Children.map(children, child => (React.cloneElement(child, {
            onClick: (e) => {
                child.props.onClick && child.props.onClick(e);
                child.props.type !== 'header' && handleClickItem();
            }
        })))));
};

const DropDown = (props) => {
    const { toggle, children, menuPosition, onToggleClick } = props;
    const [isShow, setIsShow] = useState(false);
    const dropDownMenuConainter = useRef(null);
    const dropDownContext = {
        isShow: isShow,
        setIsShow: setIsShow
    };
    const handleClickToggle = (e) => {
        e.stopPropagation();
        setIsShow(!isShow);
        onToggleClick && onToggleClick(e);
    };
    return (React.createElement(DropDownContext.Provider, { value: dropDownContext },
        React.createElement("div", { ref: dropDownMenuConainter, className: "dropdown" },
            toggle && cloneElement(toggle, { onClick: handleClickToggle }),
            isShow &&
                React.createElement(Fragment, null,
                    React.createElement(DropDownMenu, { menuPosition: menuPosition }, children),
                    React.createElement(Backdrop, { target: dropDownMenuConainter.current, isTransparent: true, onClick: () => setIsShow(false) })))));
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
    return (React.createElement(ConditionalWrapper, { condition: true, wrapper: children => ((type === 'item' ? (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        React.createElement("a", { className: getCssClasses(), onClick: handleClick }, children)) :
            React.createElement("div", { className: getCssClasses(), onClick: handleClick }, children))) }, children));
};

const DropDownToggle = ({ children }) => {
    return (React.createElement(Fragment, null, children));
};

const DropDownDivider = () => React.createElement("div", { className: "dropdown-divider" });

const ExpansionPanelContent = ({ children }) => {
    return (React.createElement("div", { className: "expansion-panel-content" }, children));
};

const SvgIcon = (props) => {
    const { children, className = '' } = props, rest = __rest(props, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(`svg-icon`);
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

const ExpansionPanelHeader = (props) => {
    const { children, isExpanded, onClick } = props;
    const handleClick = (e) => {
        e.stopPropagation();
        onClick && onClick(e);
    };
    return (React.createElement("div", { className: "expansion-panel-header d-flex align-items-center", onClick: handleClick },
        children,
        React.createElement("span", { className: "ml-auto text-muted" },
            React.createElement(SvgIcon, null, isExpanded ? React.createElement(ChevronUpSolidIcon, null) : React.createElement(ChevronDownSolidIcon, null)))));
};

const ExpansionPanel = (props) => {
    const { header, children, isExpanded = false, onChange } = props;
    const [_isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
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
    return (React.createElement("div", { className: getCssClasses() },
        React.createElement(ExpansionPanelHeader, { isExpanded: _isExpanded, onClick: handleClickHeader }, header),
        _isExpanded &&
            React.createElement(ExpansionPanelContent, null, children)));
};

const FormLabel = ({ children, className, htmlFor }) => (React.createElement("label", { htmlFor: htmlFor, className: className }, children));

const FormGroup = (props) => {
    const { children, className = 'form-group' } = props;
    return (React.createElement("div", { className: className }, children));
};

const FormInput = (props) => {
    const { value, name, type, placeholder, className = 'form-control', isValid, options = [], textareaOptions, autoFocus, label, disabled = false, readonly = false, onChange, onBlur, onKeyDown } = props;
    return (React.createElement(Fragment, null,
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
                React.createElement("input", { id: name, name: name, type: type, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, onChange: onChange, onBlur: onBlur, placeholder: placeholder, readOnly: readonly, disabled: disabled, onKeyDown: onKeyDown })
    // autoComplete="new-password"
    ,
        type === 'textarea' &&
            React.createElement("textarea", { id: name, name: name, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, onChange: onChange, placeholder: placeholder, rows: textareaOptions && textareaOptions.rows ? textareaOptions.rows : 0, style: textareaOptions && textareaOptions.resize !== false ? undefined : { resize: 'none' }, onKeyDown: onKeyDown }),
        type === 'select' &&
            React.createElement("select", { id: name, name: name, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, onChange: onChange, onKeyDown: onKeyDown },
                React.createElement("option", { value: "" }, "choose"),
                options.map((option) => React.createElement("option", { key: option.value, value: option.value }, option.label ? option.label : option.value))),
        type === 'checkbox' &&
            React.createElement(Checkbox, { id: name, name: name, label: label, className: (!isValid ? ' is-invalid' : ''), onChange: onChange, checked: value, onKeyDown: onKeyDown }),
        type === 'checkboxgroup' &&
            options && options.map(option => React.createElement(Checkbox, { key: option.id, label: option.label, id: option.id, name: name, value: option.value, checked: value && value.some((v) => v === option.value), onChange: onChange, onKeyDown: onKeyDown })),
        type === 'radio' &&
            React.createElement(Fragment, null, options.map((option) => React.createElement("div", { className: "form-check", key: option.id },
                React.createElement("input", { id: option.id ? option.id : option.value, name: name, type: "radio", className: "form-check-input", onChange: onChange, value: option.value, checked: value === option.value, onKeyDown: onKeyDown }),
                React.createElement("label", { className: "form-check-label", htmlFor: option.id }, option.label))))));
};

const FormHint = ({ hint, className = 'form-text text-muted' }) => (React.createElement("small", { className: className }, hint));

const FormError = (props) => {
    const { className = 'invalid-feedback', errors = [] } = props;
    return (React.createElement(Fragment, null, errors &&
        React.createElement("div", { className: className }, errors.map(e => React.createElement("div", { key: e.validator }, e.message)))));
};

const IsEmptyValidator = (value) => value === '' || value === null || value === undefined;

const EmailValidator = (value) => {
    const isInvalidEmailFormat = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null;
    const isInvalid = !IsEmptyValidator(value) && isInvalidEmailFormat;
    return isInvalid;
};

// values, isSubmitting, handleChange, handleBlur, handleSubmit
class Form extends Component {
    constructor(props) {
        super(props);
        this.myForm = createRef();
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
        var _a;
        let { name, value, checked, type } = e.target;
        // TODO! - read value from formElements
        const htmlInputElement = ((_a = this.myForm) === null || _a === void 0 ? void 0 : _a.current)[name];
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
            if (controls) {
                controls[name] = field;
                this.setState({ controls: controls, isChanged: true }, () => this.handleChange());
            }
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
        return React.createElement(FormLabel, { htmlFor: fieldKey, className: cssClasses.join(' ') }, label);
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
        this.setState({ controls: {}, isValid: false, isChanged: false, isSubmitted: false });
    }
    render() {
        return (React.createElement("form", { ref: this.myForm }, this.state && this.state.controls && Object.keys(this.state.controls).map((fieldKey) => {
            return (React.createElement(FormGroup, { key: fieldKey, className: this.getControl(fieldKey).config.formGroupClassName },
                this.getControl(fieldKey).config.labelPosition !== 'behind' && this.getControl(fieldKey).type !== 'checkbox' &&
                    this.renderLabel(fieldKey, this.getControl(fieldKey).config.label, this.getControl(fieldKey).config.labelClassName),
                React.createElement(FormInput, { autoFocus: this.getControl(fieldKey).config.autoFocus, className: this.getControl(fieldKey).config.formControlClassName, isValid: !this.isInvalid(fieldKey), label: this.getControl(fieldKey).config.label, name: fieldKey, options: this.getControl(fieldKey).config.options, placeholder: this.getControl(fieldKey).config.placeholder, textareaOptions: this.getControl(fieldKey).config.textareaOptions, type: this.getControl(fieldKey).type, value: this.getControl(fieldKey).value, disabled: this.getControl(fieldKey).config.disabled, readonly: this.getControl(fieldKey).config.readonly, onChange: (e) => this.handleInputChange(e), onBlur: (e) => this.handleOnBlur(e), onKeyDown: (e) => this.handleOnKeyDown(e) }),
                this.getControl(fieldKey).config.labelPosition === 'behind' && this.getControl(fieldKey).type !== 'checkbox' &&
                    this.renderLabel(fieldKey, this.getControl(fieldKey).config.label, this.getControl(fieldKey).config.labelClassName),
                this.getControl(fieldKey).config.hint &&
                    React.createElement(FormHint, { hint: this.getControl(fieldKey).config.hint }),
                this.getControl(fieldKey).errors &&
                    React.createElement(FormError, { errors: this.getControl(fieldKey).errors })));
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

const Column = (props) => {
    const { children, className = '', xs, sm, md, lg, xl } = props, rest = __rest(props, ["children", "className", "xs", "sm", "md", "lg", "xl"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(className);
        !xs && !sm && !md && !lg && !xl && cssClasses.push('col');
        if (xs)
            cssClasses.push(`col-${xs.toString()}`);
        if (sm)
            cssClasses.push(`col-sm-${sm.toString()}`);
        if (md)
            cssClasses.push(`col-md-${md.toString()}`);
        if (lg)
            cssClasses.push(`col-lg-${lg.toString()}`);
        if (xl)
            cssClasses.push(`col-xl-${xl.toString()}`);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

const Row = (props) => {
    const { children, className = '' } = props, rest = __rest(props, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(className);
        cssClasses.push('row');
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

class ListItemModel {
    constructor(dto) {
        return Object.assign({}, dto);
    }
}

const List = (props) => {
    const { children, isFlush = false, isHoverable = false } = props;
    const [listItems, setListItems] = useState([]);
    useEffect(() => {
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
    return (React.createElement("ul", { className: getCssClasses() }, listItems && listItems.map((listItem, index) => (cloneElement(listItem, {
        isHoverable: isHoverable,
        key: listItem.key ? listItem.key : index
    })))));
};

const ListItem = (props) => {
    const { children, active = false, className, isHoverable = false, isDisabled = false, onClick } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('list-group-item d-flex justify-content-start align-items-center');
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
    return (React.createElement("li", { onClick: handleClick, className: getCssClasses() }, children));
};

const ListItemAvatar = ({ avatar }) => (React.createElement("div", { className: "avatar" },
    React.createElement("div", { className: "svg-icon" }, avatar)));

const ListItemIcon = ({ icon }) => (React.createElement("div", { className: "icon" },
    React.createElement("div", { className: "svg-icon" }, icon)));

const ListItemAction = ({ children }) => (React.createElement("div", { className: "list-item-action" }, children));

const ListItemText = ({ primary, secondary }) => (React.createElement("div", { className: "list-item-text" },
    React.createElement("div", { className: "list-item-text-primary" }, primary),
    secondary &&
        React.createElement("div", { className: "list-item-text-secondary text-muted", style: { fontSize: '0.875rem' } }, secondary)));

const ModalHeader = (props) => {
    const { children, isDismissable = false, onClose } = props;
    const handleClick = () => {
        onClose && onClose();
    };
    return (React.createElement("div", { className: "modal-header" },
        React.createElement("h5", { className: "modal-title" }, children),
        isDismissable &&
            React.createElement("button", { type: "button", className: "close", onClick: handleClick },
                React.createElement("span", { "aria-hidden": "true" }, "\u00D7"))));
};

const ModalBody = ({ children }) => (React.createElement("div", { className: "modal-body" }, children));

const Modal = (props) => {
    const { children, header, footer, onHeaderCloseClick, onBackdropClick, isDismissable = false } = props;
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);
    const handleClickBackdrop = () => {
        onBackdropClick && onBackdropClick();
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: "modal show", style: { display: 'block' } },
            React.createElement("div", { className: "modal-dialog modal-dialog-centered", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    header &&
                        React.createElement(ModalHeader, { isDismissable: isDismissable, onClose: () => onHeaderCloseClick && onHeaderCloseClick() }, header),
                    React.createElement(ModalBody, null, children),
                    footer &&
                        React.createElement("div", { className: "modal-footer" }, footer)))),
        React.createElement(Backdrop, { onClick: handleClickBackdrop })));
};

const ModalFooter = ({ children }) => (React.createElement("div", { className: "modal-body" }, children));

// export enum MODALRESULT { OK = 'OK', CANCEL = 'CANCEL', DELETE = 'DELETE' }
var MODALTYPE;
(function (MODALTYPE) {
    MODALTYPE["BASIC"] = "BASIC";
    MODALTYPE["FORM"] = "FORM";
})(MODALTYPE || (MODALTYPE = {}));
var MODALBUTTONTYPE;
(function (MODALBUTTONTYPE) {
    MODALBUTTONTYPE["OK"] = "OK";
    MODALBUTTONTYPE["CANCEL"] = "CANCEL";
    MODALBUTTONTYPE["RESET"] = "RESET";
    MODALBUTTONTYPE["DEFAULT"] = "DEFAULT";
})(MODALBUTTONTYPE || (MODALBUTTONTYPE = {}));

const GlobalModal = ({ title, description, formControls, onOk, onCancel, isDismissable = false, buttons = [
    { label: 'cancel', type: MODALBUTTONTYPE.CANCEL, color: COLOR.secondary, variant: VARIANT.text, focus: true },
    { label: 'ok', type: MODALBUTTONTYPE.OK, variant: VARIANT.contained },
] }) => {
    // workaround for getDerivedStateFromProps
    const [myControls, setMyControls] = useState(null);
    useEffect(() => {
        setMyControls(Object.assign({}, formControls));
    }, []);
    // end
    const modalType = formControls ? MODALTYPE.FORM : MODALTYPE.BASIC;
    const myForm = useRef(null);
    const handleOk = () => {
        var _a;
        if (modalType === MODALTYPE.FORM) {
            (_a = myForm === null || myForm === void 0 ? void 0 : myForm.current) === null || _a === void 0 ? void 0 : _a.handleFormSubmit();
        }
        else {
            onOk && onOk();
        }
    };
    const handleCancel = () => {
        onCancel && onCancel();
    };
    const onSubmit = (values) => {
        onOk && onOk(values);
    };
    // TODO
    const handleClickBackdrop = () => {
        console.warn('backdrop click');
    };
    const handleClickButton = (button) => {
        switch (button.type) {
            case MODALBUTTONTYPE.OK:
                handleOk();
                break;
            case MODALBUTTONTYPE.CANCEL:
                handleCancel();
                break;
            default:
                handleCancel();
                break;
        }
        button.handler && button.handler();
    };
    return (React.createElement(Modal, { header: title, onHeaderCloseClick: onCancel, isDismissable: isDismissable, onBackdropClick: handleClickBackdrop, footer: React.createElement(Fragment, null, buttons.map((button, index) => (React.createElement(Button, { key: index, variant: button.variant, color: button.color, autoFocus: button.autoFocus, onClick: () => handleClickButton(button) }, button.label)))) },
        description && React.createElement("div", null, description),
        modalType === MODALTYPE.FORM &&
            React.createElement(Fragment, null,
                React.createElement(Form, { ref: myForm, controls: myControls, validateOnBlur: true, onSubmit: onSubmit }))));
};

class ModalService {
    show(title, description, options) {
        return new Promise((resolve, reject) => {
            if (!this.container) {
                this.container = document.createElement('div');
                document.body.appendChild(this.container);
                const handleOk = (values) => {
                    resolve(values);
                    this.hide();
                };
                const handleCancel = () => {
                    reject();
                    this.hide();
                };
                render(React.createElement(GlobalModal, { title: title, description: description, formControls: options && options.formControls, onCancel: handleCancel, onOk: handleOk, isDismissable: options && options.isDismissable, buttons: options && options.buttons }), this.container);
            }
        });
    }
    hide() {
        if (this.container) {
            unmountComponentAtNode(this.container);
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
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        if (items && items.length > 0) {
            initMenuItems();
        }
    }, [items]);
    useEffect(() => { initMenuItems(); }, [currentUrl]);
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
    return (React.createElement("nav", { className: "sidebar navbar navbar-expand-lg align-items-start" },
        React.createElement(List, null, menuItems.map(item => React.createElement(ListItem, { key: item.id, onClick: (e) => navigate(e, `/${item.path}`) },
            React.createElement("div", { className: "d-flex flex-column w-100" },
                item.label,
                item.items &&
                    React.createElement(List, null, item.items.map(subItem => (React.createElement(ListItem, { key: subItem.id, onClick: (e) => navigate(e, `/${item.path}/${subItem.path}`) }, subItem.label))))))))));
};

const Snackbar = (props) => {
    const { message, color = COLOR.dark, actionText = 'ok', onOk } = props;
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
    return (React.createElement("div", { className: getCssClasses() },
        React.createElement("div", { className: "text" }, message),
        React.createElement("div", { className: "action text-accent", onClick: handleClickAction },
            React.createElement("span", null, actionText))));
};

class SnackbarService {
    show(message, options) {
        const defaultOptions = { timeout: 3000, actionText: 'ok', color: COLOR.dark };
        const mergedOptions = Object.assign(defaultOptions, options);
        return new Promise((resolve, reject) => {
            if (this.container) {
                this.hide();
            }
            this.container = document.createElement('div');
            this.container.classList.add('snackbar-container');
            document.body.appendChild(this.container);
            if (mergedOptions.timeout && mergedOptions.timeout > 0) {
                this.handler = setTimeout(() => {
                    this.hide();
                }, mergedOptions.timeout);
            }
            const handleOk = () => {
                resolve();
                this.hide();
            };
            render(React.createElement(Snackbar, { message: message, color: mergedOptions.color, actionText: mergedOptions.actionText, onOk: handleOk }), this.container);
        });
    }
    hide() {
        if (this.container) {
            unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);
            this.container = null;
            clearTimeout(this.handler);
        }
    }
}
const snackbarService = new SnackbarService();

const Table = (props) => {
    const { children, className = '', bordered, striped, hover, responsive = false } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('table');
        cssClasses.push(className);
        bordered && cssClasses.push('table-bordered');
        striped && cssClasses.push('table-striped');
        hover && cssClasses.push('table-hover');
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement(ConditionalWrapper, { condition: responsive, wrapper: children => React.createElement("div", { className: "table-responsive" }, children) },
        React.createElement("table", { className: getCssClasses() }, children)));
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

/* eslint-disable jsx-a11y/anchor-is-valid */
const TabNav = (props) => {
    const { eventKey, disabled, children, isActive, onClick } = props;
    return (React.createElement("li", { key: eventKey, className: "nav-item" + (disabled ? ' disabled' : '') },
        React.createElement("a", { className: "nav-link" + (isActive ? ' active' : '') + (disabled ? ' disabled' : ''), onClick: () => !disabled && onClick && onClick(eventKey) }, children)));
};

const Tabset = (props) => {
    const { children, className = '', fill, onTabSelect, selectedEventKey } = props;
    const [_selectedEventKey, setSelectedEventKey] = useState(selectedEventKey);
    const [navs, setNavs] = useState([]);
    const [tabs, setTabs] = useState([]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push("nav nav-tabs tabset");
        cssClasses.push(className);
        if (fill)
            cssClasses.push('nav-fill');
        return cssClasses.filter(css => css).join(' ');
    };
    useEffect(() => {
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
    useEffect(() => {
        var _a, _b;
        if (tabs && tabs.length > 0) {
            const activeTab = tabs.find(tab => { var _a; return ((_a = tab.props) === null || _a === void 0 ? void 0 : _a.eventKey) === _selectedEventKey; });
            if (activeTab) {
                setSelectedEventKey((_a = activeTab.props) === null || _a === void 0 ? void 0 : _a.eventKey);
            }
            else {
                setSelectedEventKey((_b = tabs[0].props) === null || _b === void 0 ? void 0 : _b.eventKey);
            }
        }
    }, [tabs]);
    const handleClickTab = (eventKey) => {
        setSelectedEventKey(eventKey);
        onTabSelect && onTabSelect(eventKey);
    };
    return (navs && tabs &&
        React.createElement(Fragment, null,
            React.createElement("ul", { className: getCssClasses() }, navs.map(nav => (React.createElement(TabNav, { key: nav.eventKey, eventKey: nav.eventKey, isActive: nav.eventKey === _selectedEventKey, disabled: nav.disabled, onClick: (eventKey) => handleClickTab(eventKey) }, nav.title)))),
            React.createElement("div", { className: "tab-content" }, tabs.map((tab) => {
                var _a, _b;
                return (cloneElement(tab, {
                    isActive: ((_a = tab.props) === null || _a === void 0 ? void 0 : _a.eventKey) === _selectedEventKey,
                    key: (_b = tab.props) === null || _b === void 0 ? void 0 : _b.eventKey
                }));
            }))));
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
    return (React.createElement("div", { className: getCssClasses() }, children));
};

const Tooltip = (props) => {
    const { children, text, placement = 'left' } = props;
    const [show, setShow] = useState(false);
    const refChild = useRef(null);
    const refTooltip = useRef(null);
    useEffect(() => {
        if (show === true && refChild && refChild.current) {
            createPopper(refChild.current, refTooltip.current, {
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
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseLeave = () => {
        setShow(false);
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { ref: refChild, id: "tooltip-container" }, cloneElement(children, {
            // onClick: handleClick,
            onMouseOver: handleMouseOver,
            onMouseLeave: handleMouseLeave,
        })),
        show &&
            React.createElement("div", { ref: refTooltip, id: "tooltip" },
                text,
                React.createElement("div", { id: "arrow", "data-popper-arrow": true }))));
};

// TODO props
const TreeNode = (props) => {
    const { id, name, level, parentId, hasChildren, isExpanded, isSelected, onClick, onClickSelect } = props;
    return (React.createElement("li", { className: "tree-node", style: { paddingLeft: `${40 * level}px` } },
        hasChildren ?
            React.createElement(IconButton, { className: "btn-toggle", onClick: () => onClick(id), icon: !isExpanded ? React.createElement(ChevronRightSolidIcon, null) : React.createElement(ChevronDownSolidIcon, null) })
            :
                React.createElement("button", { className: "btn-toggle" }),
        React.createElement(Checkbox, { checked: isSelected, onChange: () => onClickSelect(id) }),
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
    const [flattenData, setFlattenData] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);
    const [selectedItemIds, setSelectedItemIds] = useState([]);
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
    useEffect(() => {
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
    return (React.createElement("ul", { className: "treeview" }, flattenData.map(item => {
        return isItemVisible(item) &&
            React.createElement(TreeNode, { key: item.id, id: item.id, name: item.name, level: item.level, parentId: item.parentId, isExpanded: isExpanded(item.id), isSelected: isSelected(item.id), hasChildren: item.hasChildren, onClick: () => handleNodeClick(item), onClickSelect: () => handleNodeClickSelect(item) });
    })));
};

var LogType;
(function (LogType) {
    LogType["log"] = "log";
    LogType["info"] = "info";
    LogType["warn"] = "warn";
    LogType["debug"] = "debug";
    LogType["error"] = "error";
})(LogType || (LogType = {}));
class LoggerService {
    constructor() {
        this.logType = LogType;
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

export { AppBar, AppBarTitle, Backdrop, Breadcrumb, Button, COLOR, Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle, CaretDownSolidIcon, CheckSquareRegularIcon, Checkbox, ChevronDownSolidIcon, ChevronRightSolidIcon, ChevronUpSolidIcon, Column, ConditionalWrapper, Drawer, DropDown, DropDownDivider, DropDownItem, DropDownMenu, DropDownToggle, EmailValidator, ExpansionPanel, ExpansionPanelContent, ExpansionPanelHeader, Form, FormControl, FormError, FormGroup, FormHint, FormInput, FormLabel, GlobalModal, HomeSolidIcon, IconButton, IsEmptyValidator, List, ListItem, ListItemAction, ListItemAvatar, ListItemIcon, ListItemText, LogType, MODALBUTTONTYPE, MODALTYPE, Modal, ModalBody, ModalFooter, ModalHeader, POSITION, Row, SIZE, Sidebar, Snackbar, SquareRegularIcon, SvgIcon, Tab, Table, Tabset, Tooltip, TreeView, VARIANT, loggerService, modalService, snackbarService };
//# sourceMappingURL=index.es.js.map
