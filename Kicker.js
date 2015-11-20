function count() {
  var radiusIs, angleIs;
  var height = document.getElementById('height').value;
  var angle = document.getElementById('angle').value;
  var radius = document.getElementById('radius').value;
  console.log(height, angle, radius);

  var length = document.getElementById('length');
  var foot = document.getElementById('foot');
  var deepth = document.getElementById('deepth');

  function radiusOrAngle(radius, angle) {
  if (!radius) {
    radiusIs = Math.round(height / (2 * (Math.sin(angleRad / 2) * Math.sin(angleRad / 2))) * 100) / 100;
    document.getElementById('radius').value = radiusIs;
    console.log(radiusIs);
  }
  if (!angle) {
    angleIs = (2 * Math.asin(Math.sqrt(height / (2 * radius))) / drc).toFixed(2);
    document.getElementById('angle').value = angleIs;
    console.log(angleIs);
  }
}

var drc = 0.0174532925; // degree to radian constant
var angleRad = angle * drc; // radius angle in radian
var angleBrad = ((180 - angle) / 2) * drc; //reversed angle in radian, needed for calc


  length.innerHTML = (height / Math.sin(angleRad / 2)).toFixed(2);

  foot.innerHTML = (height * Math.tan(angleBrad)).toFixed(2);

  radiusOrAngle(radius, angle);

  deepth.innerHTML = (radiusIs - radiusIs * Math.sin((90 - angle / 2) * drc)).toFixed(2);


}
