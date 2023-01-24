import { AstroAuth, type AstroAuthConfig } from "../../../../frameworks-astro";
import GitHub from "@auth/core/providers/github";
import { PocketBaseAdapter } from "../../../../adapter-pocketbase-v0.1/src";

import Pocketbase from "pocketbase";
const pb = new Pocketbase("http://127.0.0.1:8090");

export const authOpts: AstroAuthConfig = {
  providers: [
    // @ts-ignore
    GitHub({
      clientId: import.meta.env.GITHUB_ID,
      clientSecret: import.meta.env.GITHUB_SECRET,
    }),
  ],
  adapter: PocketBaseAdapter(pb),
  debug: true,
  secret: "30510956a71d8cee1816bfc65b84ed06",
  trustHost: true,
};

export const { get, post } = AstroAuth(authOpts);
