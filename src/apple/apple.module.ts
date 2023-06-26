import { Module } from '@nestjs/common';
import { AppleResolver } from './apple.resolver';

@Module({
	providers: [AppleResolver],
})
export class AppleModule {}
