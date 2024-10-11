import { Module } from '@nestjs/common'; 
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],  // You can import other modules here
})
export class AppModule {}  // The root application module
