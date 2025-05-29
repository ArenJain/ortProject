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
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      console.log("Loaded DB URL:", process.env.DATABASE_URL);
      const existingUser = await prisma.user.findFirst({
        where: { userName : user.name },
      });

      const randomString = (len = 16) => [...Array(len)].map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 62))).join('');


      if (!existingUser) {
        await createUser({userName: user.name ?? '', email : user.email?? randomString(10) })
      }

      return true;
    },

    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      console.log(token);
      console.log(user);
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
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