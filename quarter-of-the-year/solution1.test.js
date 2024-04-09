'use strict';

import { addition } from './solution1.js';

describe('Basic Tests', () => {
    it('should return 5 when 2 and 3 are passed', () => {
        expect(addition(2, 3)).toEqual(5);
    });
    it('should return -1 when 1 and -2 are passed', () => {
        expect(addition(1, -2)).toEqual(-1);
    });
    it('should return 10 when 6 and 4 are passed', () => {
        expect(addition(6, 4)).toEqual(10);
    });
});
