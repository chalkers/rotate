module.exports = function rotate(value) {
    var rotated = value >> 1;
    // Check to see if the first bit was set...
    if (1 & value) {
    	//...flip the furthest bit on.
    	rotated += (1 << 7);
    }
    return rotated;
};