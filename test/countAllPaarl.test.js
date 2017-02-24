describe("countAllPaarl()",function() {
  it("probes the array to return a list of registrations starting with 'CJ'",function() {
    assert.equal(countAllPaarl('CA 182736,CY 523519,CJ 812328,CJ 111222,EC 812328'),2);
  });
});
