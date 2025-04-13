"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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

// src/lib/ui/index.ts
var ui_exports = {};
__export(ui_exports, {
  Button: () => Button,
  Card: () => Card
});
module.exports = __toCommonJS(ui_exports);

// src/lib/ui/Button.tsx
var import_react = __toESM(require("react"));
var Button = (_a) => {
  var _b = _a, { children, variant = "primary", className } = _b, props = __objRest(_b, ["children", "variant", "className"]);
  const base = "px-4 py-2 font-semibold rounded-xl transition";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white border border-black text-black hover:bg-gray-100"
  };
  return /* @__PURE__ */ import_react.default.createElement("button", __spreadValues({ className: `${base} ${variants[variant]} ${className}` }, props), children);
};

// src/lib/ui/Card.tsx
var import_react2 = __toESM(require("react"));
var Card = ({ title, description, children }) => /* @__PURE__ */ import_react2.default.createElement("div", { className: "rounded-xl border p-6 shadow hover:shadow-lg transition" }, /* @__PURE__ */ import_react2.default.createElement("h2", { className: "text-xl font-bold mb-2" }, title), description && /* @__PURE__ */ import_react2.default.createElement("p", { className: "text-gray-500" }, description), /* @__PURE__ */ import_react2.default.createElement("div", { className: "mt-4" }, children));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card
});
