QUnit.test("Angle test", function( assert ) {
  assert.equal(isAngle(60), 60, "Angle is tested");
});
 var angleRad = 1, height = 2;
QUnit.test("Radius test", function( assert ) {
  assert.equal(isRadius(60), 60, "Radius given");
  assert.equal(isRadius(null), 4.35, "Radius calc");
}); 