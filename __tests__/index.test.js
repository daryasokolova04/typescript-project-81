import { expect, test } from "vitest";
import Tag from "../src/index";

test("<br>", () => {
  expect(new Tag("br").toString().toBe("<br>"));
});

test('<img src="path/to/image">', () => {
  expect(
    new Tag("img", { src: "path/to/image" })
      .toString()
      .toBe('<img src="path/to/image">')
  );
});

test('<input type="submit" value="Save">', () => {
  expect(
    new Tag("input", { type: "submit", value: "Save" })
      .toString()
      .toBe('<input type="submit" value="Save">')
  );
});
