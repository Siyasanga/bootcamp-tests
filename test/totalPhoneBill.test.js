describe("totalPhoneBill()",function(){
  it("Return true since total phone bill equals 7.45",function(){
    assert.equal((totalPhoneBill('call,sms,call,sms,sms')+"").startsWith('7.45'),true);
  });
  it("Return false since the total phone bill is not equal to 7.22",function(){
    assert.equal((totalPhoneBill('call,sms,call,sms,sms')+"").startsWith('7.45'),false);
  });
});
