{/*


    Majority Element

Given an array arr. Find the majority element in the array. If no majority exists, return -1.

A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

Examples:

Input: arr[] = [3, 1, 3, 3, 2]
Output: 3
Explanation: Since, 3 is present more than n/2 times, so it is the majority element.\

Input: arr[] = [7]
Output: 7
Explanation: Since, 7 is single element and present more than n/2 times, so it is the majority element.

Input: arr[] = [2, 13]
Output: -1
Explanation: Since, no element is present more than n/2 times, so there is no majority element.


Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)


soln":

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

// User function Template for Java
class Solution {
    static int majorityElement(int arr[]) {
        if (arr == null || arr.length == 0) {
            return -1; // No majority element for empty array
        }

        int majority = arr[0];
        int votes = 1;

        // Phase 1: Find a potential majority candidate
        for (int i = 1; i < arr.length; i++) {
            if (votes == 0) {
                majority = arr[i];
                votes = 1;
            } else if (arr[i] == majority) {
                votes++;
            } else {
                votes--;
            }
        }

        // Phase 2: Verify the candidate
        int count = 0;
        for (int num : arr) {
            if (num == majority) {
                count++;
            }
        }

        // Return the majority element if it appears more than n/2 times, else -1
        return count > arr.length / 2 ? majority : -1;
    }
}

    
*/}