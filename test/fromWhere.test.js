describe("fromWhere()",function(){
  it("Tell you which city the registration number is from.",function(){
    assert.equal(fromWhere('CJ 523519'), 'Paarl');
  });
});
