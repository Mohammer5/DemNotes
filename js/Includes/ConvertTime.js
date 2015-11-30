//converts a timestamp to readable format
var convertTime = function (num) {
  var group, hours, minutes, seconds;
  group = [];

  hours = Math.floor(num /  3600);
  minutes = Math.floor(num % 3600 / 60);
  seconds = Math.floor(num % 3600 % 60);

  if (hours > 0)
    group.push(hours > 9 ? hours : '0' + hours);

  group.push(minutes > 9 ? minutes : '0' + minutes);
  group.push(seconds > 9 ? seconds : '0' + seconds);

  return group.join(':');
}