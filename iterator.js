var iterator = (function () {
    var data  = ['one', 'two', 'three', 'four', 'five'];
    var index = 0;

    var next = function () {
        if (!hasNext())
            return null;

        var element = data[index];
        index++;

        return element;
    };

    var hasNext = function () {
        return index < data.length;
    };

    var current = function () {
        return data[index];
    };

    var rewind = function () {
        index = 0;
    };

    var total = function () {
        return data.length;
    };

    return {
        next   : next,
        hasNext: hasNext,
        current: current,
        rewind : rewind,
        total  : total
    }
}());

var element;

console.log('total:', iterator.total());

while (element = iterator.hasNext()) {
    console.log('current:', iterator.next());
}
