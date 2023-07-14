# Schema Parser

**schema-parser** is a powerful utility for parsing JSON and object schemas in Node.js.

## Features

- Parse any object to get its schema.
- Parse any JSON string to get its schema.
- Supports complex nested structures.
- Identifies array, object, and primitive types.

## Installation

To install the package, use the following npm command:

```sh
npm install @suffro/schema-parser
```

## Usage

Here's a simple example on how you can use `schema-parser`:

```javascript
import { schemaFromObject, schemaFromJSON } from 'schema-parser';

// For Objects
let obj = {
    name: 'John Doe',
    age: 30,
    hobbies: ['Reading', 'Coding'],
    address: {
        city: 'San Francisco',
        country: 'USA'
    }
};

let schema = schemaFromObject(obj);
console.log(schema);

// For JSON
let jsonString = '{"name":"John Doe","age":30,"hobbies":["Reading","Coding"],"address":{"city":"San Francisco","country":"USA"}}';
let schema = schemaFromJSON(jsonString);
console.log(schema);
```

In the output of both `console.log` calls, you'll see the schema of the provided object or JSON string.

**NOTE:** Schema parser is capable of getting the schema of objects or json with nested arrays of objects, but it assumes that the objects in the array all have the same schema.

## API

**schemaFromObject(obj: any): Schema**

Parses an object and returns its schema.

**schemaFromJSON(jsonString: string): Schema**

Parses a JSON string and returns its schema.

## Contribute

Your contributions are always welcome! Please create a PR to propose changes.

## License

[MIT](http://opensource.org/licenses/MIT)
