"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tag = /** @class */ (function () {
    function Tag(tag, options, text) {
        this.tag = tag;
        this.options = options;
        this.text = text;
        this.singleTags = ["area", "br", "col", "hr", "img", "input", "link"];
    }
    Tag.prototype.optionsToString = function (opt) {
        return Object.keys(opt)
            .map(function (key) { return [key, "\"".concat(opt[key], "\"")]; })
            .map(function (item) { return item.join("="); })
            .join(" ");
    };
    Tag.prototype.toString = function () {
        if (this.singleTags.includes(this.tag)) {
            //одинарные теги
            if (this.options !== undefined) {
                var str = this.optionsToString(this.options);
                return "<".concat(this.tag).concat(str !== "" ? " " + str : "", ">");
            }
            else {
                return "<".concat(this.tag, ">");
            }
        }
        else {
            //парные теги
            if (this.options !== undefined) {
                var str = this.optionsToString(this.options);
                return "<".concat(this.tag).concat(str !== "" ? " " + str : "", ">").concat(this.text !== undefined ? this.text : "", "</").concat(this.tag, ">");
            }
            else {
                return "<".concat(this.tag, "></").concat(this.tag, ">");
            }
        }
    };
    return Tag;
}());
exports.default = Tag;
