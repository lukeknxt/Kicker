function count() {
  var height = document.getElementById('height').value; // always required value

  var angle = document.getElementById('angle').value;
  var radius = document.getElementById('radius').value;

  var length = document.getElementById('length');
  var foot = document.getElementById('foot');
  var deepth = document.getElementById('deepth');

  var drc = 0.0174532925; // degree to radian constant
  var angleRad = drc * isAngle(angle); // radius angle in radian
  var angleBrad = ((180 - isAngle(angle)) / 2) * drc; //reversed angle in radian, needed for calc

  document.getElementById('radius').value = isRadius(radius);
  document.getElementById('angle').value = isAngle(angle);

  length.innerHTML = (height / Math.sin(angleRad / 2)).toFixed(2);
  foot.innerHTML = (height * Math.tan(angleBrad)).toFixed(2);
  deepth.innerHTML = (isRadius(radius) - isRadius(radius) * Math.sin((90 - isAngle(angle) / 2) * drc)).toFixed(2);


  function isAngle(angle) {
    if (!angle) {
      return (2 * Math.asin(Math.sqrt(height / (2 * radius))) / drc).toFixed(2);
    } else {
      return angle;
    }
  }

  function isRadius(radius) {
    if (!radius) {
      return Math.round(height / (2 * (Math.sin(angleRad / 2) * Math.sin(angleRad / 2))) * 100) / 100;
    } else {
      return radius;
    }
  }
}

//module.exports = count();
