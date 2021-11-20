import crypto from "crypto";
import { long } from "git-rev-sync";

export const set = (...names: string[]): void =>
  names.forEach((x: string) => {
    process.env[x] = hash(x);
  });

export const hash = (name: string): string => md5(long().concat(name));

export const md5 = (str: string): string =>
  crypto.createHash("md5").update(str).digest("hex");
