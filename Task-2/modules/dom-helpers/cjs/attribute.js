"use strict";

exports.__esModule = true;
exports.default = attribute;

/**
 * Gets or sets an attribute of a given element.
 * 
 * @param node the element
 * @param attr the attribute to get or set
 * @param val the attribute value
 */
function attribute(node, attr, val) {
  if (node) {
    if (typeof val === 'undefined') {
      return node.getAttribute(attr);
    }

    if (!val && val !== '') {
      node.removeAttribute(attr);
    } else {
      node.setAttribute(attr, String(val));
    }
  }
}

module.exports = exports["default"];