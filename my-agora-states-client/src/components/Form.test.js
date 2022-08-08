import React from "react";
import TestRenderer from "react-test-renderer";
import { Form } from "./Form";
const discussion = { Form };
describe("Form", () => {
  let component = null;
  it("디스커션 렌더 잘 됩니다", () => {
    component = TestRenderer.create(<Form />);
  });
});
