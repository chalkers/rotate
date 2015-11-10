module.exports = function rotate(value) {
    var rotated = (value>>1) || (value<<7);
    if(value > 128) {
        return rotated + 128;
    } else {
        return rotated;
    }
};