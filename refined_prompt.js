/**
 * Converts a given string to dot.case format.
 *
 * This function handles spaces, underscores, hyphens, and mixed delimiters, as well as Unicode letters.
 * It removes or ignores non-alphanumeric characters except for delimiters, normalizes the casing,
 * and validates the input type. All words are lowercased and joined by dots.
 *
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case.
 * @throws {TypeError} Throws if the input is not a string.
 * @returns {string} The dot.case version of the input string. Returns an empty string if the input is empty or contains only delimiters.
 *
 * @example
 * toDotCase('hello world'); // returns 'hello.world'
 * toDotCase('foo_bar-baz'); // returns 'foo.bar.baz'
 * toDotCase('héllo wörld'); // returns 'héllo.wörld'
 * toDotCase(''); // returns ''
 */
/**
 * Converts a given string to camelCase.
 * Handles spaces, underscores, hyphens, mixed delimiters, and Unicode letters.
 * Ignores or removes non-alphanumeric characters except delimiters.
 * Normalizes casing and validates input.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The camelCase version of the input.
 */
/**
 * Converts a given string to camelCase format.
 *
 * This function normalizes the input string by:
 * - Trimming whitespace from both ends.
 * - Converting all characters to lower case.
 * - Replacing delimiters (spaces, underscores, hyphens) with a single space.
 * - Removing all non-alphanumeric characters except delimiters.
 * - Splitting the string into words and capitalizing the first letter of each word except the first one.
 * - Concatenating the words to form a camelCase string.
 *
 * Supports Unicode letters and numbers (requires ES2018+ for Unicode property escapes).
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string. Returns an empty string if input is empty or contains no valid characters.
 * @throws {TypeError} Throws if the input is not a string.
 */
function toCamelCase(input) {
    // Check for invalid input types
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Normalize input: trim, convert to lower case, and replace delimiters with a single space
    // Delimiters: space, underscore, hyphen
    // Unicode letters: use \p{L} for letters, \p{N} for numbers (ES2018+)
    let cleaned = input
        .normalize('NFC') // Normalize Unicode
        .replace(/[^ \p{L}\p{N}_-]+/gu, '') // Remove non-alphanumeric except delimiters
        .replace(/[_\-\s]+/g, ' ') // Replace delimiters with space
        .trim()
        .toLowerCase();

    if (!cleaned) return '';

    // Split into words
    const words = cleaned.split(' ');

    // Build camelCase string
    return words
        .map((word, idx) => {
            if (idx === 0) return word;
            // Capitalize first letter, keep rest lowercased
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example test cases
console.log(toCamelCase('hello world'));           // "helloWorld"
console.log(toCamelCase('hello_world'));           // "helloWorld"
console.log(toCamelCase('hello-world'));           // "helloWorld"
console.log(toCamelCase('HeLLo-WORLD'));           // "helloWorld"
console.log(toCamelCase('héllo wörld'));           // "hélloWörld"
console.log(toCamelCase('  --foo__bar baz--  '));  // "fooBarBaz"
console.log(toCamelCase('foo@bar!baz'));           // "fooBarBaz"
console.log(toCamelCase(''));                      // ""
console.log(toCamelCase('123_abc DEF'));           // "123AbcDef"

// Error handling examples
try { toCamelCase(null); } catch (e) { console.log(e.message); }      // "Input must be a string"
try { toCamelCase(123); } catch (e) { console.log(e.message); }       // "Input must be a string"
try { toCamelCase(['foo', 'bar']); } catch (e) { console.log(e.message); } // "Input must be a string"

/**
 * Converts a given string to dot.case.
 * Handles spaces, underscores, hyphens, mixed delimiters, and Unicode letters.
 * Ignores or removes non-alphanumeric characters except delimiters.
 * Normalizes casing and validates input.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The dot.case version of the input.
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    let cleaned = input
        .normalize('NFC')
        .replace(/[^ \p{L}\p{N}_-]+/gu, '') // Remove non-alphanumeric except delimiters
        .replace(/[_\-\s]+/g, ' ') // Replace delimiters with space
        .trim()
        .toLowerCase();

    if (!cleaned) return '';

    return cleaned.split(' ').join('.');
}

// Example test cases
console.log(toDotCase('hello world'));           // "hello.world"
console.log(toDotCase('hello_world'));           // "hello.world"
console.log(toDotCase('hello-world'));           // "hello.world"
console.log(toDotCase('HeLLo-WORLD'));           // "hello.world"
console.log(toDotCase('héllo wörld'));           // "héllo.wörld"
console.log(toDotCase('  --foo__bar baz--  '));  // "foo.bar.baz"
console.log(toDotCase('foo@bar!baz'));           // "foo.bar.baz"
console.log(toDotCase(''));                      // ""
console.log(toDotCase('123_abc DEF'));           // "123.abc.def"

try { toDotCase(null); } catch (e) { console.log(e.message); }      // "Input must be a string"
try { toDotCase(123); } catch (e) { console.log(e.message); }       // "Input must be a string"
try { toDotCase(['foo', 'bar']); } catch (e) { console.log(e.message); } // "Input must be a string"