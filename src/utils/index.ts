import type {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
} from "@auth/core/adapters";
import type Pocketbase from "pocketbase";
import type {
  PocketBaseAccount,
  PocketBaseSession,
  PocketBaseUser,
  PocketBaseVerificationToken,
} from "./pocketbase";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDate(date: any) {
  return (
    new Date(date).toString() !== "Invalid Date" && !isNaN(Date.parse(date))
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function format<T>(obj: Record<string, any>): T {
  for (const [key, value] of Object.entries(obj)) {
    if (value === null) {
      delete obj[key];
    }

    if (isDate(value)) {
      obj[key] = new Date(value);
    }
  }

  return obj as T;
}

export const PocketBaseAdapter = (
  client: Pocketbase,
  options = {}
): Adapter => {
  client.beforeSend = function (url, reqConfig) {
    console.log("pb sending...");
    console.log(url);
    return reqConfig;
  };
  return {
    async createUser(user) {
      const pb_user = await client
        .collection("next_auth_users")
        .create<PocketBaseUser>({
          name: user.name,
          image: user.image,
          email: user.email,
          emailVerified: user.emailVerified?.toISOString(),
        });
      if (pb_user.code) throw new Error("could not create user");
      return format<AdapterUser>(pb_user.clone());
    },
    async getUser(id) {
      const pb_user = await client
        .collection("next_auth_users")
        .getOne<PocketBaseUser>(id);

      return format<AdapterUser>(pb_user.clone());
    },
    async getUserByEmail(email) {
      const pb_user = await client
        .collection("next_auth_users")
        .getFirstListItem<PocketBaseUser>(`email="${email}"`);

      if (pb_user.code) return null;
      return format<AdapterUser>(pb_user.clone());
    },
    async getUserByAccount({ providerAccountId, provider }) {
      // ! I error here because there wouldn't be a record to search... linkAccount hasn't been called yet, nor the dependency createUser
      const pb_account = await client
        .collection("next_auth_account")
        .getFirstListItem<PocketBaseAccount>(
          `provider="${provider}" && providerAccountId="${providerAccountId}"`
        );

      const pb_user = await client
        .collection("next_auth_users")
        .getOne<PocketBaseUser>(pb_account.userId);

      if (pb_user.code) return null;
      return format<AdapterUser>(pb_user.clone());
    },
    async updateUser(user) {
      const pb_user = await client
        .collection("next_auth_users")
        .update<PocketBaseUser>(user.id as string, {
          name: user.name,
          image: user.image,
          email: user.email,
          email_verified: user.emailVerified,
        });

      return format<AdapterUser>(pb_user.clone());
    },
    async linkAccount(account) {
      const pb_account = await client
        .collection("next_auth_account")
        .create<PocketBaseAccount>({
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          userId: account.userId,
          expires_in: account.expires_in,
        });

      return format<AdapterAccount>(pb_account.clone());
    },
    async createSession(session) {
      const pb_session = await client
        .collection("next_auth_session")
        .create<PocketBaseSession>({
          expires: session.expires.toISOString(),
          sessionToken: session.sessionToken,
          userId: session.userId,
        });

      return format<AdapterSession>(pb_session.clone());
    },
    async getSessionAndUser(sessionToken) {
      const pb_session = await client
        .collection("next_auth_session")
        .getFirstListItem<PocketBaseSession>(`sessionToken="${sessionToken}"`);

      console.log(pb_session);

      // placeholder
      const pb_user = await client
        .collection("next_auth_users")
        .getOne<PocketBaseUser>(pb_session.userId);

      return {
        session: format<AdapterSession>(pb_session.clone()),
        user: format<AdapterUser>(pb_user),
      };
    },
    async updateSession(session) {
      const record = await client
        .collection("next_auth_session")
        .getFirstListItem<PocketBaseSession>(
          `sessionToken="${session.sessionToken}"`
        );

      const pb_session = await client
        .collection("next_auth_session")
        .update<PocketBaseSession>(record.id, { ...session });

      return format<AdapterSession>(pb_session.clone());
    },
    async deleteSession(sessionToken) {
      const record = await client
        .collection("next_auth_session")
        .getFirstListItem<PocketBaseSession>(`sessionToken="${sessionToken}"`);

      await client.collection("next_auth_session").delete(record.id);
    },
    async createVerificationToken(verificationToken) {
      const pb_veriToken = await client
        .collection("next_auth_verificationToken")
        .create<PocketBaseVerificationToken>({
          identifier: verificationToken.identifier,
          token: verificationToken.token,
          expires: verificationToken.expires.toISOString(),
        });

      if (pb_veriToken.code) return null;
      return {
        token: pb_veriToken.token,
        expires: new Date(pb_veriToken.expires),
        identifier: pb_veriToken.identifier,
      };
    },
    async useVerificationToken(params) {
      const pb_veriToken = await client
        .collection("next_auth_verificationToken")
        .getFirstListItem<PocketBaseVerificationToken>(
          `identifier="${params.identifier}" && token="${params.token}"`
        );

      if (pb_veriToken.code) return null;
      return {
        identifier: pb_veriToken.identifier,
        expires: new Date(pb_veriToken.expires),
        token: pb_veriToken.token,
      };
    },
  };
};

export { PocketBaseAdapter as default };
