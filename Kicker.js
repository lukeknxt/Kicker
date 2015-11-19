function test() {
  console.log("Test");
}

function count() {
  console.log("Count Invoked");
  var radiusIs;

  var height = document.getElementById('height').value;
  var angle = document.getElementById('angle').value;
  var radius = document.getElementById('radius').value;
  console.log(height, angle, radius);

  var length = document.getElementById('length');
  var foot = document.getElementById('foot');
  var deepth = document.getElementById('deepth');

  var drc = 0.0174532925; // degree to radian constant
  var angleRad = angle * drc; // radius angle in radian
  var angleBrad = ((180 - angle) / 2) * drc; //reversed angle in radian, needed for calc


  
  if (!radius) {
    radiusIs = Math.round(height / (2 * (Math.sin(angleRad / 2) * Math.sin(angleRad / 2))) * 100) / 100;
    document.getElementById('radius').innerHTML = radiusIs;
    console.log(radiusIs);
  } else if (!angle) {
    var angleIs = (2 * Math.asin(Math.sqrt(height / (2 * radius))) / drc).toFixed(2);
    document.getElementById('angle').innerHTML = angleIs;
    console.log(angleIs);
  }

  length.innerHTML = (height / Math.sin(angleRad / 2)).toFixed(2);

  foot.innerHTML = (height * Math.tan(angleBrad)).toFixed(2);

  deepth.innerHTML = (radiusIs - radiusIs * Math.sin((90 - angle / 2) * drc)).toFixed(2);


}
