var assert = require('assert');

var Aspects = require('../');


describe('Aspect Ratio Tests', function () {


    it('should calculate correct ratio', function (done) {

        var aspectRatios = new Aspects(['4:3']);

        var aspect = aspectRatios.ratio(800, 600);

        assert.equal(aspect.actual, '4:3');
        assert.equal(aspect.ratio, '4:3');
        assert.equal(aspect.accuracy, 100);

        done();
    });



    it('should calculate actual and nearest ratios', function (done) {

        var aspectRatios = new Aspects(['100:50']);

        var aspect = aspectRatios.ratio(100, 32);

        assert.equal(aspect.actual, '25:8');
        assert.equal(aspect.ratio, '100:50');
        assert.equal(aspect.accuracy, 43.75);

        done();
    });

});

