import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { Format } from './format.pipe';

describe('Format Pipe', () => {
  beforeEachProviders(() => [Format]);

  it('should transform the input', inject([Format], (pipe: Format) => {
      expect(pipe.transform({first: "Hello", last: "There"}, "name")).toBe("Hello There");
  }));
});
