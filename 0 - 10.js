for (i = 0; i < 11; i++) {
    console.log(i)
}
test('testvame chislata ot 0 do 10', () => {
    expect(console.log).toBe('0,1,2,3,4,5,6,7,8,9,10');
  });