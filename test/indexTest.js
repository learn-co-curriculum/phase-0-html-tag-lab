require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  it("has a <h1> element", () => {
    const h1 = document.querySelector("h1");
    const hint = "Did you code an <h1>Tag</h1> in index.html?";

    expect(h1, hint).to.exist;
  });

  describe("the <h1> element", () => {
    it('contains the text "Hello, World!"', () => {
      const h1 = document.querySelector("h1");
      const hint =
        'Does your H1 have exactly "Hello, World!" inside the opening and closing tag?';

      expect(h1, hint).to.contain.text("Hello, World!");
    });
  });
});
