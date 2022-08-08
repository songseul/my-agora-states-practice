import React from "react";
import { Discussion } from "./Discussion";
import TestRenderer from "react-test-renderer";
const Discussion = { Discussion };

describe("Discussion", () => {
  let component = null;
  it("디스커션 렌더 잘 됩니다", () => {
    component = TestRenderer.createRenderer(<Discussion />);
  });
});
