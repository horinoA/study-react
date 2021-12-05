import { unmountComponentAtNode } from "react-dom";
import { Post } from "./api/api"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("PostgetAtest",() => {
    console.log("aaaa");
    let txt = Post.getAPost(1);
    console.log(txt);
})
