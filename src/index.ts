export class Tag {
  public singleTags: string[];

  constructor(
    public tag: string,
    public options?: object,
    public text?: string
  ) {
    this.singleTags = ["area", "br", "col", "hr", "img", "input", "link"];
  }

  optionsToString(opt: object) {
    return Object.keys(opt)
      .map((key) => [key, `"${opt[key]}"`])
      .map((item) => item.join("="))
      .join(" ");
  }

  toString() {
    if (this.singleTags.includes(this.tag)) {
      //одинарные теги
      if (this.options !== undefined) {
        let str = this.optionsToString(this.options);
        return `<${this.tag}${str !== "" ? " " + str : ""}>`;
      } else {
        return `<${this.tag}>`;
      }
    } else {
      //парные теги
      if (this.options !== undefined) {
        let str = this.optionsToString(this.options);
        return `<${this.tag}${str !== "" ? " " + str : ""}>${
          this.text !== undefined ? this.text : ""
        }</${this.tag}>`;
      } else {
        return `<${this.tag}></${this.tag}>`;
      }
    }
  }
}

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
