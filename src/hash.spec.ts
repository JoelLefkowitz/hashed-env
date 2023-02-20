import * as rev from "git-rev-sync";

import { hash, set } from "./hash";

jest.mock("git-rev-sync");
jest.spyOn(rev, "long").mockImplementation(() => "foo");

describe("set", () => {
  delete process.env.foo;

  it("MD5 hashes a string concatenated to the long git hash", () => {
    set("baz", "bar");
    expect(process.env.baz).toBe(hash("foobar"));
  });
});
