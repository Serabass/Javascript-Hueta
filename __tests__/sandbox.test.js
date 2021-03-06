describe('Sandbox', () => {
    it('Simple', () => {
        expect(0.1 + 0.2).toBe(0.30000000000000004);
        expect(0.1 + 0.7).toBe(0.7999999999999999);
        expect(777777777777777777).toBe(777777777777777800);
        expect(777777777777777777 === 777777777777777800).toBeTruthy();
        expect(1 + + + + + + + + + + + + + + + + + + + + + + 1).toBe(2);
        
        expect(parseInt(      0.5)).toBe(0);
        expect(parseInt(     0.05)).toBe(0);
        expect(parseInt(    0.005)).toBe(0);
        expect(parseInt(   0.0005)).toBe(0);
        expect(parseInt(  0.00005)).toBe(0);
        expect(parseInt( 0.000005)).toBe(0);
        expect(parseInt(0.0000005)).toBe(5);
        
        expect(7120 / 100 * 100)    .toBe(7120);
        expect(7110 / 100 * 100).not.toBe(7110);
        expect(7110 / 100 * 100)    .toBe(7109.999999999999);
    });
});
