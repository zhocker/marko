"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components/legacy"),
    marko_registerComponent = marko_components.rc,
    marko_defineWidget = marko_components.w,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/bind-widget/widget", function() {
      return marko_defineWidget(require("./widget"));
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, widget) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    "></div>");
}

marko_template._ = marko_components.r(render, {
    split: true,
    type: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./widget"
        },
      {
          type: "require",
          path: "marko/components"
        }
    ]
  };
