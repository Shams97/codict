import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  session: {
    secret: process.env.SECRET,
    jwt: true,
  },
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
