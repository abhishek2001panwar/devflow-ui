"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Card: () => Card
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = __toESM(require("react"));
var Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "left",
  isLoading = false,
  disabled = false,
  ...props
}) => {
  const base = "flex items-center justify-center font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-black",
    secondary: "bg-transparent border-2 border-black text-black hover:bg-black/5 hover:-translate-y-0.5 focus:ring-black/30",
    gradient: "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-purple-500"
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  const disabledClass = disabled ? "opacity-60 cursor-not-allowed transform-none" : "";
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: `${base} ${variants[variant]} ${sizes[size]} ${disabledClass} ${className || ""}`,
      disabled: disabled || isLoading,
      ...props
    },
    isLoading && /* @__PURE__ */ import_react.default.createElement("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react.default.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ import_react.default.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })),
    icon && iconPosition === "left" && !isLoading && /* @__PURE__ */ import_react.default.createElement("span", { className: "mr-2" }, icon),
    /* @__PURE__ */ import_react.default.createElement("span", null, children),
    icon && iconPosition === "right" && /* @__PURE__ */ import_react.default.createElement("span", { className: "ml-2" }, icon)
  );
};

// src/components/Card.tsx
var import_image = __toESM(require("next/image"));
var import_react2 = __toESM(require("react"));
var Card = ({
  companyName,
  companyLogo,
  postedTime,
  jobTitle,
  jobTags = [],
  salary,
  location,
  primaryActionLabel = "Apply now",
  primaryActionHref = "#",
  isSaved = false,
  className = "",
  tagClassName = "",
  titleClassName = ""
}) => {
  const logoPlaceholder = companyLogo || "/api/placeholder/48/48";
  return /* @__PURE__ */ import_react2.default.createElement("div", { className: `bg-white rounded-md p-4 border border-gray-200 shadow-sm w-full max-w-md ${className}` }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex justify-between items-center mb-4" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "  rounded-full overflow-hidden flex-shrink-0 text-2xl" }, typeof logoPlaceholder === "string" ? /* @__PURE__ */ import_react2.default.createElement(
    import_image.default,
    {
      src: logoPlaceholder,
      alt: `${companyName} logo`,
      width: 48,
      height: 48,
      className: "object-cover w-full h-full"
    }
  ) : logoPlaceholder), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ml-3" }, /* @__PURE__ */ import_react2.default.createElement("h3", { className: "font-medium text-gray-900" }, companyName), postedTime && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-gray-500 text-sm" }, postedTime))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-gray-100 px-4 py-2 rounded-lg flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "mr-1" }, "Saved"), /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: isSaved ? "currentColor" : "none",
      stroke: "currentColor",
      className: "w-5 h-5"
    },
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
      }
    )
  ))), /* @__PURE__ */ import_react2.default.createElement("h2", { className: `text-2xl font-bold mb-4 text-gray-900 ${titleClassName}` }, jobTitle), jobTags.length > 0 && /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex flex-wrap gap-2 mb-6" }, jobTags.map((tag, index) => /* @__PURE__ */ import_react2.default.createElement(
    "span",
    {
      key: index,
      className: `bg-gray-100 px-3 py-1.5 rounded-lg text-gray-800 inline-block ${tagClassName}`
    },
    tag
  ))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "border-t border-gray-200 my-4" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex justify-between items-center mb-1" }, /* @__PURE__ */ import_react2.default.createElement("div", null, salary && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-lg font-bold text-gray-900" }, salary), location && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-gray-500" }, location)), primaryActionLabel && /* @__PURE__ */ import_react2.default.createElement("a", { href: primaryActionHref, className: "inline-block" }, /* @__PURE__ */ import_react2.default.createElement(
    Button,
    {
      variant: "gradient",
      size: "md",
      className: "font-medium"
    },
    primaryActionLabel
  ))));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card
});
