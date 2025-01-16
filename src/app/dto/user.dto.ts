export interface CreateUserDto {
  name: string;
  userId: string;
  userName: string;
  tariff: string;
}

export interface UserResponseDto {
  id?: number;
  name: string;
  userId: string;
  userName: string;
  createdAt?: Date;
  updatedAt?: Date;
  tariff?: number | null;
  startedAt?: Date | null;
  endedAt?: Date | null;
  config?: string | null;
  status?: boolean | null;
  promotion?: string | null;
}
