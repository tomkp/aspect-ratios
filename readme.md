# aspect-ratios

[![browser support](http://ci.testling.com/tomkp/aspect-ratios.png)](http://ci.testling.com/tomkp/aspect-ratios)


# example


``` js

    var aspectRatios = new Aspects(['16:9', '4:3', '1:1', '2:1']);

    var aspect = aspectRatios.ratio(800, 600);

    assert.equal(aspect.actual, '4:3');
    assert.equal(aspect.ratio, '4:3');
    assert.equal(aspect.accuracy, 100);

```


# license

MIT