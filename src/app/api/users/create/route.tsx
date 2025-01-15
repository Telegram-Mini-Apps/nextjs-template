import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { CreateUserDto, UserResponseDto } from '@/app/dto/user.dto';

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.userId) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
  }

  try {
    const newUser = await prisma.user.create({
      data: body,
    });

    const response: UserResponseDto = {
      id: newUser.id,
      name: newUser.name,
      userId: newUser.userId,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
      userName: newUser.userName,
      tariff: newUser.tariff,
      startedAt: newUser.startedAt,
      endedAt: newUser.endedAt,
      config: newUser.config,
      status: newUser.status
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
