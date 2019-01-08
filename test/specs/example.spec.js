describe('example spec', () => {
  it('should device is ready', () => {
    expect($('#deviceready > .listening').isDisplayed()).toBeFalsy();
    expect($('#deviceready > .received').isDisplayed()).toBeTruthy();
  });
});
