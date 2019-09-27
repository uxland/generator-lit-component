'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('lit-component-generator:app', () => {
  it('dummy test', () => {
    expect(true).toEqual(true);
  });
  // beforeAll(() => {
  //   return helpers
  //     .run(path.join(__dirname, '../generators/app'))
  //     .withPrompts({ someAnswer: true });
  // });

  // it('creates files', () => {
  //   assert.file(['dummyfile.txt']);
  // });
});
