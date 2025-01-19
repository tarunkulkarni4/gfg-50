{/*

Alternate Positive Negative
Difficulty: EasyAccuracy: 33.86%Submissions: 212K+Points: 2
Given an unsorted array arr containing both positive and negative numbers. Your task is to rearrange the array and convert it into an array of alternate positive and negative numbers without changing the relative order.

Note:
- Resulting array should start with a positive integer (0 will also be considered as a positive integer).
- If any of the positive or negative integers are exhausted, then add the remaining integers in the answer as it is by maintaining the relative order.
- The array may or may not have the equal number of positive and negative integers.

Examples:

Input: arr[] = [9, 4, -2, -1, 5, 0, -5, -3, 2]
Output: [9, -2, 4, -1, 5, -5, 0, -3, 2]
Explanation: The positive numbers are [9, 4, 5, 0, 2] and the negative integers are [-2, -1, -5, -3]. Since, we need to start with the positive integer first and then negative integer and so on (by maintaining the relative order as well), hence we will take 9 from the positive set of elements and then -2 after that 4 and then -1 and so on.
Input: arr[] = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
Output: [5, -5, 2, -2, 4, -8, 7, 1, 8, 0]
Explanation : The positive numbers are [5, 2, 4, 7, 1, 8, 0] and the negative integers are [-5,-2,-8]. According to the given conditions we will start from the positive integer 5 and then -5 and so on. After reaching -8 there are no negative elements left, so according to the given rule, we will add the remaining elements (in this case positive elements are remaining) as it in by maintaining the relative order.
Input: arr[] = [9, 5, -2, -1, 5, 0, -5, -3, 2]
Output: [9, -2, 5, -1, 5, -5, 0, -3, 2]
Explanation: The positive numbers are [9, 5, 5, 0, 2] and the negative integers are [-2, -1, -5, -3]. Since, we need to start with the positive integer first and then negative integer and so on (by maintaining the relative order as well), hence we will take 9 from the positive set of elements and then -2 after that 5 and then -1 and so on.


// User function Template for Java
class Solution {
    void rearrange(ArrayList<Integer> arr) {
        // Step 1: Separate positive and negative numbers into two lists
        List<Integer> pos = new ArrayList<>(); // List to store positive numbers
        List<Integer> neg = new ArrayList<>(); // List to store negative numbers
        
        // Traverse the input ArrayList and categorize numbers
        for (int i = 0; i < arr.size(); i++) {
            if (arr.get(i) >= 0) { // If the number is non-negative
                pos.add(arr.get(i)); // Add to positive list
            } else { // If the number is negative
                neg.add(arr.get(i)); // Add to negative list
            }
        }

        // Step 2: Rearrange the numbers alternately in the input ArrayList
        int posIdx = 0; // Pointer to traverse the positive list
        int negIdx = 0; // Pointer to traverse the negative list
        int i = 0; // Index for modifying the original ArrayList

        // Alternate between positive and negative numbers until one list is exhausted
        while (posIdx < pos.size() && negIdx < neg.size()) {
            if (i % 2 == 0) { // If the current index is even
                arr.set(i++, pos.get(posIdx++)); // Place a positive number
            } else { // If the current index is odd
                arr.set(i++, neg.get(negIdx++)); // Place a negative number
            }
        }

        // Step 3: Add remaining positive numbers to the ArrayList, if any
        while (posIdx < pos.size()) {
            arr.set(i++, pos.get(posIdx++)); // Append leftover positive numbers
        }

        // Step 4: Add remaining negative numbers to the ArrayList, if any
        while (negIdx < neg.size()) {
            arr.set(i++, neg.get(negIdx++)); // Append leftover negative numbers
        }
    }
}


*/}