module.exports = function rotate(value) {
    var rotated = (value >> 1) || (value << 7);
    if (1 & value) {
    	rotated += 128;
    }
    return rotated;
};