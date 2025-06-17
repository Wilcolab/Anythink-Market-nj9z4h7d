function addNumbers(a, b) {
    if (a === undefined || b === undefined || a === null || b === null) {
        throw new Error('Both arguments must be provided and not null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both arguments must be valid numbers.');
    }
    return a + b;
}
addNumbers(5, 3); // Returns 8
addNumbers(10, 20); // Returns 30
// addNumbers(5, null); // Throws error: Both arguments must be provided and not null.