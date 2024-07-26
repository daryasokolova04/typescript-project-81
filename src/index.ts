export default class Tag {
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
