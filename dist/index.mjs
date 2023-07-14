const _parseSchema = (_obj, _parentKey = '') => {
    if (typeof _obj !== 'object' || _obj === null) {
        throw new Error('Input to _parseSchema must be a non-null object.');
    }
    
    let schema = {};
    
    for (let key in _obj) {
        if (_obj.hasOwnProperty(key)) {
            let type = Array.isArray(_obj[key]) ? 'array' : typeof _obj[key];
            let newKey = _parentKey ? `${_parentKey}.${key}` : key;

            if (type === 'object') {
                let childSchema = _parseSchema(_obj[key], newKey);
                schema = { ...schema, ...childSchema };
            } else if (type === 'array' && _obj[key].length > 0) {
                schema[newKey] = type;
                let arrayType = typeof _obj[key][0];
                if (typeof _obj[key][0] === 'object' && !Array.isArray(_obj[key][0])) {
                    let arrayChildSchema = _parseSchema(_obj[key][0], `${newKey}[0]`);
                    schema = { ...schema, ...arrayChildSchema };
                } else {
                    schema[`${newKey}[0]`] = arrayType;
                }
            } else {
                schema[newKey] = type;
            }
        }
    }
    
    return schema;
};

const schemaFromObject = (obj) => _parseSchema(obj);
const schemaFromJSON = (jsonString) => _parseSchema(JSON.parse(jsonString));

export { schemaFromObject, schemaFromJSON };
