const formatDate = timeInSeconds => {
  let timeArray = [];
  let timeString = "0s";
  const hours = Math.floor(timeInSeconds / (60 * 60));
  const minute = Math.floor((timeInSeconds - hours * 60 * 60) / 60);
  const second = (timeInSeconds - hours * 60 * 60) % 60;
  if (timeInSeconds == undefined) timeString = `0s`;
  if (hours) timeArray.push(`${hours}h`);
  if (minute) timeArray.push(`${minute}m`);
  if (second) timeArray.push(`${second}s`);
  if (timeArray.length > 0) timeString = timeArray.join(" ");
  return timeString;
};

module.exports = formatDate;
