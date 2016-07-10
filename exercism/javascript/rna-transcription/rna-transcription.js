function DnaTranscriber() {}
DnaTranscriber.prototype.toRna = function (strand) {
    let map = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    return map[strand];
};

module.exports = DnaTranscriber;
