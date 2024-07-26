import { expect, test } from "vitest";
import Tag from "../src/index";

test("<br>", () => {
  const tag = new Tag("br").toString();
  expect(tag.toEqual("<br>"));
});

test('<img src="path/to/image">', () => {
  const tag = new Tag("img", { src: "path/to/image" }).toString();
  expect(tag.toEqual('<img src="path/to/image">'));
});

test('<input type="submit" value="Save">', () => {
  const tag = new Tag("input", { type: "submit", value: "Save" }).toString();
  expect(tag.toEqual('<input type="submit" value="Save">'));
});
