import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
        return {
            ...session,
            user: {
              ...session.user!, //Quando a gent usar o ! no final, indica que nunca vai ser underfine
              id: token.sub!,
            },
        };
    },
  },
});

export { handler as GET, handler as POST };
