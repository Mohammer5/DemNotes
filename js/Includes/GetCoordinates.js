// returns coordinates of a given axis of an event object
var getCoordinate = function(axis, evt) {
  axis = axis.toUpperCase();
  return parseInt(evt['page' + axis] || evt['client' + axis] || evt.srcEvent['client' + axis] || evt.touches[0]['client' + axis]);
}