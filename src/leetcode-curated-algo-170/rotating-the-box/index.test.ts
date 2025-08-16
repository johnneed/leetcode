import {rotateTheBox} from './index';

describe('rotateTheBox', () => {

    test('passes the smoke test for an upper constraint', () => {
        try {
            const input = Array.from({ length: 500 }, () => Array.from({ length: 500 }, () => '#'));
            rotateTheBox(input);
            expect(true).toBeTruthy();
        } catch {
            expect(false).toBeTruthy();
        }
    });


    test('returns right answer 1', () => {
        const input = [["#",".","#"]];
        const output = [["."],["#"],["#"]];
        expect(rotateTheBox(input)).toEqual(output);
    });

    test('returns right answer 2', () => {
        const input = [["#",".","*","."],
            ["#","#","*","."]];
        const output =  [["#","."],
                         ["#","#"],
                         ["*","*"],
                         [".","."]];
        expect(rotateTheBox(input)).toEqual(output);
    });

    test('returns right answer 3', () => {
        const input = [["#","#","*",".","*","."],
            ["#","#","#","*",".","."],
            ["#","#","#",".","#","."]];
        const output =  [[".","#","#"],
            [".","#","#"],
            ["#","#","*"],
            ["#","*","."],
            ["#",".","*"],
            ["#",".","."]];
        expect(rotateTheBox(input)).toEqual(output);
    });

});
