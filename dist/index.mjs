var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/lib/ui/Button.tsx
import React from "react";
var Button = (_a) => {
  var _b = _a, { children, variant = "primary", className } = _b, props = __objRest(_b, ["children", "variant", "className"]);
  const base = "px-4 py-2 font-semibold rounded-xl transition";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white border border-black text-black hover:bg-gray-100"
  };
  return /* @__PURE__ */ React.createElement("button", __spreadValues({ className: `${base} ${variants[variant]} ${className}` }, props), children);
};

// src/lib/ui/Card.tsx
import React2 from "react";
var Card = ({ title, description, children }) => /* @__PURE__ */ React2.createElement("div", { className: "rounded-xl border p-6 shadow hover:shadow-lg transition" }, /* @__PURE__ */ React2.createElement("h2", { className: "text-xl font-bold mb-2" }, title), description && /* @__PURE__ */ React2.createElement("p", { className: "text-gray-500" }, description), /* @__PURE__ */ React2.createElement("div", { className: "mt-4" }, children));
export {
  Button,
  Card
};
