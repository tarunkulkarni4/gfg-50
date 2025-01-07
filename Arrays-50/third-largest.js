{/*
using ssorting

class Solution {
    int thirdLargest(int arr[]) {
        // If there are fewer than three elements, return -1
        if (arr.length < 3) {
            return -1;
        }

        // Sort the array in ascending order
        Arrays.sort(arr);

        int n = arr.length;
        int distinctCount = 1; // Start with the largest element (last in the sorted array)

        // Traverse from the second-to-last element
        for (int i = n - 2; i >= 0; i--) {
            if (arr[i] != arr[i + 1]) { // Check for distinct values
                distinctCount++;
            }

            if (distinctCount == 3) { // Third distinct element found
                return arr[i];
            }
        }

        // If fewer than 3 distinct elements exist
        return -1;
    }
}
  
*/}