import { GraphQLScalarType } from 'graphql';

const validate = (value: unknown) => {
	if (!['foo', 'bar'].includes(value as string)) throw new TypeError(`Invalid value: ${value}`);

	return value;
};

export const TestScalar = new GraphQLScalarType({
	name: 'Test',

	description: 'Either `foo` or `bar`',

	serialize(value) {
		return validate(value);
	},

	parseValue(value) {
		return validate(value);
	},
});
