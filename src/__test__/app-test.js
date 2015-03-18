var jest = require('jest');

jest.dontMock('../app');

describe('testFn', function() {
 it('returns a msg', function() {
   var app = require('../app');
   expect(testFn()).toBe('some string');
 });
});