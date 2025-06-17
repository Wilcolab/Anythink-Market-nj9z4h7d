/**
 * Converts a given string to camelCase format.
 *
 * This function transforms strings with spaces, underscores, or hyphens
 * into camelCase. It handles mixed or uppercase input and removes
 * delimiters, capitalizing the first letter of each subsequent word.
 *
 * @param {string} str - The input string to convert (e.g., "first name", "user_id", "SCREEN_NAME", "mobile-number").
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('first name');      // returns 'firstName'
 * toCamelCase('user_id');         // returns 'userId'
 * toCamelCase('SCREEN_NAME');     // returns 'screenName'
 * toCamelCase('mobile-number');   // returns 'mobileNumber'
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, (chr, idx) => idx === 0 ? chr.toLowerCase() : chr);
}

// Examples:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber


