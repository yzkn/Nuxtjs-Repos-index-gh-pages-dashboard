const dateFormat = dateString => {
  if (undefined === dateString || null === dateString || 0 == dateString.length) {
    return "";
  }

  let date = new Date(Date.parse(dateString));

  // if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
  let format = 'YYYY/MM/DD';

  format = format.replace(/YYYY/g, date.getFullYear())
    .replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
    .replace(/DD/g, ('0' + date.getDate()).slice(-2))
    .replace(/hh/g, ('0' + date.getHours()).slice(-2))
    .replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
    .replace(/ss/g, ('0' + date.getSeconds()).slice(-2));

  if (format.match(/S/g)) {
    var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
    var length = format.match(/S/g).length;
    for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
  }

  return format;
}

export default ({}, inject) => {
  inject('dateFormat', dateFormat);
}
