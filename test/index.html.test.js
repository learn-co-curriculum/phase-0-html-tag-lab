const { expect } = require("chai");

describe("index.html", () => {
  it("has a <h1> element", () => {
    const h1 = document.querySelector("h1");
    const errorHint = "Did you code an <h1>Tag</h1> in index.html?";

    expect(h1, errorHint).to.exist;
  });

  describe("the <h1> element", () => {
    it('contains the text "Hello, World!"', () => {
      const h1 = document.querySelector("h1");
      const errorHint =
        'Does your H1 have exactly "Hello, World!" inside the opening and closing tag?';

      expect(h1.textContent, errorHint).to.contain("Hello, World!");
    });
  });
});
