import {fizzBuzz} from './index';

describe('Fizz Buzz', () => {
    test('returns right answer 1', () => {
        const input = 3;
        const output = ["1","2","Fizz"];
        expect(fizzBuzz(input)).toEqual(output);
    });

    test('returns right answer 2', () => {
        const input = 5;
        const output = ["1","2","Fizz","4","Buzz"];
        expect(fizzBuzz(input)).toEqual(output);
    });

    test('returns right answer 3', () => {
        const input = 15;
        const output = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"];
        expect(fizzBuzz(input)).toEqual(output);
    });

    test('passes the smoke test', () => {
        try {
            const input = 10 ^ 4;
            fizzBuzz(input);
            expect(true).toBeTruthy();
        } catch {
            expect(false).toBeTruthy();
        }
    });


});
