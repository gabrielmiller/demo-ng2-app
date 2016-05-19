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
      expect(pipe.transform({name: "Hello"}, "name")).toBe("Hello");
  }));
});
