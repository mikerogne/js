function Hamming() {}
Hamming.prototype.compute = function (a, b) {
    let differences = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            differences++;
        }
    }

    return differences;
};

module.exports = Hamming;
