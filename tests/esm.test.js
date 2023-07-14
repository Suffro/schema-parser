import { schemaFromObject } from '../dist/index.mjs';

test('Basic usage example.', () => {
	const data = {
		person: {
			name: "John",
			age: 30,
			job: {
				title: "Engineer",
				location: "California"
			},
			hobbies: ["Skiing", "Reading"]
		}
	};

	const schema = schemaFromObject(data);

	expect(schema.toBe({
		"person.name": "string",
		"person.age": "number",
		"person.job.title": "string",
		"person.job.location": "string",
		"person.hobbies": "array",
		"person.hobbies[0]": "string"
	}));
});
