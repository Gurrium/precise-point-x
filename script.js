var orig = SampleGraph.prototype.repositionPointHighlight
SampleGraph.prototype.repositionPointHighlight = function() {
    orig.bind(this)()

    var s = this.xAxisType()
    var n = this.metrics(s).convert(this._pointHighlighted.point[s])
    this.$hoverXLabel.html(n)
}
