import { Module } from '@nestjs/common'; 
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule],  // You can import other modules here
})
export class AppModule {}  // The root application module
