import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [PrismaService],
    exports: [PrismaService], // Экспортируем PrismaService
})
export class PrismaModule {}
