var s = document.createElement('script')
s.src = chrome.runtime.getURL('content.js')
s.onload = function() {
  this.remove()
};
document.getElementById('rwgps-ui-core').appendChild(s)
