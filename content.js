rwgps.Events.bind("sg:highlightPoint", function(e) {
  // TODO: data[e.x]で欲しい物が取れそう。
  // あとはdataをどうにかして取ってくる。
  // JSONを取ってきて地図上に表示していた記憶があるのでそこを除くか、何かしらのイベントにbindするか
  console.log(this, e)
})

