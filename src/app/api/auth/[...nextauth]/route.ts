import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Cookies from "js-cookie";

const tempEmail = "boluwatifetella@gmail.com";
const tempPassword = "Password@1";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        // Structure your credentials here if needed
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials: any, req) {
        const email = credentials.email as string;
        const password = credentials.password as string;
        if (email === tempEmail && password === tempPassword) {
          return {
            id: "tg432jh4j5",
            name: "Tella Boluwatife",
            email: email,
          };
        }

        return null;
      },
      //   async authorize(credentials: any, req) {
      //     const url = process.env.NEXT_PUBLIC_API_URL_STAGE;

      //     const authResponse = await fetch(`${url}/login`, {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(credentials),
      //     });

      //     const res = await authResponse.json();

      //     if (!authResponse.ok) {
      //       throw new Error(res?.message);
      //     }

      //     if (res) {
      //       const user = {
      //         id: "234",
      //         name: res.data.access_token,
      //         email: res.data.refresh_token,
      //       };
      //       return user;
      //     }

      //     return null;
      //   },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/login",
    signIn: "/login",
  },
  callbacks: {
    async jwt({token}) {
      return token;
    },

    async session({session, token}) {
      return {
        ...session,
      };
    },
  },
});

export {handler as GET, handler as POST};
