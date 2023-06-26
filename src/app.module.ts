import {
	ApolloServerPluginLandingPageLocalDefault,
	ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TestScalar } from '../graphql/scalars/TestScalar';
import { AppleModule } from './apple/apple.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: false,
			plugins: [
				// Install a landing page plugin based on NODE_ENV
				process.env.NODE_ENV === 'production'
					? ApolloServerPluginLandingPageProductionDefault({ footer: false })
					: ApolloServerPluginLandingPageLocalDefault({ embed: { runTelemetry: false } }),
			],
			typePaths: ['./**/*/*.graphql'],
			resolvers: {
				Test: TestScalar,
			},
		}),
		AppleModule,
	],
})
export class AppModule {}
