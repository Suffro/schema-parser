# Schema-Parser

The JSON-Schema-Parser is a powerful utility for generating a simplified schema from a JSON object. It traverses through your JSON data, regardless of the level of nesting, and returns a schema that provides key information about the data types present in your JSON.

## Installation

Use npm to install JSON-Schema-Parser:

```
npm install json-schema-parser
```

## Usage

First, import the `schemaFromObject` function from the package:

```
import { schemaFromObject } from 'json-schema-parser';
```

Here is a basic usage example:

```
const data = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["Skiing", "Reading"]
};

const schema = schemaFromObject(data);

console.log(schema);
```

The above code will output the following schema:

```
{
  name: 'string',
  age: 'number',
  city: 'string',
  hobbies: 'array',
  'hobbies[0]': 'string'
}
```

The JSON-Schema-Parser can handle complex nested objects and arrays as well. For example:

```
const complexData = {
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

const complexSchema = schemaFromObject(complexData);

console.log(complexSchema);
```

The output schema would look like:

```
{
  "person.name": "string",
  "person.age": "number",
  "person.job.title": "string",
  "person.job.location": "string",
  "person.hobbies": "array",
  "person.hobbies[0]": "string"
}
```

## Error Handling

The `schemaFromObject` function performs some basic error handling. It will throw an error if it is called with a non-object or null value:

```
schemaFromObject(null); // throws Error: Input to schemaFromObject must be a non-null object.

schemaFromObject(42); // throws Error: Input to schemaFromObject must be a non-null object.
```

## Contribution

Contributions are always welcome! Please read the contribution guidelines first.

## License

The JSON-Schema-Parser is [MIT licensed](./LICENSE).
