import test from 'ava';
import attribute from './';

test('Generates style string', t => {
  const a = attribute({ 'font-site': '18px', color: 'red' });

  t.is(a, 'font-site: 18px; color: red');
});

test('Generates empty style string', t => {
  t.is(attribute({}), '');
});
