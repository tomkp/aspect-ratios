module.exports = function (aspects) {

    var specific = {};

    aspects.forEach(function(aspect) {
        var tokens = aspect.split(':');
        specific[aspect] = tokens[0] / tokens[1];
    });


    var gcd = function (a, b) {
        return b === 0 ? a : gcd(b, a % b);
    };


    var actualRatio = function(w, h) {
        var g = gcd(w, h);
        return (w/g) + ':' + (h/g);
    };


    var findClosest = function(r) {

        var res = {
            ratio: '',
            accuracy: 0
        };

        for (var prop in specific) {
            if( specific.hasOwnProperty( prop ) ) {
                var val = specific[prop];
                var delta = 100 - Math.abs(1 - (r / val)) * 100;
                if (delta > res.accuracy) {
                    res = {
                        ratio: prop,
                        accuracy: delta
                    };
                }
            }
        }
        return res;
    };


    var calculate = function(w, h) {
        var closest = findClosest(w / h);
        closest.actual = actualRatio(w, h);
        return  closest;
    };


    return {
        ratio: calculate
    };

};