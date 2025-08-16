# Maximum 69 Number
#
# You are given a positive integer num consisting only of digits 6 and 9.
#
# Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
#
#
#
# Example 1:
#
# Input: num = 9669
# Output: 9969
# Explanation:
# Changing the first digit results in 6669.
# Changing the second digit results in 9969.
# Changing the third digit results in 9699.
# Changing the fourth digit results in 9666.
# The maximum number is 9969.

# Example 2:
#
# Input: num = 9996
# Output: 9999
# Explanation: Changing the last digit 6 to 9 results in the maximum number.
# Example 3:
#
# Input: num = 9999
# Output: 9999
# Explanation: It is better not to apply any change.
#
#
# Constraints:
#
# 1 <= num <= 104
# num consists of only 6 and 9 digits.

import re

class Solution:
    pattern = r"6"

    @staticmethod
    def maximum69Number(num: int) -> int:
        num_str = str(num)
        match = re.search(Solution.pattern, num_str)
        if match:
            start, end = match.span()
            return int(num_str[:start] + '9' + num_str[start+1:])
        return num

# Example usage:
if __name__ == "__main__":
    print(Solution.maximum69Number(9669))  # Output: 9969
    print(Solution.maximum69Number(9996))  # Output: 9999
    print(Solution.maximum69Number(9999))  # Output: 9999
    print(Solution.maximum69Number(6969))  # Output: 9969
    print(Solution.maximum69Number(6666))  # Output: 9666
    print(Solution.maximum69Number(6))     # Output: 9
    print(Solution.maximum69Number(9))     # Output: 9
# Time complexity: O(n)
# Space complexity: O(n)
# where n is the number of digits in the input number.
# This solution uses regular expressions to find the first occurrence of '6' in the string representation of the number.