export interface CreateUserDto {
  name: string;
  userId: string;
  userName: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
}

export interface UserResponseDto {
  id: number;
  name: string;
  userId: string;
  userName: string;
  createdAt: Date;
  updatedAt: Date;
  tariff: string
  startedAt: Date;
  endedAt: Date;
  config: string
  status: boolean;
}
