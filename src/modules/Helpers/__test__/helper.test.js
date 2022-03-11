import countryToPath from '../helper';

describe('countryToPath function', () => {
  it('removes whitespaces in between', () => {
    const result = countryToPath('a                            b c     de    f');
    expect(result).toBe('abcdef');
  });

  it('changes uppercase letters to lowercase letters', () => {
    const result = countryToPath('HOWDYPARTNER');
    expect(result).toBe('howdypartner');
  });

  it('removes parenthesis', () => {
    const result = countryToPath('((HOWDYPARTNER))');
    expect(result).toBe('howdypartner');
  });
});
