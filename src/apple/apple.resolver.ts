import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Apple')
export class AppleResolver {
	constructor() {}

	@Query()
	apple() {
		return {
			id: 1,
			test: 'foo',
		};
	}
}
