describe("regCheck()",function(){
  it("Checks in whether registration number is the specified location.",function() {
    assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
});
