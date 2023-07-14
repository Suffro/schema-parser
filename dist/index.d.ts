declare interface Schema {
	[key: string]: string
}

declare const schemaFromObject: (obj: Schema) => Schema;
declare const schemaFromJSON: (jsonString: Schema) => Schema;

export { schemaFromObject, schemaFromJSON, Schema };
