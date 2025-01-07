{/*

    Three Great Candidates

The hiring team aims to find 3 candidates who are great collectively. Each candidate has his or her ability expressed as an integer. 3 candidates are great collectively if the product of their abilities is maximum. Given the abilities of some candidates in an array, arr[], return the maximum collective ability from the pool of candidates.

Examples:

Input: arr[] = [10, 3, 5, 6, 20]
Output: 1200
Explanation: Multiplication of 10, 6, and 20 is 1200.
Input: arr[] = [-10, -3, -5, -6, -20]
Output: -90
Explanation: Multiplication of -3, -5 and -6 is -90.
Expected Time Complexity: O(n)
Expected Space Complexity: O(1)

solution:
tc is o(n3)and o(1)

class Solution {
    long maxProduct(int[] arr) {
        int n = arr.length; // Get the size of the array
        long maxProduct = Long.MIN_VALUE; // Initialize to the smallest long value
        
        // Brute force: Iterate through all triplets
        for (int i = 0; i < n - 2; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                for (int k = j + 1; k < n; k++) {
                    // Calculate the product of the triplet
                    long product = (long) arr[i] * arr[j] * arr[k];
                    // Update maxProduct if the current product is greater
                    maxProduct = Math.max(maxProduct, product);
                }
            }
        }
        return maxProduct;
    }
}



using sorting:  tc o(log n)

/ User function Template for Java

class Solution {
    long maxProduct(int[] arr) {
        int n=arr.length;
        Arrays.sort(arr);
        int min=arr[0]*arr[1]*arr[n-1];
         int max=arr[n-1]*arr[n-2]*arr[n-3];
      
      return Math.max(min,max);
    }
}

Optoimized
tc is o(n) and o(1)

class Solution {
    long maxProduct(int[] arr) {
        // Initialize variables to track the three largest numbers
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;
        int max3 = Integer.MIN_VALUE;

        // Initialize variables to track the two smallest numbers
        int min1 = Integer.MAX_VALUE;
        int min2 = Integer.MAX_VALUE;

        // Traverse the array to find the three largest and two smallest numbers
        for (int i = 0; i < arr.length; i++) {
            // Update the largest numbers
            if (arr[i] > max1) {
                max3 = max2;  // Shift max2 to max3
                max2 = max1;  // Shift max1 to max2
                max1 = arr[i]; // Update max1 with the current number
            } else if (arr[i] > max2) {
                max3 = max2;  // Shift max2 to max3
                max2 = arr[i]; // Update max2 with the current number
            } else if (arr[i] > max3) {
                max3 = arr[i]; // Update max3 with the current number
            }

            // Update the smallest numbers
            if (arr[i] < min1) {
                min2 = min1;  // Shift min1 to min2
                min1 = arr[i]; // Update min1 with the current number
            } else if (arr[i] < min2) {
                min2 = arr[i]; // Update min2 with the current number
            }
        }

        // Calculate the two potential maximum products:
        // 1. Product of the three largest numbers
        long product1 = (long) max1 * max2 * max3;

        // 2. Product of the two smallest numbers and the largest number
        long product2 = (long) min1 * min2 * max1;

        // Return the maximum of the two products
        return Math.max(product1, product2);
    }
}

*/}