{/*

    Rotate Array by One

Given an array arr, rotate the array by one position in clockwise direction.

Examples:

Input: arr[] = [1, 2, 3, 4, 5]
Output: [5, 1, 2, 3, 4]
Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.
Input: arr[] = [9, 8, 7, 6, 4, 2, 1, 3]
Output: [3, 9, 8, 7, 6, 4, 2, 1]
Explanation: After rotating clock-wise 3 comes in first position


solution:

class Solution {
    public void rotate(int[] arr) {
        int n = arr.length;
        if (n <= 1) return; // No rotation needed for empty or single-element arrays

        // Step 1: Store the last element
        int last = arr[n - 1];

        // Step 2: Shift all elements to the right
        for (int i = n - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }

        // Step 3: Place the stored last element at the first position
        arr[0] = last;
    }
}

*/}