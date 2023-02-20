import { createHash } from "crypto";
import { long } from "git-rev-sync";

export const hash = (key: string): string =>
  createHash("md5").update(key).digest("hex");

export const set = (k: string, v: string): void => {
  process.env[k] = hash(long().concat(v));
};
