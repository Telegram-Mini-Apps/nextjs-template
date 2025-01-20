import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const token = process.env.TOKEN;
  const chat = process.env.CHATID;

  if (!body.userId) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/getChatMember`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chat,
        user_id: body.userId,
      }),
    });
    const datt = await response.json();
    console.log(datt)
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

