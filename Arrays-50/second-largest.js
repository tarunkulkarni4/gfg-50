{/*


    sorting

class Solution {
    int secondLargest(int[] arr) {
        int n = arr.length;

        // If there are fewer than two elements, return -1 (as there is no second largest)
        if (n < 2) {
            return -1;
        }

        // Sort the array in ascending order
        Arrays.sort(arr);

        // Traverse from the second-to-last element and check for the first element smaller than the largest
        for (int i = n - 2; i >= 0; i--) {
            if (arr[i] != arr[n - 1]) {  // Compare to the largest element
                return arr[i];  // Return the second largest distinct element
            }
        }

        // If no second largest element exists (all elements are the same), return -1
        return -1;
    }
}

    
*/}