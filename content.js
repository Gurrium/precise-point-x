function getRoute() {
  return new Promise(resolve => {
    $.getJSON(`${window.location.href}.json`, data => resolve(data))
  })
}

let route
getRoute().then(r => { console.log(r); route = r })

rwgps.Events.bind("sg:highlightPoint", function(e) {
  console.log(route.track_points[e.x])
})

