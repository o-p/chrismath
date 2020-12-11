import GCD from '.';

test.each`
  a         | b         | expected
  ${4}      | ${6}      | ${2}
  ${81}     | ${27}     | ${27}
  ${524287} | ${131071} | ${1}
`(
  '最大公因數: ($a, $b)',
  ({ a, b, expected }) => expect(GCD(a, b)).toBe(expected),
);
