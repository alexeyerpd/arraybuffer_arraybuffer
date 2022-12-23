import { ArrayBufferConverter } from '../arrayBufferConverter';
import { getBuffer } from '../getBuffer';

const buffer = getBuffer();
let converter;

beforeEach(() => {
  converter = new ArrayBufferConverter();
});

test('ArrayBufferConverter - test load', () => {
  converter.load(buffer);

  expect(converter.bufferView).not.toBeNull();
  expect(converter.bufferView).toStrictEqual(new Uint16Array(buffer));
});

test('ArrayBufferConverter - test toString', () => {
  converter.load(buffer);

  expect(converter.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  );
});

test('ArrayBufferConverter - test toString with empty bufferView', () => {
  expect(converter.toString()).toBe('');
});
