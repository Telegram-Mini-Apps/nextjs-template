import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { UserResponseDto } from '@/app/dto/user.dto';

export async function GET(this: any, req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Missing 'id' parameter" }, { status: 400 });
  }

  console.log("ID:", id);

  try {
    const user = await prisma.user.findUnique({
      where: { userId: id },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const response: UserResponseDto = {
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
      status: user.status
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }

}
