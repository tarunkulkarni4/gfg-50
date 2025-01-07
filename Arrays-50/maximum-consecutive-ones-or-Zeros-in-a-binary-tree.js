{/*

Maximum consecutive one’s (or zeros) in a binary array

Given a binary array, find the count of a maximum number of consecutive 1s present in the array.

Examples : 

Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
Output: 4
Explanation: The maximum number of consecutive 1’s in the array is 4 from index 8-11.


Input: arr[] = {0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1}
Output: 1
Explanation: The maximum number of consecutive 0’s in the array is 1 from index 0-1.





    Solution:

    tc is o(n),o(1)

    class Solution {
    public int findMaxConsecutiveOnesOrZeros(int[] nums) {
        int countOnes = 0;  // Count of consecutive 1s
        int countZeros = 0; // Count of consecutive 0s
        int maxOnes = 0;    // Maximum consecutive 1s
        int maxZeros = 0;   // Maximum consecutive 0s

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                countOnes++;  // Increment consecutive 1s count
                maxOnes = Math.max(maxOnes, countOnes);  // Update max consecutive 1s
                countZeros = 0;  // Reset consecutive 0s count
            } else {
                countZeros++;  // Increment consecutive 0s count
                maxZeros = Math.max(maxZeros, countZeros);  // Update max consecutive 0s
                countOnes = 0;  // Reset consecutive 1s count
            }
        }

        // Return the maximum of both counts
        return Math.max(maxOnes, maxZeros);
    }
}

*/}