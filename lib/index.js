import React, { useState, useRef, useEffect, Fragment, Component, createRef, createContext, useContext, cloneElement } from 'react';
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
    // danger = 'danger',
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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$s = ".AppBar-module_appbar__1S8G1 {\n  padding: 0.5rem 1rem;\n  display: flex;\n  z-index: 1000;\n  height: 64px;\n  flex-shrink: 0; }\n  .AppBar-module_appbar__1S8G1.AppBar-module_primary__3CiO7 {\n    color: var(--primary-contrast-text);\n    background-color: var(--primary); }\n  .AppBar-module_appbar__1S8G1.AppBar-module_shadow__2c8iH {\n    box-shadow: var(--shadow); }\n";
var styles$s = {"appbar":"AppBar-module_appbar__1S8G1","primary":"AppBar-module_primary__3CiO7","shadow":"AppBar-module_shadow__2c8iH"};
styleInject(css_248z$s);

const AppBar = (props) => {
    const { children, className = '', color = COLOR.primary, shadow = true } = props, rest = __rest(props, ["children", "className", "color", "shadow"]);
    const getCssClasses = () => {
        const result = [];
        result.push(styles$s[color]);
        result.push(styles$s.appbar);
        shadow && result.push(styles$s['shadow']);
        result.push(className);
        return result.filter(r => r).join(' ');
    };
    return (React.createElement("nav", Object.assign({ className: getCssClasses() }, rest), children));
};

var css_248z$r = ".AppBarTitle-module_appbarTitle__3J-Z1 {\n  display: flex;\n  align-items: center;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .AppBarTitle-module_appbarTitle__3J-Z1:hover {\n    cursor: pointer; }\n  .AppBarTitle-module_appbarTitle__3J-Z1 h1 {\n    margin-bottom: 0;\n    font-size: 20px;\n    font-weight: 400;\n    line-height: 30px; }\n";
var styles$r = {"appbarTitle":"AppBarTitle-module_appbarTitle__3J-Z1"};
styleInject(css_248z$r);

const AppBarTitle = (props) => {
    const { children, className, onClick } = props;
    const getCssClass = () => {
        const result = [];
        result.push(className);
        result.push(styles$r.appbarTitle);
        return result.filter(r => r).join(' ');
    };
    return (React.createElement("div", { className: getCssClass(), onClick: () => onClick && onClick() }, children));
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
    return (createPortal(React.createElement("div", { className: getCssClasses(), onClick: handleClick, style: { height: '100%', width: '100%', position: 'absolute' } }), target));
};

var css_248z$q = ".Badge-module_badgeContainer__1QtTD {\n  display: inline-flex;\n  position: relative;\n  flex-shrink: 0;\n  vertical-align: middle; }\n\n.Badge-module_badge__2Y_LO {\n  top: 0;\n  right: 0;\n  transform: scale(1) translate(50%, -50%);\n  transform-origin: 100% 0%;\n  height: 20px;\n  display: flex;\n  padding: 0 6px;\n  z-index: 1;\n  position: absolute;\n  flex-wrap: wrap;\n  font-size: 0.75rem;\n  min-width: 20px;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  align-items: center;\n  font-weight: 500;\n  line-height: 1;\n  align-content: center;\n  border-radius: 10px;\n  flex-direction: row;\n  justify-content: center; }\n  .Badge-module_badge__2Y_LO.Badge-module_primary__2mn7_ {\n    color: var(--primary-contrast-text);\n    background-color: var(--primary); }\n  .Badge-module_badge__2Y_LO.Badge-module_accent__8Hg8z {\n    color: var(--accent-contrast-text);\n    background-color: var(--accent); }\n  .Badge-module_badge__2Y_LO.Badge-module_secondary__1QqDc {\n    color: var(--secondary-contrast-text);\n    background-color: var(--secondary); }\n  .Badge-module_badge__2Y_LO.Badge-module_light__3Z7JO {\n    color: var(--light-contrast-text);\n    background-color: var(--light); }\n  .Badge-module_badge__2Y_LO.Badge-module_dark__2qWe_ {\n    color: var(--dark-contrast-text);\n    background-color: var(--dark); }\n";
var styles$q = {"badgeContainer":"Badge-module_badgeContainer__1QtTD","badge":"Badge-module_badge__2Y_LO","primary":"Badge-module_primary__2mn7_","accent":"Badge-module_accent__8Hg8z","secondary":"Badge-module_secondary__1QqDc","light":"Badge-module_light__3Z7JO","dark":"Badge-module_dark__2qWe_"};
styleInject(css_248z$q);

const Badge = (props) => {
    const { children, content, className = '', color = COLOR.primary } = props, rest = __rest(props, ["children", "content", "className", "color"]);
    const getCssClassesBadgeContainer = () => {
        const cssClasses = [];
        cssClasses.push(styles$q.badgeContainer);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const getCssClassesBadge = () => {
        const cssClasses = [];
        cssClasses.push(styles$q.badge);
        cssClasses.push(styles$q[color]);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClassesBadgeContainer() }, rest),
        children,
        React.createElement("span", { className: getCssClassesBadge() }, content)));
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
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("button", Object.assign({ type: "button", className: getCssClasses() }, rest), children));
};

const ButtonGroup = (props) => {
    const { children, className } = props, rest = __rest(props, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('btn-group');
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses(), role: "group" }, rest), children));
};

const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

var css_248z$p = ".Breadcrumb-module_breadcrumb__2BHXS {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  border-radius: 0.25rem; }\n  .Breadcrumb-module_breadcrumb__2BHXS .Breadcrumb-module_breadcrumbItem__33R5u + .Breadcrumb-module_breadcrumbItem__33R5u {\n    padding-left: 0.5rem; }\n  .Breadcrumb-module_breadcrumb__2BHXS .Breadcrumb-module_breadcrumbItem__33R5u + .Breadcrumb-module_breadcrumbItem__33R5u::before {\n    float: left;\n    padding-right: 0.5rem;\n    color: #6c757d;\n    content: \"/\"; }\n  .Breadcrumb-module_breadcrumb__2BHXS .Breadcrumb-module_breadcrumbItem__33R5u a:not([href]):not([class]) {\n    color: var(--primary); }\n  .Breadcrumb-module_breadcrumb__2BHXS .Breadcrumb-module_breadcrumbItem__33R5u:hover {\n    cursor: pointer; }\n  .Breadcrumb-module_breadcrumb__2BHXS .Breadcrumb-module_breadcrumbItem__33R5u.Breadcrumb-module_active__2y_Jg:hover {\n    cursor: unset; }\n";
var styles$p = {"breadcrumb":"Breadcrumb-module_breadcrumb__2BHXS","breadcrumbItem":"Breadcrumb-module_breadcrumbItem__33R5u","active":"Breadcrumb-module_active__2y_Jg"};
styleInject(css_248z$p);

const Breadcrumb = (props) => {
    const { className = '', items, onItemClick } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$p.breadcrumb);
        cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClickItem = (item) => {
        !item.isActive && onItemClick && onItemClick(item);
    };
    return (React.createElement(React.Fragment, null, items && items.length > 0 &&
        React.createElement("nav", null,
            React.createElement("ol", { className: getCssClasses() }, items.map((item, index) => (React.createElement("li", { key: index, className: styles$p.breadcrumbItem + (item.isActive ? ' active' : ''), onClick: () => handleClickItem(item) },
                React.createElement(ConditionalWrapper, { condition: !item.isActive, 
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    wrapper: label => React.createElement("a", null, label) }, item.label))))))));
};

var css_248z$o = ".Card-module_card__31o3Z {\n  background: var(--white);\n  border-radius: var(--borderRadius); }\n  .Card-module_card__31o3Z.Card-module_shadow__2lpYq {\n    box-shadow: var(--shadow); }\n";
var styles$o = {"card":"Card-module_card__31o3Z","shadow":"Card-module_shadow__2lpYq"};
styleInject(css_248z$o);

const Card = (props) => {
    const { children, className = '', shadow = true } = props, rest = __rest(props, ["children", "className", "shadow"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$o.card);
        shadow && cssClasses.push(styles$o.shadow);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

var css_248z$n = ".CardBody-module_cardBody__N8z-L {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem; }\n";
var styles$n = {"cardBody":"CardBody-module_cardBody__N8z-L"};
styleInject(css_248z$n);

const CardBody = (_a) => {
    var { children, className = '' } = _a, rest = __rest(_a, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$n.cardBody);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

const CardFooter = ({ children }) => (React.createElement("div", { className: "card-footer" }, children));

const CardSubtitle = ({ children }) => (React.createElement("div", { className: "text-muted mb-2" }, children));

const CardText = (props) => (React.createElement("div", { className: "card-text" }, props.children));

var css_248z$m = ".CardTitle-module_cardTitle__24Amb {\n  margin-bottom: 0;\n  font-size: 1.5rem;\n  font-weight: 400;\n  line-height: 1.334;\n  letter-spacing: 0em; }\n";
var styles$m = {"cardTitle":"CardTitle-module_cardTitle__24Amb"};
styleInject(css_248z$m);

const CardTitle = (props) => {
    const { children, className = '', as: As = 'div' } = props, rest = __rest(props, ["children", "className", "as"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$m.cardTitle);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement(As, Object.assign({ className: getCssClasses() }, rest), children));
};

const CardImage = (_a) => {
    var { src, alt, className = '' } = _a, rest = __rest(_a, ["src", "alt", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('card-img-top');
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("img", Object.assign({ className: getCssClasses() }, rest, { src: src, alt: alt })));
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

const TimesSolidIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
    React.createElement("path", { fill: "currentColor", d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" })));

const SpinnerSolidIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "spinner", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
    React.createElement("path", { fill: "currentColor", d: "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" })));

const PlusSolidIcon = () => (React.createElement("svg", { "aria-hidden": "true", focusable: "false", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
    React.createElement("path", { fill: "currentColor", d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" })));

var css_248z$l = ".Icon-module_icon__2etAT {\n  align-items: center;\n  justify-content: center;\n  display: flex; }\n  .Icon-module_icon__2etAT svg {\n    width: 20px;\n    height: 20px; }\n";
var styles$l = {"icon":"Icon-module_icon__2etAT"};
styleInject(css_248z$l);

const Icon = (props) => {
    const { children, className = '' } = props, rest = __rest(props, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$l.icon);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

var css_248z$k = ".IconButton-module_iconButton__1xqrL {\n  border-radius: 100%;\n  padding: 0px;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  min-width: auto;\n  box-shadow: none;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  font-size: 1rem;\n  line-height: 1.5;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\r box-shadow 0.15s ease-in-out;\n  border: none; }\n  .IconButton-module_iconButton__1xqrL:hover {\n    text-decoration: none;\n    cursor: pointer; }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_shadow__5U4-_ {\n    box-shadow: var(--shadow); }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_md__1lmDL {\n    width: 48px;\n    height: 48px; }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_lg__1O2Uy {\n    width: 56px;\n    height: 56px; }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG {\n    padding: 0;\n    background: transparent;\n    color: inherit; }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG.IconButton-module_active__2tJut {\n      text-decoration: underline;\n      background-color: rgba(0, 0, 0, 0.04); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG.IconButton-module_primary__qRw4T:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG.IconButton-module_primary__qRw4T.IconButton-module_active__2tJut {\n      color: var(--primary); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG.IconButton-module_secondary__1lzNL:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG.IconButton-module_secondary__1lzNL.IconButton-module_active__2tJut {\n      color: var(--secondary); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG.IconButton-module_accent__exm5t:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG.IconButton-module_accent__exm5t.IconButton-module_active__2tJut {\n      color: var(--accent); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_text__33RrG.IconButton-module_disabled__3TgpF {\n      color: rgba(0, 0, 0, 0.26);\n      background-color: transparent;\n      cursor: default;\n      pointer-events: none; }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_active__2tJut {\n    text-decoration: underline;\n    background-color: rgba(0, 0, 0, 0.04); }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_primary__qRw4T {\n    background-color: var(--primary);\n    color: var(--white); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_primary__qRw4T:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_primary__qRw4T.IconButton-module_active__2tJut {\n      background-color: var(--primary-dark); }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_secondary__1lzNL {\n    background-color: var(--secondary);\n    color: var(--white); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_secondary__1lzNL:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_secondary__1lzNL.IconButton-module_active__2tJut {\n      background-color: var(--secondary-dark); }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_accent__exm5t {\n    background-color: var(--accent);\n    color: var(--white); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_accent__exm5t:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_accent__exm5t.IconButton-module_active__2tJut {\n      background-color: var(--accent-dark); }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_light__2nWhD {\n    background-color: var(--light);\n    color: var(--dark); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_light__2nWhD:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_light__2nWhD.IconButton-module_active__2tJut {\n      background-color: var(--light-dark); }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_dark__1e6bR {\n    background-color: var(--dark);\n    color: var(--white); }\n    .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_dark__1e6bR:hover, .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_dark__1e6bR.IconButton-module_active__2tJut {\n      background-color: var(--dark-light); }\n  .IconButton-module_iconButton__1xqrL.IconButton-module_contained__gWulJ.IconButton-module_disabled__3TgpF {\n    color: rgba(0, 0, 0, 0.26);\n    background-color: transparent;\n    cursor: default;\n    pointer-events: none; }\n";
var styles$k = {"iconButton":"IconButton-module_iconButton__1xqrL","shadow":"IconButton-module_shadow__5U4-_","md":"IconButton-module_md__1lmDL","lg":"IconButton-module_lg__1O2Uy","text":"IconButton-module_text__33RrG","active":"IconButton-module_active__2tJut","primary":"IconButton-module_primary__qRw4T","secondary":"IconButton-module_secondary__1lzNL","accent":"IconButton-module_accent__exm5t","disabled":"IconButton-module_disabled__3TgpF","contained":"IconButton-module_contained__gWulJ","light":"IconButton-module_light__2nWhD","dark":"IconButton-module_dark__1e6bR"};
styleInject(css_248z$k);

const IconButton = (props) => {
    const { children, icon, variant = VARIANT.text, color = COLOR.primary, size = SIZE.md, isActive, disabled, className = '', shadow } = props, rest = __rest(props, ["children", "icon", "variant", "color", "size", "isActive", "disabled", "className", "shadow"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$k[color]);
        cssClasses.push(styles$k[variant]);
        cssClasses.push(styles$k[size]);
        cssClasses.push(styles$k.iconButton);
        isActive && cssClasses.push(styles$k.active);
        disabled && cssClasses.push(styles$k.disabled);
        shadow && cssClasses.push(styles$k.shadow);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("button", Object.assign({ type: "button", className: getCssClasses(), disabled: disabled }, rest),
        React.createElement(Icon, null, icon)));
};

var css_248z$j = ".Checkbox-module_checkboxContainer__2oWhu {\n  display: flex;\n  align-items: center; }\n  .Checkbox-module_checkboxContainer__2oWhu label {\n    margin-bottom: 0;\n    margin-left: 0; }\n    .Checkbox-module_checkboxContainer__2oWhu label:hover {\n      cursor: pointer; }\n";
var styles$j = {"checkboxContainer":"Checkbox-module_checkboxContainer__2oWhu"};
styleInject(css_248z$j);

const Checkbox = (props) => {
    const { id, checked, className = '', label, name, value = "off", disabled, readOnly } = props, rest = __rest(props, ["id", "checked", "className", "label", "name", "value", "disabled", "readOnly"]);
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
        className && cssClasses.push(className);
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
    return (React.createElement("div", { className: styles$j.checkboxContainer },
        React.createElement(IconButton, { className: getCssClasses(), onClick: handleClick, icon: getIcon(), disabled: disabled || readOnly }),
        React.createElement("label", { onClick: handleClick }, label),
        React.createElement("input", Object.assign({ type: "checkbox", ref: checkboxElement, id: id, name: name, checked: isChecked, disabled: disabled, readOnly: readOnly, hidden: true, value: value }, rest))));
};

var css_248z$i = ".Chip-module_chip__1cghp {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  font-size: 75%;\n  font-weight: 700;\n  border-radius: 10rem;\n  line-height: 1; }\n  .Chip-module_chip__1cghp svg {\n    width: 18px;\n    height: 18px; }\n  .Chip-module_chip__1cghp .Chip-module_deleteIcon__34X9c {\n    margin-left: 5px; }\n    .Chip-module_chip__1cghp .Chip-module_deleteIcon__34X9c:hover {\n      cursor: pointer; }\n  .Chip-module_chip__1cghp.Chip-module_primary__198Dq {\n    background: var(--primary);\n    color: var(--primary-contrast-text); }\n  .Chip-module_chip__1cghp.Chip-module_secondary__14H0b {\n    background: var(--secondary);\n    color: var(--secondary-contrast-text); }\n  .Chip-module_chip__1cghp.Chip-module_accent__2LkWr {\n    background: var(--accent);\n    color: var(--accent-contrast-text); }\n  .Chip-module_chip__1cghp.Chip-module_clickable__2Y4x7:hover {\n    cursor: pointer; }\n    .Chip-module_chip__1cghp.Chip-module_clickable__2Y4x7:hover.Chip-module_primary__198Dq {\n      background: var(--primary-dark); }\n    .Chip-module_chip__1cghp.Chip-module_clickable__2Y4x7:hover.Chip-module_secondary__14H0b {\n      background: var(--secondary-dark); }\n    .Chip-module_chip__1cghp.Chip-module_clickable__2Y4x7:hover.Chip-module_accent__2LkWr {\n      background: var(--accent-dark); }\n  .Chip-module_chip__1cghp.Chip-module_shadow__3TYny {\n    box-shadow: var(--shadow); }\n";
var styles$i = {"chip":"Chip-module_chip__1cghp","deleteIcon":"Chip-module_deleteIcon__34X9c","primary":"Chip-module_primary__198Dq","secondary":"Chip-module_secondary__14H0b","accent":"Chip-module_accent__2LkWr","clickable":"Chip-module_clickable__2Y4x7","shadow":"Chip-module_shadow__3TYny"};
styleInject(css_248z$i);

const Chip = (props) => {
    const { children, color = 'secondary', className, shadow, onClick, onDelete, deleteIcon = React.createElement(TimesSolidIcon, null), style } = props, rest = __rest(props, ["children", "color", "className", "shadow", "onClick", "onDelete", "deleteIcon", "style"]);
    const getCssClass = () => {
        const result = [];
        result.push(styles$i.chip);
        result.push(styles$i[color]);
        shadow && result.push(styles$i['shadow']);
        onClick && result.push(styles$i['clickable']);
        result.push(className);
        return result.filter(r => r).join(' ');
    };
    const handleClickOnDelete = (e) => {
        e.stopPropagation();
        onDelete && onDelete(e);
    };
    return (React.createElement("div", Object.assign({ className: getCssClass() }, rest, { style: style }),
        React.createElement("div", null, children),
        onDelete && (React.createElement("div", { className: styles$i.deleteIcon, onClick: e => handleClickOnDelete(e) }, deleteIcon))));
};

const FormLabel = ({ children, className, htmlFor }) => (React.createElement("label", { htmlFor: htmlFor, className: className }, children));

const FormGroup = (props) => {
    const { children, className = 'form-group' } = props;
    return (React.createElement("div", { className: className }, children));
};

const FileInput = (props) => {
    const { id, checked, className = '', name, multiple = false, accept, disabled, onChange, readOnly, value } = props, rest = __rest(props, ["id", "checked", "className", "name", "multiple", "accept", "disabled", "onChange", "readOnly", "value"]);
    const inputFileElement = useRef(null);
    const [fileList, setFileList] = useState();
    const getCssClass = () => {
        const result = [];
        result.push(className);
        return result.filter(r => r).join(' ');
    };
    const handleOnChange = (event) => {
        const values = event.target.files;
        setFileList(values);
        onChange && onChange(event);
    };
    return (React.createElement("div", { className: "d-flex align-items-center flex-wrap" },
        React.createElement(Button, { disabled: disabled, onClick: () => { var _a; return (_a = inputFileElement.current) === null || _a === void 0 ? void 0 : _a.click(); } }, multiple ? 'choose files' : 'choose a file'),
        fileList && Array.from(fileList).map((file) => React.createElement("div", { key: file.name, className: "ml-2" },
            React.createElement(Chip, null, file.name))),
        React.createElement("input", Object.assign({ type: "file", ref: inputFileElement, className: getCssClass(), id: id, name: name, multiple: multiple, accept: accept, disabled: disabled, readOnly: readOnly, hidden: true, onChange: handleOnChange, value: value }, rest))));
};

var css_248z$h = ".List-module_list__1ax9w {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  margin-top: 0;\n  background-color: var(--white); }\n";
var styles$h = {"list":"List-module_list__1ax9w"};
styleInject(css_248z$h);

const List = (props) => {
    const { children, className = '', isFlush = false } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        if (isFlush) {
            cssClasses.push(styles$h.flush);
        }
        cssClasses.push(styles$h.list);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("ul", { className: getCssClasses() }, children));
};

var css_248z$g = ".ListItem-module_listItem__3hAZb {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  width: 100%;\n  color: var(--bodyColor);\n  text-align: inherit;\n  transition: background 0.5s ease; }\n  .ListItem-module_listItem__3hAZb:hover, .ListItem-module_listItem__3hAZb.ListItem-module_active__hyvch {\n    cursor: pointer;\n    z-index: 1;\n    text-decoration: none;\n    background-color: rgba(0, 0, 0, 0.04);\n    color: var(--primary); }\n  .ListItem-module_listItem__3hAZb + .ListItem-module_listItem__3hAZb {\n    border-top-width: 0; }\n";
var styles$g = {"listItem":"ListItem-module_listItem__3hAZb","active":"ListItem-module_active__hyvch"};
styleInject(css_248z$g);

const ListItem = (props) => {
    const { id, children, active = false, className, isHoverable = false, isDisabled = false, onClick } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        if (active) {
            cssClasses.push(styles$g['active']);
        }
        if (isHoverable) {
            cssClasses.push(`list-group-item-action`);
        }
        if (isDisabled) {
            cssClasses.push(`disabled`);
        }
        className && cssClasses.push(className);
        cssClasses.push(styles$g.listItem);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClick = (e) => {
        onClick && onClick(e);
    };
    return (React.createElement("li", { id: id, onClick: handleClick, className: getCssClasses() }, children));
};

var css_248z$f = ".ListItemAvatar-module_avatar__1fjSE {\n  margin-right: 16px; }\n  .ListItemAvatar-module_avatar__1fjSE svg, .ListItemAvatar-module_avatar__1fjSE img {\n    width: 24px;\n    height: 24px; }\n  .ListItemAvatar-module_avatar__1fjSE img {\n    border-radius: 50%; }\n";
var styles$f = {"avatar":"ListItemAvatar-module_avatar__1fjSE"};
styleInject(css_248z$f);

const ListItemAvatar = ({ avatar }) => (React.createElement("div", { className: styles$f.avatar }, avatar));

var css_248z$e = ".ListItemIcon-module_icon__-nsUy {\n  margin-right: 32px; }\n  .ListItemIcon-module_icon__-nsUy svg {\n    width: 24px;\n    height: 24px; }\n";
var styles$e = {"icon":"ListItemIcon-module_icon__-nsUy"};
styleInject(css_248z$e);

const ListItemIcon = ({ icon }) => (React.createElement("div", { className: styles$e.icon }, icon));

var css_248z$d = ".ListItemAction-module_listItemAction__26S66 {\n  display: flex;\n  margin-left: auto;\n  justify-content: center;\n  min-width: 40px; }\n  .ListItemAction-module_listItemAction__26S66 svg {\n    width: 20px;\n    height: 20px; }\n";
var styles$d = {"listItemAction":"ListItemAction-module_listItemAction__26S66"};
styleInject(css_248z$d);

const ListItemAction = ({ children, onClick }) => (React.createElement("div", { className: styles$d.listItemAction, onClick: e => onClick && onClick(e) }, children));

const ListItemText = ({ primary, secondary }) => (React.createElement("div", { className: "list-item-text" },
    React.createElement("div", { className: "list-item-text-primary" }, primary),
    secondary &&
        React.createElement("div", { className: "list-item-text-secondary text-muted", style: { fontSize: '0.875rem' } }, secondary)));

var css_248z$c = ".Select-module_selectContainer__2oizY {\n  position: relative; }\n\n.Select-module_select__MSqgU {\n  min-height: calc(1.5em + 0.75rem + 2px);\n  height: auto;\n  display: flex; }\n  .Select-module_select__MSqgU:hover {\n    cursor: pointer; }\n\n.Select-module_selectMenu__2vhJt {\n  background-color: var(--light);\n  position: absolute;\n  box-shadow: var(--shadow);\n  border-radius: var(--borderRadius);\n  width: 100%;\n  top: 2px;\n  z-index: 1050;\n  max-height: 280px;\n  overflow: auto; }\n";
var styles$c = {"selectContainer":"Select-module_selectContainer__2oizY","select":"Select-module_select__MSqgU","selectMenu":"Select-module_selectMenu__2vhJt"};
styleInject(css_248z$c);

const Select = (props) => {
    const { id, className, options = [], value, multiple, multipleMaxCountItems = 5, onChange, onKeyDown } = props;
    const [model, setModel] = useState('');
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isShow, setIsShow] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const selectConainter = useRef(null);
    const getCssClass = () => {
        const result = [];
        result.push(className);
        result.push(styles$c.select);
        return result.filter(r => r).join(' ');
    };
    useEffect(() => {
        const newValue = !!value ? value : '';
        writeValue(newValue);
        if (newValue) {
            const option = options.find(o => o.value === newValue);
            if (option) {
                setHoverIndex(options.indexOf(option));
            }
        }
    }, [value]);
    useEffect(() => {
        var _a;
        // check hover index
        const htmlListItem = (_a = selectConainter.current) === null || _a === void 0 ? void 0 : _a.querySelector(`#list-item-${hoverIndex}`);
        htmlListItem === null || htmlListItem === void 0 ? void 0 : htmlListItem.scrollIntoView();
    }, [hoverIndex]);
    const writeValue = (val) => setModel(val);
    useEffect(() => {
        if (!multiple) {
            const newOption = options.find(o => o.value === model);
            if (newOption) {
                setSelectedOptions([newOption]);
            }
        }
        else {
            const filteredOptions = options.filter(o => model.indexOf(o.value) >= 0);
            setSelectedOptions([...filteredOptions]);
        }
    }, [model, multiple]);
    const handleOnClick = (option) => {
        let newValue = multiple ? [] : '';
        if (!multiple) {
            if (model !== option.value) {
                newValue = option.value;
                onChange && onChange(newValue);
            }
            hide();
        }
        else {
            const selectedOption = selectedOptions.find(o => o.value === option.value);
            if (selectedOption) {
                newValue = selectedOptions.filter(o => o.value !== option.value).map(o => o.value);
            }
            else {
                newValue = newValue.concat(selectedOptions.map(o => o.value));
                newValue.push(option.value);
            }
            onChange && onChange(newValue);
        }
        writeValue(newValue);
    };
    const show = () => setIsShow(true);
    const hide = () => setIsShow(false);
    const isActive = (option) => {
        return selectedOptions.indexOf(option) >= 0 || hoverIndex === options.indexOf(option);
    };
    const renderSingleViewModel = () => {
        let result = null;
        if (selectedOptions.length > 0) {
            result = React.createElement("span", null, selectedOptions[0].label);
        }
        return result;
    };
    const renderMultipleViewModel = () => {
        let result = null;
        if (selectedOptions.length <= multipleMaxCountItems && selectedOptions.length > 0) {
            result = selectedOptions
                .map(o => React.createElement(Chip, { color: COLOR.primary, key: o.value, className: "mr-2", onDelete: (e) => handleOnDelete(e, o) }, o.label));
        }
        else {
            result = React.createElement("span", null,
                selectedOptions.length,
                " Items selected");
        }
        return result;
    };
    const handleOnDelete = (event, option) => {
        event.stopPropagation();
        handleOnClick(option);
    };
    // TODO
    const handleOnKeyDown = (e) => {
        if (isShow) {
            onKeyDown && onKeyDown(e);
            switch (e.code) {
                case 'Escape':
                    hide();
                    break;
                case 'ArrowDown':
                    if (hoverIndex) {
                        setHoverIndex(hoverIndex + 1);
                    }
                    break;
                case 'ArrowUp':
                    // TODO
                    if (hoverIndex) {
                        setHoverIndex(hoverIndex - 1);
                    }
                    break;
                case 'Enter':
                    if (hoverIndex) {
                        const option = options[hoverIndex];
                        if (option)
                            handleOnClick(option);
                    }
                    break;
            }
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: selectConainter, className: styles$c.selectContainer },
            React.createElement("div", { id: id, className: getCssClass(), onClick: () => show(), tabIndex: 0, onKeyDown: e => handleOnKeyDown(e) },
                !multiple && renderSingleViewModel(),
                multiple && renderMultipleViewModel(),
                React.createElement(Icon, { className: "ml-auto" },
                    React.createElement(ChevronDownSolidIcon, null))),
            isShow &&
                React.createElement(React.Fragment, null,
                    React.createElement("div", { className: styles$c.selectMenu },
                        React.createElement(List, null, options && options.map((option, index) => React.createElement(ListItem, { id: `list-item-${index}`, key: option.value, onClick: () => handleOnClick(option), active: isActive(option) },
                            multiple &&
                                React.createElement(Checkbox, { checked: isActive(option), onChange: () => handleOnClick(option) }),
                            React.createElement(ListItemText, { primary: option.label ? option.label : option.value }))))),
                    React.createElement(Backdrop, { isTransparent: true, onClick: () => hide() })))));
};

var css_248z$b = "textarea {\n  min-height: calc(10em + 0.75rem + 2px);\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  background-clip: padding-box;\n  border: 2px solid var(--input-border-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  resize: vertical; }\n  textarea:focus {\n    outline: none !important;\n    border-color: var(--primary); }\n";
var styles$b = {};
styleInject(css_248z$b);

const Textarea = (props) => {
    const { className } = props, rest = __rest(props, ["className"]);
    const getCssClass = () => {
        const result = [];
        result.push(className);
        result.push(styles$b.textarea);
        return result.filter(r => r).join(' ');
    };
    return (React.createElement("textarea", Object.assign({ className: getCssClass() }, rest)));
};

const FormInput = (props) => {
    const { value, name, type, placeholder, className = 'form-control', isValid = true, options = [], textareaOptions, selectOptions, autoFocus, label, disabled = false, readonly = false, onChange, onBlur, onKeyDown } = props;
    return (React.createElement(Fragment, null,
        (type === 'text' ||
            type === 'date' ||
            type === 'datetime-local' ||
            type === 'email' ||
            type === 'number' ||
            type === 'password' ||
            type === 'color' ||
            type === 'time')
            &&
                React.createElement("input", { id: name, name: name, type: type, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, onChange: e => onChange && onChange(name, e.target.value, type), onBlur: onBlur, placeholder: placeholder, readOnly: readonly, disabled: disabled, onKeyDown: onKeyDown }),
        type === 'file' &&
            React.createElement(FileInput, { id: name, name: name, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, readOnly: readonly, disabled: disabled, onChange: e => onChange && onChange(name, e.target.value, type) }),
        type === 'textarea' &&
            React.createElement(Textarea, { id: name, name: name, className: className + (!isValid ? ' is-invalid' : ''), value: value, autoFocus: autoFocus, onChange: e => onChange && onChange(name, e.target.value, type), placeholder: placeholder, rows: textareaOptions === null || textareaOptions === void 0 ? void 0 : textareaOptions.rows, style: (textareaOptions === null || textareaOptions === void 0 ? void 0 : textareaOptions.resize) !== false ? undefined : { resize: 'none' }, onKeyDown: onKeyDown }),
        type === 'select' &&
            React.createElement(Select, { id: name, name: name, className: className + (!isValid ? ' is-invalid' : ''), value: value, multiple: selectOptions === null || selectOptions === void 0 ? void 0 : selectOptions.multiple, onChange: e => onChange && onChange(name, e, type), onKeyDown: onKeyDown, options: options }),
        type === 'checkbox' &&
            React.createElement(Checkbox, { id: name, name: name, label: label, className: (!isValid ? ' is-invalid' : ''), onChange: e => onChange && onChange(name, e.target.checked, type), checked: value, onKeyDown: onKeyDown }),
        type === 'radio' &&
            React.createElement(Fragment, null, options.map((option) => React.createElement("div", { className: "form-check", key: option.id },
                React.createElement("input", { id: option.id ? option.id : option.value, name: name, type: "radio", className: "form-check-input", onChange: e => onChange && onChange(name, e.target.value, type), value: option.value, checked: value === option.value, onKeyDown: onKeyDown }),
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

const IsEqualValidator = (valueA, valueB) => valueA === valueB;

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
    // extract to service?
    validateField(fieldValue, fieldValidators) {
        const errors = [];
        if (fieldValidators) {
            for (const validator of fieldValidators) {
                const validatorSplitted = validator.split(':');
                const validatorName = validatorSplitted[0];
                const validatorParam = validatorSplitted.length > 1 ? validatorSplitted[1] : null;
                switch (validatorName) {
                    case 'required':
                        if (IsEmptyValidator(fieldValue)) {
                            errors.push({ validator: validatorName, message: 'This field is required' });
                        }
                        break;
                    case 'email':
                        if (EmailValidator(fieldValue)) {
                            errors.push({ validator: validatorName, message: 'Email format is wrong' });
                        }
                        break;
                    case 'match':
                        if (validatorParam) {
                            const matchControl = this.getControl(validatorParam);
                            if (matchControl) {
                                if (!IsEqualValidator(fieldValue, matchControl.value)) {
                                    errors.push({ validator: validatorName, message: 'Values do not match' });
                                }
                            }
                            else {
                                console.error(`Form: Field ${validatorParam} not found`);
                            }
                        }
                        break;
                }
            }
        }
        return errors;
    }
    handleInputChange(name, value, type) {
        const field = this.getControl(name);
        field.value = value;
        // redundant mit handleOnBlur
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
    getFormGroupCssClass(fieldKey) {
        let result = this.getControl(fieldKey).config.formGroupClassName;
        return result;
    }
    render() {
        return (React.createElement("form", { ref: this.myForm }, this.state && this.state.controls && Object.keys(this.state.controls).map((fieldKey) => {
            return (React.createElement(FormGroup, { key: fieldKey, className: this.getFormGroupCssClass(fieldKey) },
                this.getControl(fieldKey).config.labelPosition !== 'behind' && this.getControl(fieldKey).type !== 'checkbox' &&
                    this.renderLabel(fieldKey, this.getControl(fieldKey).config.label, this.getControl(fieldKey).config.labelClassName),
                React.createElement(FormInput, { autoFocus: this.getControl(fieldKey).config.autoFocus, className: this.getControl(fieldKey).config.formControlClassName, isValid: !this.isInvalid(fieldKey), label: this.getControl(fieldKey).config.label, name: fieldKey, options: this.getControl(fieldKey).config.options, placeholder: this.getControl(fieldKey).config.placeholder, textareaOptions: this.getControl(fieldKey).config.textareaOptions, selectOptions: this.getControl(fieldKey).config.selectOptions, type: this.getControl(fieldKey).type, value: this.getControl(fieldKey).value, disabled: this.getControl(fieldKey).config.disabled, readonly: this.getControl(fieldKey).config.readonly, onChange: (name, value, type) => this.handleInputChange(name, value, type), onBlur: (e) => this.handleOnBlur(e), onKeyDown: (e) => this.handleOnKeyDown(e) }),
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

const DaySelect = (props) => {
    const { className, day = new Date().getDate(), month = new Date().getMonth(), year = new Date().getFullYear(), disabled, id, name, onChange } = props;
    useEffect(() => {
        init();
    }, [month, year]);
    const init = () => {
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        const newDays = [];
        for (let i = 1; i <= daysInMonth; i++) {
            newDays.push({ value: i.toString(), label: i.toString() });
        }
        setDayOptions(newDays);
    };
    const [value, setValue] = useState(day);
    const [dayOptions, setDayOptions] = useState();
    const getCssClasses = () => {
        const cssClasses = [];
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e) => {
        setValue(e);
        onChange && onChange(e);
    };
    return (React.createElement(Select, { id: id, name: name, className: getCssClasses(), options: dayOptions, onChange: (e) => handleOnChange(parseInt(e)), disabled: disabled, value: value.toString() }));
};

const MonthSelect = (props) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const { className, value = new Date().getMonth(), id, name, disabled, onChange } = props;
    const [newValue, setNewValue] = useState(value);
    const [monthOptions, setMonthOptions] = useState();
    useEffect(() => {
        setMonthOptions(months.map((m, index) => ({ value: index.toString(), label: m })));
    }, []);
    const getCssClasses = () => {
        const cssClasses = [];
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e) => {
        setNewValue(e);
        onChange && onChange(e);
    };
    return (React.createElement(Select, { id: id, name: name, className: getCssClasses(), options: monthOptions, onChange: (e) => handleOnChange(parseInt(e)), disabled: disabled, value: newValue.toString() }));
};

const YearSelect = (props) => {
    const { className = '', from = 1970, to = new Date().getFullYear().toString(), value = new Date().getFullYear().toString(), id, name, disabled, onChange } = props;
    const [newValue, setNewValue] = useState(value.toString());
    const [years, setYears] = useState();
    useEffect(() => {
        const newYears = [];
        for (let i = from; i <= to; i++) {
            newYears.push({ value: i.toString(), label: i.toString() });
        }
        setYears(newYears.reverse());
    }, [from, to]);
    const getCssClasses = () => {
        const cssClasses = [];
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e) => {
        setNewValue(e);
        onChange && onChange(parseInt(e));
    };
    return (React.createElement(Select, { id: id, name: name, className: getCssClasses(), options: years, onChange: handleOnChange, disabled: disabled, value: newValue }));
};

var DATEMODE;
(function (DATEMODE) {
    DATEMODE[DATEMODE["YEAR"] = 0] = "YEAR";
    DATEMODE[DATEMODE["MONTH"] = 1] = "MONTH";
    DATEMODE[DATEMODE["DAY"] = 2] = "DAY";
})(DATEMODE || (DATEMODE = {}));
const DateSelect = (props) => {
    const { className = '', value = new Date(), disabled, yearConfig, onChange } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('form-row');
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const [currDate, setCurrDate] = useState(value);
    const handleOnChange = (e, mode) => {
        const currYear = mode === DATEMODE.YEAR ? e : currDate.getFullYear();
        const currMonth = mode === DATEMODE.MONTH ? e : currDate.getMonth();
        const currday = mode === DATEMODE.DAY ? e : currDate.getDate();
        const newDate = new Date(currYear, currMonth, currday);
        setCurrDate(newDate);
        onChange && onChange(newDate);
    };
    return (React.createElement("div", { className: getCssClasses() },
        React.createElement(FormGroup, { className: "col-4" },
            React.createElement(YearSelect, { className: "form-control", value: currDate.getFullYear(), disabled: disabled, from: yearConfig === null || yearConfig === void 0 ? void 0 : yearConfig.from, to: yearConfig === null || yearConfig === void 0 ? void 0 : yearConfig.to, onChange: e => handleOnChange(e, DATEMODE.YEAR) })),
        React.createElement(FormGroup, { className: "col-4" },
            React.createElement(MonthSelect, { className: "form-control", value: currDate.getMonth(), disabled: disabled, onChange: e => handleOnChange(e, DATEMODE.MONTH) })),
        React.createElement(FormGroup, { className: "col-4" },
            React.createElement(DaySelect, { className: "form-control", day: currDate.getDate(), month: currDate.getMonth(), year: currDate.getFullYear(), disabled: disabled, onChange: e => handleOnChange(e, DATEMODE.DAY) }))));
};
/*
* result = { year, month, day, dayOfWeek, weekNumber }
*/
// const getWeekNumber = () => {
// 	var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
// 	var dayNum = d.getUTCDay() || 7;
// 	d.setUTCDate(d.getUTCDate() + 4 - dayNum);
// 	var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
// 	return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
// };

var css_248z$a = ".Drawer-module_drawer__36R2P {\n  height: 100%;\n  z-index: 1101;\n  bottom: 0;\n  position: fixed;\n  background: white;\n  min-width: 280px;\n  overflow-y: auto; }\n  .Drawer-module_drawer__36R2P.Drawer-module_permanent__AW5Df {\n    position: inherit;\n    z-index: 0; }\n  .Drawer-module_drawer__36R2P.Drawer-module_left__1KKcY {\n    order: 0; }\n  .Drawer-module_drawer__36R2P.Drawer-module_right__2gESb {\n    order: 2; }\n\n.Drawer-module_drawerOpen__euFdW {\n  overflow: hidden; }\n";
var styles$a = {"drawer":"Drawer-module_drawer__36R2P","permanent":"Drawer-module_permanent__AW5Df","left":"Drawer-module_left__1KKcY","right":"Drawer-module_right__2gESb","drawerOpen":"Drawer-module_drawerOpen__euFdW"};
styleInject(css_248z$a);

const Drawer = (props) => {
    const { children, className = '', position = 'left', permanent = false, target = document.body, onClickBackdrop } = props;
    useEffect(() => {
        document.body.classList.add(styles$a.drawerOpen);
        return () => {
            document.body.classList.remove(styles$a.drawerOpen);
        };
    }, []);
    const handleClickBackdrop = () => {
        onClickBackdrop && onClickBackdrop();
    };
    return createPortal(React.createElement(Fragment, null,
        React.createElement(DrawerContent, { className: className, position: position, permanent: permanent }, children),
        !permanent && React.createElement(Backdrop, { onClick: handleClickBackdrop })), target);
};
const DrawerContent = (props) => {
    const { children, className = '', position = 'left', permanent = false } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$a.drawer);
        className && cssClasses.push(className);
        !!permanent && cssClasses.push(styles$a['permanent']);
        position === 'left' ? cssClasses.push(styles$a['left']) : cssClasses.push(styles$a['right']);
        return cssClasses.filter(css => css).join(' ');
    };
    const positionStyles = {
        left: { left: '0px' },
        right: { right: '0px' },
    };
    const getStyles = () => {
        return !permanent ? positionStyles[position] : undefined;
    };
    return React.createElement("div", { className: getCssClasses(), style: getStyles() }, children);
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
        className && cssClasses.push(className);
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
                    React.createElement(Backdrop, { isTransparent: true, onClick: () => setIsShow(false) })))));
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

const ExpansionPanelHeader = (props) => {
    const { children, isExpanded, onClick } = props;
    const handleClick = (e) => {
        e.stopPropagation();
        onClick && onClick(e);
    };
    return (React.createElement("div", { className: "expansion-panel-header d-flex align-items-center", onClick: handleClick },
        children,
        React.createElement("span", { className: "ml-auto text-muted" },
            React.createElement(Icon, null, isExpanded ? React.createElement(ChevronUpSolidIcon, null) : React.createElement(ChevronDownSolidIcon, null)))));
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

var css_248z$9 = ".FloatingActionButton-module_fab__3GwiH {\n  box-shadow: var(--shadow); }\n  .FloatingActionButton-module_fab__3GwiH.FloatingActionButton-module_fixed__17qrv {\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    z-index: 1000; }\n";
var styles$9 = {"fab":"FloatingActionButton-module_fab__3GwiH","fixed":"FloatingActionButton-module_fixed__17qrv"};
styleInject(css_248z$9);

const FloatingActionButton = (props) => {
    const { className = '', icon, color = COLOR.primary, fixed, size = SIZE.lg, isActive, disabled, onClick } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$9.fab);
        fixed && cssClasses.push(styles$9['fixed']);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClick = (e) => {
        e.stopPropagation();
        onClick && onClick(e);
    };
    return (React.createElement(IconButton, { className: getCssClasses(), color: color, size: size, isActive: isActive, disabled: disabled, icon: icon, variant: VARIANT.contained, onClick: handleClick }));
};

const Column = (props) => {
    const { children, className = '', xs, sm, md, lg, xl } = props, rest = __rest(props, ["children", "className", "xs", "sm", "md", "lg", "xl"]);
    const getCssClasses = () => {
        const cssClasses = [];
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
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

const Row = (props) => {
    const { children, className = '' } = props, rest = __rest(props, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('row');
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest), children));
};

var css_248z$8 = ".LoadingIndicator-module_loadingIndicatorContainer__3e1-3 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%; }\n\n.LoadingIndicator-module_loadingIndicator__tvp5i {\n  animation-name: LoadingIndicator-module_spinAnimation__PKRNn;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  width: 24px;\n  height: 24px; }\n\n@keyframes LoadingIndicator-module_spinAnimation__PKRNn {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n";
var styles$8 = {"loadingIndicatorContainer":"LoadingIndicator-module_loadingIndicatorContainer__3e1-3","loadingIndicator":"LoadingIndicator-module_loadingIndicator__tvp5i","spinAnimation":"LoadingIndicator-module_spinAnimation__PKRNn"};
styleInject(css_248z$8);

const LoadingIndicator = () => {
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$8.loadingIndicator);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", { className: getCssClasses() },
        React.createElement(SpinnerSolidIcon, null)));
};

const LoadingIndicatorContainer = ({ children }) => {
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$8.loadingIndicatorContainer);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", { className: getCssClasses() }, children));
};

class LoadingIndicatorService {
    show() {
        return new Promise((resolve, reject) => {
            if (this.container) {
                this.hide();
            }
            this.container = document.createElement('div');
            this.container.classList.add('snackbar-container');
            document.body.appendChild(this.container);
            render(React.createElement(LoadingIndicatorContainer, null,
                React.createElement(LoadingIndicator, null)), this.container);
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
const loadingIndicatorService = new LoadingIndicatorService();

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

var css_248z$7 = ".Modal-module_modal__1NdMJ.Modal-module_fullscreen__3R-sM {\n  width: 100% !important;\n  height: 100% !important;\n  margin: 0;\n  padding: 0; }\n  .Modal-module_modal__1NdMJ.Modal-module_fullscreen__3R-sM .Modal-module_modalContent__E2kaP {\n    height: auto;\n    min-height: 100%;\n    border-radius: 0; }\n  @media (min-width: 320px) {\n    .Modal-module_modal__1NdMJ.Modal-module_fullscreen__3R-sM {\n      max-width: 100%; } }\n";
var styles$7 = {"modal":"Modal-module_modal__1NdMJ","fullscreen":"Modal-module_fullscreen__3R-sM","modalContent":"Modal-module_modalContent__E2kaP"};
styleInject(css_248z$7);

const Modal = (props) => {
    const { className = '', fullScreen, children, header, footer, onHeaderCloseClick, onBackdropClick, isDismissable = false } = props;
    const getCssClass = () => {
        const result = [];
        result.push('modal-dialog modal-dialog-centered');
        result.push(styles$7.modal);
        !!fullScreen && result.push(styles$7['fullscreen']);
        result.push(className);
        return result.filter(r => r).join(' ');
    };
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
            React.createElement("div", { className: getCssClass(), role: "document" },
                React.createElement("div", { className: "modal-content " + (!!fullScreen && styles$7['modalContent']) },
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
    { label: 'Cancel', type: MODALBUTTONTYPE.CANCEL, color: COLOR.secondary, variant: VARIANT.text, focus: true },
    { label: 'Ok', type: MODALBUTTONTYPE.OK, variant: VARIANT.contained },
], fullScreen = false }) => {
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
    return (React.createElement(Modal, { fullScreen: fullScreen, header: title, onHeaderCloseClick: onCancel, isDismissable: isDismissable, footer: React.createElement(Fragment, null, buttons.map((button, index) => (React.createElement(Button, { key: index, variant: button.variant, color: button.color, autoFocus: button.autoFocus, onClick: () => handleClickButton(button) }, button.label)))) },
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
                render(React.createElement(GlobalModal, { fullScreen: options && options.fullScreen, title: title, description: description, formControls: options && options.formControls, onCancel: handleCancel, onOk: handleOk, isDismissable: options && options.isDismissable, buttons: options && options.buttons }), this.container);
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

const NumberSelect = (props) => {
    const { className, value = 0, from = 0, to = 100, id, name, disabled = false, onChange } = props;
    const [newValue, setNewValue] = useState(0);
    const [numberOptions, setNumberOptions] = useState();
    useEffect(() => {
        setNewValue(value);
    }, [value]);
    useEffect(() => {
        const options = [];
        for (let i = from; i <= to; i++) {
            options.push({ value: i.toString(), label: i.toString() });
        }
        setNumberOptions(options);
    }, [from, to]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('form-control');
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e) => {
        setNewValue(e);
        onChange && onChange(e);
    };
    return (React.createElement(Select, { id: id, name: name, className: getCssClasses(), options: numberOptions, onChange: (e) => handleOnChange(parseInt(e)), disabled: disabled, value: newValue.toString() }));
};

class SidebarItemModel {
    constructor(id, label, path, icon, isActive, items, isCollapsible = false, isCollapsed = false) {
        this.id = id;
        this.label = label;
        this.path = path;
        this.icon = icon;
        this.isActive = isActive;
        this.items = items;
        this.isCollapsible = isCollapsible;
        this.isCollapsed = isCollapsed;
    }
}

const Sidebar = (props) => {
    const { items, currentUrl, onItemClicked } = props;
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        if (items && items.length > 0) {
            initMenuItems();
        }
    }, []);
    useEffect(() => { initMenuItems(); }, [currentUrl]);
    const initMenuItems = () => {
        const newItems = items.map(item => new SidebarItemModel(item.id, item.label, item.path, item.icon, isMenuItemActive(item.path), item.items && item.items.map(subItem => new SidebarItemModel(subItem.id, subItem.label, subItem.path, subItem.icon, isMenuItemActive(`${item.path}/${subItem.path}`))), item.isCollapsible, item.isCollapsed));
        setMenuItems(newItems);
    };
    const isMenuItemActive = (path) => {
        return path === currentUrl || ("/" + path) === currentUrl;
    };
    const navigate = (e, path) => {
        e.stopPropagation();
        e.preventDefault();
        onItemClicked(path);
    };
    const handleClickItem = (item, e) => {
        if (item.items && item.items.length > 0 && item.isCollapsible) {
            const newMenuItems = menuItems.map((menuItem) => {
                if (item.id === menuItem.id) {
                    const updatedItem = Object.assign(Object.assign({}, menuItem), { isCollapsed: !menuItem.isCollapsed });
                    return updatedItem;
                }
                return menuItem;
            });
            setMenuItems(newMenuItems);
        }
        else {
            navigate(e, `/${item.path}`);
        }
    };
    const handleClickSubItem = (itemPath, subItemPath, e) => {
        navigate(e, `/${itemPath}/${subItemPath}`);
    };
    return (React.createElement("nav", { className: "sidebar" },
        React.createElement(List, null, menuItems.map(item => (React.createElement(React.Fragment, { key: item.id },
            React.createElement(ListItem, { onClick: (e) => handleClickItem(item, e) },
                React.createElement(ListItemText, { primary: React.createElement(React.Fragment, null,
                        item.label,
                        item.items && item.items.length > 0 && (React.createElement("small", { className: "ml-2" },
                            "(",
                            item.items.length,
                            ")"))) }),
                item.items && item.items.length > 0 &&
                    React.createElement(ListItemAction, null, item.isCollapsed ? React.createElement(ChevronDownSolidIcon, null) : React.createElement(ChevronUpSolidIcon, null))),
            !item.isCollapsed && item.items && item.items.length > 0 && (React.createElement(List, { className: "list-level-1", key: `${item.id}-sub` }, item.items.map(subItem => (React.createElement(ListItem, { className: "list-item-level-1", key: subItem.id, onClick: (e) => handleClickSubItem(item.path, subItem.path, e) }, subItem.label)))))))))));
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

var css_248z$6 = ".SpeedDialActions-module_speedDialActions__zLEps {\n  margin-bottom: -32px;\n  flex-direction: column-reverse;\n  padding-bottom: 48px;\n  display: flex;\n  pointer-events: auto; }\n";
var styles$6 = {"speedDialActions":"SpeedDialActions-module_speedDialActions__zLEps"};
styleInject(css_248z$6);

const SpeedDialActions = (props) => {
    const { children } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$6.speedDialActions);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("div", { className: getCssClasses() }, children));
};

var css_248z$5 = ".SpeedDial-module_speedDial__CQ5x2 {\n  position: absolute;\n  flex-direction: column-reverse;\n  display: flex;\n  z-index: 1050;\n  align-items: center;\n  right: 16px;\n  bottom: 16px;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n";
var styles$5 = {"speedDial":"SpeedDial-module_speedDial__CQ5x2"};
styleInject(css_248z$5);

const SpeedDial = (props) => {
    const { children, className, open, onOpen, onClose } = props, rest = __rest(props, ["children", "className", "open", "onOpen", "onClose"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$5.speedDial);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClick = (e) => {
        if (open)
            onClose && onClose(e);
        else
            onOpen && onOpen(e);
    };
    return (React.createElement("div", Object.assign({ className: getCssClasses() }, rest),
        React.createElement("div", { style: { 'transform': open ? 'rotate(45deg)' : undefined } },
            React.createElement(FloatingActionButton, { icon: React.createElement(PlusSolidIcon, null), onClick: handleClick })),
        open &&
            React.createElement(SpeedDialActions, null, children)));
};

var css_248z$4 = ".SpeedDialAction-module_speedDialAction__qmExs + .SpeedDialAction-module_speedDialAction__qmExs {\n  margin-bottom: 10px; }\n";
var styles$4 = {"speedDialAction":"SpeedDialAction-module_speedDialAction__qmExs"};
styleInject(css_248z$4);

const SpeedDialAction = (props) => {
    const { icon, onClick, className } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$4.speedDialAction);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement(IconButton, { className: getCssClasses(), icon: icon, color: COLOR.light, shadow: true, onClick: onClick }));
};

const SpeedDialIcon = (props) => {
    const { children, className } = props, rest = __rest(props, ["children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement(Icon, Object.assign({ className: getCssClasses() }, rest), children));
};

const Table = (props) => {
    const { children, className = '', bordered, striped, hover, responsive = false } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('table');
        bordered && cssClasses.push('table-bordered');
        striped && cssClasses.push('table-striped');
        hover && cssClasses.push('table-hover');
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement(ConditionalWrapper, { condition: responsive, wrapper: children => React.createElement("div", { className: "table-responsive" }, children) },
        React.createElement("table", { className: getCssClasses() }, children)));
};

var css_248z$3 = ".TabIndicator-module_tabIndicator__wj9Qm {\n  bottom: 0;\n  height: 2px;\n  position: absolute;\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n  .TabIndicator-module_tabIndicator__wj9Qm.TabIndicator-module_primary__2Lc8c {\n    background-color: var(--primary); }\n  .TabIndicator-module_tabIndicator__wj9Qm.TabIndicator-module_accent__37h0D {\n    background-color: var(--accent); }\n";
var styles$3 = {"tabIndicator":"TabIndicator-module_tabIndicator__wj9Qm","primary":"TabIndicator-module_primary__2Lc8c","accent":"TabIndicator-module_accent__37h0D"};
styleInject(css_248z$3);

const TabIndicator = (props) => {
    const { color = COLOR.accent, width, amount, index } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$3.tabIndicator);
        cssClasses.push(styles$3[color]);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement("span", { className: getCssClasses(), style: {
            width: width,
            left: `calc(calc(100% / ${amount}) * ${index})`
        } }));
};

var css_248z$2 = ".Tabs-module_tabs__2azkC {\n  display: flex;\n  position: relative; }\n";
var styles$2 = {"tabs":"Tabs-module_tabs__2azkC"};
styleInject(css_248z$2);

const Tabs = (props) => {
    const { children, className = '', fixed, indicatorColor, onChange, value } = props;
    const [selectedValue, setSelectedValue] = useState(value);
    const [selectedIndex, setSelectedIndex] = useState();
    useEffect(() => {
        React.Children.toArray(children).forEach((child, index) => {
            if (child.props.value === value) {
                setSelectedIndex(index);
            }
        });
    }, [children, value]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$2.tabs);
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleClickTab = (event, newValue, index) => {
        setSelectedValue(newValue);
        setSelectedIndex(index);
        onChange && onChange(event, newValue);
    };
    const renderTabs = (child, index) => {
        return React.isValidElement(child) && cloneElement(child, {
            key: child.props.value,
            isActive: child.props.value === selectedValue,
            fixed: fixed,
            onClick: (event, newValue) => handleClickTab(event, newValue, index),
        });
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: getCssClasses() },
            children && React.Children.toArray(children).map((child, index) => renderTabs(child, index)),
            children &&
                React.createElement(TabIndicator, { color: indicatorColor, width: (100 / React.Children.toArray(children).length) + '%', index: selectedIndex, amount: React.Children.toArray(children).length }))));
};

var css_248z$1 = ".Tab-module_tab__31Fjd {\n  padding: 6px 12px;\n  overflow: hidden;\n  position: relative;\n  font-size: 0.875rem;\n  min-width: 72px;\n  box-sizing: border-box;\n  min-height: 48px;\n  text-align: center;\n  font-weight: 500;\n  line-height: 1.75;\n  white-space: normal;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  border-radius: 0;\n  flex-grow: 1;\n  flex-basis: 0; }\n";
var styles$1 = {"tab":"Tab-module_tab__31Fjd"};
styleInject(css_248z$1);

const Tab = (props) => {
    const { label, className, isActive, fixed, disabled, value, onClick } = props;
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push(styles$1.tab);
        if (isActive) {
            cssClasses.push(`show active`);
        }
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return (React.createElement(Button, { className: getCssClasses(), onClick: (event) => onClick && onClick(event, value), isActive: isActive, disabled: disabled, block: fixed }, label));
};

const TabPanel = (props) => {
    const { children, className, value, index } = props, rest = __rest(props, ["children", "className", "value", "index"]);
    return (React.createElement("div", Object.assign({ role: "tabpanel", hidden: value !== index, id: `tabpanel-${index}`, "aria-labelledby": `wrapped-tab-${index}` }, rest), value === index && children));
};

var css_248z = ".Tooltip-module_tooltipContainer__3SPVX {\n  display: inline; }\n\n.Tooltip-module_tooltip__1AML3 {\n  background-color: #333;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 4px;\n  font-size: 13px;\n  position: absolute;\n  left: -1000000px; }\n  .Tooltip-module_tooltip__1AML3 #Tooltip-module_arrow__2c3YL,\n  .Tooltip-module_tooltip__1AML3 #Tooltip-module_arrow__2c3YL::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: -1; }\n  .Tooltip-module_tooltip__1AML3 #Tooltip-module_arrow__2c3YL::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: #333; }\n  .Tooltip-module_tooltip__1AML3[data-popper-placement^=\"top\"] > #Tooltip-module_arrow__2c3YL {\n    bottom: -4px; }\n  .Tooltip-module_tooltip__1AML3[data-popper-placement^=\"bottom\"] > #Tooltip-module_arrow__2c3YL {\n    top: -4px; }\n  .Tooltip-module_tooltip__1AML3[data-popper-placement^=\"left\"] > #Tooltip-module_arrow__2c3YL {\n    right: -4px; }\n  .Tooltip-module_tooltip__1AML3[data-popper-placement^=\"right\"] > #Tooltip-module_arrow__2c3YL {\n    left: -4px; }\n";
var styles = {"tooltipContainer":"Tooltip-module_tooltipContainer__3SPVX","tooltip":"Tooltip-module_tooltip__1AML3","arrow":"Tooltip-module_arrow__2c3YL"};
styleInject(css_248z);

const Tooltip = (props) => {
    const { children, text, placement = 'bottom' } = props;
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
                        options: { offset: [0, 8] }
                    },
                ]
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
        React.createElement("div", { className: styles.tooltipContainer, ref: refChild, id: "tooltip-container" }, cloneElement(children, {
            onMouseOver: handleMouseOver,
            onMouseLeave: handleMouseLeave,
        })),
        show &&
            React.createElement("div", { className: styles.tooltip, ref: refTooltip, id: "tooltip" },
                text,
                React.createElement("div", { id: "arrow", "data-popper-arrow": true }))));
};

const HourSelect = (props) => {
    const { className, value = 0, id, name, disabled, onChange } = props;
    const [newValue, setNewValue] = useState(value);
    const [hourOptions, setHourOptions] = useState();
    useEffect(() => {
        const newHourOptions = [];
        for (let i = 0; i < 24; i++) {
            newHourOptions.push({ value: i.toString(), label: i.toString() });
        }
        setHourOptions(newHourOptions);
    }, []);
    const getCssClasses = () => {
        const cssClasses = [];
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e) => {
        setNewValue(e);
        onChange && onChange(e);
    };
    return (React.createElement(Select, { id: id, name: name, className: getCssClasses(), options: hourOptions, onChange: (e) => handleOnChange(parseInt(e)), disabled: disabled, value: newValue.toString() }));
};

const MilliSecondSelect = (props) => {
    const { className, value = 0, steps = 100, id, name, disabled, onChange } = props;
    const [newValue, setNewValue] = useState(value);
    const [milliSecondOptions, setMilliSecondOptions] = useState();
    useEffect(() => {
        const newMilliSecondOptions = [];
        for (let i = 0; i < 1000; i += steps) {
            newMilliSecondOptions.push({ value: i.toString(), label: i.toString() });
        }
        setMilliSecondOptions(newMilliSecondOptions);
    }, []);
    const getCssClasses = () => {
        const cssClasses = [];
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e) => {
        setNewValue(e);
        onChange && onChange(e);
    };
    return (React.createElement(Select, { id: id, name: name, className: getCssClasses(), options: milliSecondOptions, onChange: (e) => handleOnChange(parseInt(e)), disabled: disabled, value: newValue.toString() }));
};

const MinuteSelect = (props) => {
    const { className, value = 0, id, name, disabled, onChange } = props;
    const [newValue, setNewValue] = useState(value);
    const [minuteOptions, setMinuteOptions] = useState();
    useEffect(() => {
        const newMinuteOptions = [];
        for (let i = 0; i < 60; i++) {
            newMinuteOptions.push({ value: i.toString(), label: i.toString() });
        }
        setMinuteOptions(newMinuteOptions);
    }, []);
    const getCssClasses = () => {
        const cssClasses = [];
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e) => {
        setNewValue(e);
        onChange && onChange(e);
    };
    return (React.createElement(Select, { id: id, name: name, className: getCssClasses(), options: minuteOptions, onChange: (e) => handleOnChange(parseInt(e)), disabled: disabled, value: newValue.toString() }));
};

const SecondSelect = (props) => {
    const { className, value = 0, id, name, disabled, onChange } = props;
    const [newValue, setNewValue] = useState(value);
    const [secondOptions, setSecondOptions] = useState();
    useEffect(() => {
        const newSecondOptions = [];
        for (let i = 0; i < 60; i++) {
            newSecondOptions.push({ value: i.toString(), label: i.toString() });
        }
        setSecondOptions(newSecondOptions);
    }, []);
    const getCssClasses = () => {
        const cssClasses = [];
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e) => {
        setNewValue(e);
        onChange && onChange(e);
    };
    return (React.createElement(Select, { id: id, name: name, className: getCssClasses(), options: secondOptions, onChange: (e) => handleOnChange(parseInt(e)), disabled: disabled, value: newValue.toString() }));
};

var TIMEMODE;
(function (TIMEMODE) {
    TIMEMODE[TIMEMODE["HOUR"] = 0] = "HOUR";
    TIMEMODE[TIMEMODE["MINUTE"] = 1] = "MINUTE";
    TIMEMODE[TIMEMODE["SECONDS"] = 2] = "SECONDS";
    TIMEMODE[TIMEMODE["MILLISECONDS"] = 3] = "MILLISECONDS";
})(TIMEMODE || (TIMEMODE = {}));
const TimeSelect = (props) => {
    const { className, value = new Date(), disabled, showHours = true, showMinutes = true, showSeconds = false, showMilliSeconds = false, onChange } = props;
    const [currDate, setCurrDate] = useState(value);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('form-row');
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    const handleOnChange = (e, mode) => {
        const currYear = currDate.getFullYear();
        const currMonth = currDate.getMonth();
        const currday = currDate.getDate();
        const currHour = mode === TIMEMODE.HOUR ? e : currDate.getHours();
        const currMinute = mode === TIMEMODE.MINUTE ? e : currDate.getMinutes();
        const currSeconds = mode === TIMEMODE.SECONDS ? e : currDate.getSeconds();
        const currMilliSeconds = mode === TIMEMODE.MILLISECONDS ? e : currDate.getMilliseconds();
        const newDate = new Date(currYear, currMonth, currday, currHour, currMinute, currSeconds, currMilliSeconds);
        setCurrDate(newDate);
        onChange && onChange(newDate);
    };
    return (React.createElement("div", { className: getCssClasses() },
        showHours &&
            React.createElement(FormGroup, { className: "col" },
                React.createElement(FormLabel, null, "Hours"),
                React.createElement(HourSelect, { className: "form-control", value: currDate.getHours(), disabled: disabled, onChange: e => handleOnChange(e, TIMEMODE.HOUR) })),
        showMinutes &&
            React.createElement(FormGroup, { className: "col" },
                React.createElement(FormLabel, null, "Minutes"),
                React.createElement(MinuteSelect, { className: "form-control", value: currDate.getMinutes(), disabled: disabled, onChange: e => handleOnChange(e, TIMEMODE.MINUTE) })),
        showSeconds &&
            React.createElement(FormGroup, { className: "col" },
                React.createElement(FormLabel, null, "Seconds"),
                React.createElement(SecondSelect, { className: "form-control", value: currDate.getSeconds(), disabled: disabled, onChange: e => handleOnChange(e, TIMEMODE.SECONDS) })),
        showMilliSeconds &&
            React.createElement(FormGroup, { className: "col" },
                React.createElement(FormLabel, null, "Milliseconds"),
                React.createElement(MilliSecondSelect, { className: "form-control", value: currDate.getMilliseconds(), disabled: disabled, onChange: e => handleOnChange(e, TIMEMODE.MILLISECONDS) }))));
};

// TODO props
const TreeNode = (props) => {
    const { id, name, level, parentId, hasChildren, isExpanded, isSelected, onClick, onClickSelect } = props;
    return (React.createElement("li", { className: "tree-node", style: { paddingLeft: `${(48 * level) + (hasChildren ? 0 : 1) * 48}px` } },
        hasChildren &&
            React.createElement(IconButton, { onClick: () => onClick(id), icon: !isExpanded ? React.createElement(ChevronRightSolidIcon, null) : React.createElement(ChevronDownSolidIcon, null) }),
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

const Wrapper = (props) => {
    const { as = 'span', children, className } = props, rest = __rest(props, ["as", "children", "className"]);
    const getCssClasses = () => {
        const cssClasses = [];
        cssClasses.push('gutter-bottom');
        className && cssClasses.push(className);
        return cssClasses.filter(css => css).join(' ');
    };
    return React.createElement(as, Object.assign(Object.assign({}, rest), { className: getCssClasses() }), children);
};
const Typography = (_a) => {
    var { children, as = 'span' } = _a, rest = __rest(_a, ["children", "as"]);
    return (React.createElement(Wrapper, Object.assign({ as: as }, rest), children));
};

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export { AppBar, AppBarTitle, Backdrop, Badge, Breadcrumb, Button, ButtonGroup, COLOR, Card, CardBody, CardFooter, CardImage, CardSubtitle, CardText, CardTitle, CaretDownSolidIcon, CheckSquareRegularIcon, Checkbox, ChevronDownSolidIcon, ChevronRightSolidIcon, ChevronUpSolidIcon, Chip, Column, ConditionalWrapper, DATEMODE, DateSelect, DaySelect, Drawer, DropDown, DropDownDivider, DropDownItem, DropDownMenu, DropDownToggle, EmailValidator, ExpansionPanel, ExpansionPanelContent, ExpansionPanelHeader, FileInput, FloatingActionButton, Form, FormControl, FormError, FormGroup, FormHint, FormInput, FormLabel, GlobalModal, HomeSolidIcon, HourSelect, Icon, IconButton, IsEmptyValidator, IsEqualValidator, List, ListItem, ListItemAction, ListItemAvatar, ListItemIcon, ListItemText, LoadingIndicator, LoadingIndicatorContainer, MODALBUTTONTYPE, MODALTYPE, MilliSecondSelect, MinuteSelect, Modal, ModalBody, ModalFooter, ModalHeader, MonthSelect, NumberSelect, POSITION, PlusSolidIcon, Row, SIZE, SecondSelect, Select, Sidebar, Snackbar, SpeedDial, SpeedDialAction, SpeedDialIcon, SpinnerSolidIcon, SquareRegularIcon, TIMEMODE, Tab, TabPanel, Table, Tabs, Textarea, TimeSelect, TimesSolidIcon, Tooltip, TreeView, Typography, VARIANT, YearSelect, loadingIndicatorService, modalService, snackbarService, useWindowSize };
//# sourceMappingURL=index.js.map
