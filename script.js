queryObjects(SampleGraph)
var orig = SampleGraph.prototype.repositionPointHighlight
SampleGraph.prototype.repositionPointHighlight = () => { orig.call(temp1); var s = temp1.xAxisType(); temp1.$hoverXLabel.html(temp1.metrics(s).convert(temp1._pointHighlighted.point[s])) }
