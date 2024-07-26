var Tag = /** @class */ (function () {
  function Tag(tag, options, text) {
    this.tag = tag;
    this.options = options;
    this.text = text;
    this.singleTags = ["area", "br", "col", "hr", "img", "input", "link"];
  }
  Tag.prototype.optionsToString = function (opt) {
    return Object.keys(opt)
      .map(function (key) {
        return [key, '"'.concat(opt[key], '"')];
      })
      .map(function (item) {
        return item.join("=");
      })
      .join(" ");
  };
  Tag.prototype.toString = function () {
    if (this.singleTags.includes(this.tag)) {
      //одинарные теги
      if (this.options !== undefined) {
        var str = this.optionsToString(this.options);
        return "<".concat(this.tag).concat(str !== "" ? " " + str : "", ">");
      } else {
        return "<".concat(this.tag, ">");
      }
    } else {
      //парные теги
      if (this.options !== undefined) {
        var str = this.optionsToString(this.options);
        return "<"
          .concat(this.tag)
          .concat(str !== "" ? " " + str : "", ">")
          .concat(this.text !== undefined ? this.text : "", "</")
          .concat(this.tag, ">");
      } else {
        return "<".concat(this.tag, "></").concat(this.tag, ">");
      }
    }
  };
  return Tag;
})();
console.log(new Tag("br").toString());
// <br>
console.log(new Tag("img", { src: "path/to/image" }).toString());
// <img src="path/to/image">
console.log(new Tag("input", { type: "submit", value: "Save" }).toString());
// <input type="submit" value="Save">
// Для парных тегов надо придумать как лучше
console.log(new Tag("label", {}, "Email").toString());
// <label>Email</label>
console.log(new Tag("label", { for: "email" }, "Email").toString());
// <label for="email">Email</label>
console.log(new Tag("div").toString());
// <div></div>
