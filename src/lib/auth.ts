import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import prisma from './db/prisma';
import { createUser } from '@/database/userAccess';


export const authOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'repo workflow',
        },
      },
    }),
  ],
  pages: {
    signIn: "/signin", // 👈 This tells NextAuth to use your custom page
  },
  callbacks: {
    async signIn({ user, account, profile , email, credentials }) {
      // console.log("User Details : ",user);
      // console.log("account Details : ",account);
      // console.log("profile Details : ",profile);
      // console.log("email Details : ",email);
      // console.log("credentials Details : ",credentials);

      // console.log("Loaded DB URL:", process.env.DATABASE_URL);
      const existingUser = await prisma.user.findUnique({
        where: { userName : profile?.login ?? "" },
      });

      if (!existingUser) {
        await createUser({userName: profile?.login , email : profile.email?? "" })
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        console.log("profile from jwt",profile)
        token.userName = profile?.login ?? "" ;
      }
      console.log(token);
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.gitUsername = token.userName as string;
      console.log(session);
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === 'production'
        ? 'next-auth.session-token'
        : 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: false,
      },
    },
  },
};


// the issue here is when using 8443 port with http rather than https browser blocks the secure(which have prefix __secure) cookies 