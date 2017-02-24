describe("totalPhoneBill()",function(){
  it("Calculates the total bill for the data provided.",function(){
    assert.equal((totalPhoneBill('call,sms,call,sms,sms')+"").startsWith('7.45'),true);
  });
});
