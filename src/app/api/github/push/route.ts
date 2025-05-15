import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { Buffer } from 'buffer';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.accessToken) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

  const body = await req.json();
  const { repo, path, content }: { repo: string; path: string; content: string } = body;

  const encoded = Buffer.from(content).toString('base64');
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;

  try {
    const { data } = await axios.get(apiUrl, {
      headers: { Authorization: `token ${session.accessToken}` },
    });
    const sha = data.sha;

    await axios.put(apiUrl, {
      message: `Update ${path}`,
      content: encoded,
      sha,
    }, {
      headers: { Authorization: `token ${session.accessToken}` },
    });
  } catch {
    await axios.put(apiUrl, {
      message: `Create ${path}`,
      content: encoded,
    }, {
      headers: { Authorization: `token ${session.accessToken}` },
    });
  }

  return NextResponse.json({ message: 'File pushed successfully' });
}
