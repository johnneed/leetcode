#Palindrome Number
#
#Given an integer x, return true if x is a palindrome, and false otherwise.
#
#
# Example 1:
#
# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Example 2:
#
# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:
#
# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
#
#
# Constraints:
#
# -231 <= x <= 231 - 1
# #


class Solution:
    def isPalindrome(self, x: int) -> bool:
        num_str = str(x)
        len_str = len(num_str) // 2
        leftHalf = slice(0, len_str)
        rightHalf = slice(-1, -(len_str) - 1, -1)
        return num_str[leftHalf] == num_str[rightHalf]

# Example usage:
if __name__ == "__main__":
    solution = Solution()
    print(solution.isPalindrome(121))  # Output: True
    print(solution.isPalindrome(-121))  # Output: False
    print(solution.isPalindrome(10))    # Output: False
    print(solution.isPalindrome(12321))  # Output: True
    print(solution.isPalindrome(0))      # Output: True
    print(solution.isPalindrome(1234321))  # Output: True
    print(solution.isPalindrome(123456))  # Output: False
    print(solution.isPalindrome(1001))  # Output: True
    print(solution.isPalindrome(1234567890987654321))  # Output: True
    print(solution.isPalindrome(-12321))  # Output: False
# Time complexity: O(n)