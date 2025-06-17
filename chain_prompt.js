function toKebabCase(str) {
    if (typeof str !== 'string') return '';

    // Trim leading/trailing spaces and replace underscores/spaces with hyphens
    let result = str.trim()
        // Replace underscores and spaces (including multiple) with a single hyphen
        .replace(/[\s_]+/g, '-')
        // Handle camelCase and PascalCase (including acronyms)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Handle consecutive uppercase letters followed by lowercase (acronyms)
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove multiple consecutive hyphens
        .replace(/-+/g, '-')
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '');

    return result;
}


// Example usages:
console.log(toKebabCase('camelCaseExample'));         // "camel-case-example"
console.log(toKebabCase('snake_case_example'));       // "snake-case-example"
console.log(toKebabCase('Space Separated Example'));  // "space-separated-example"
console.log(toKebabCase('  leading and trailing  ')); // "leading-and-trailing"
console.log(toKebabCase('multiple___underscores'));   // "multiple-underscores"
console.log(toKebabCase('XMLHttpRequest'));           // "xml-http-request"
console.log(toKebabCase('JSONData'));                 // "json-data"
console.log(toKebabCase('already-kebab-case'));       // "already-kebab-case"
console.log(toKebabCase('MiXeD_Case Input'));         // "mi-xe-d-case-input"