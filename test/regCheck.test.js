describe("regCheck()",function(){
  it("Checks in whether registration number starts with GP for Gauteng",function() {
    assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
  it("Return false since registration number does not start with MP for Mpumalanga",function() {
    assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
  });
});
