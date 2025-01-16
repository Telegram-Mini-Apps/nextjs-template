import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { UserResponseDto } from '@/app/dto/user.dto';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    const response: UserResponseDto[] = users.map((user) => ({
      id: user.id,
      name: user.name,
      userId: user.userId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      userName: user.userName,
      tariff: user.tariff,
      startedAt: user.startedAt,
      endedAt: user.endedAt,
      config: user.config,
      status: user.status,
      promotion: user.promotion
    }));

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
