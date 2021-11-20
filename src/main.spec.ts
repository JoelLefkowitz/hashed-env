import { md5, set } from "./main";

import { expect } from "chai";
import gitRevSync from "git-rev-sync";
import { stub } from "sinon";

stub(gitRevSync, "long").returns("foo");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hash = require("./main").hash;

describe("hash", () => {
  it("MD5 hashes a string concatenated to the long git hash", () => {
    expect(hash("bar")).to.equal(md5("foobar"));
  });
});

describe("set", () => {
  afterEach(() => {
    ["bar", "baz"].forEach((x: string) => delete process.env[x]);
  });

  it("Sets an environment variable for each input to an MD5 seeded by the long git hash.", () => {
    set("bar", "baz");
    expect((process.env.bar = hash("foobar")));
    expect((process.env.baz = hash("foobaz")));
  });
});
