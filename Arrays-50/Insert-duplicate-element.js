{/*
    


    Insert duplicate of K adjacent to it for it’s every occurrence in array
Last Updated : 08 Feb, 2022
Given an array arr consisting of N integers and an integer K, the task is to insert an adjacent K for every occurrence of it in the original sequence and then truncate the array to the original length using an O(1) auxiliary space.

Examples:  


Input: arr[] = {1, 0, 2, 3, 0, 4, 5, 0}, K = 0 
Output: {1, 0, 0, 2, 3, 0, 0, 4} 
Explanation: 
The given array {1, 0, 2, 3, 0, 4, 5, 0} is modified to {1, 0, 0, 2, 3, 0, 0, 4] after insertion of two 0’s and truncation of extra elements.


Input: arr[] = {7, 5, 8}, K = 8 
Output: {7, 5, 8} 
Explanation: 
After inserting an adjacent 8 into the array, it got truncated to restore the original size of the array.  


Approach 1: Using STL functions 
This problem can be solved by using built-in functions pop_back() and insert() .

Below is the implementation of the above approach: 




// Java implementation to update each 
// entry of k with two k entries
// adjacent to each other
import java.util.*;
 
class GFG{
 
// Function to update each entry of
// k with two k entries 
// adjacent to each other
static Vector<Integer> duplicateK(Vector<Integer> arr,int k)
{
    int N = arr.size();
    for(int i = 0; i < N; i++)
    {
       if(arr.get(i) == k)
       {
            
           // Insert an adjacent k
           arr.add(i + 1, k);
            
           i++;
            
           // Pop the last element
           arr.remove(arr.size() - 1);
       }
    }
    return arr;
}
 }
 
                        OR
    

Approach 2: Using Two Pointer Technique 

Since each K needs to be updated with two K entries adjacent to each other, the array will increase in length by an amount equal to the number of K that are present in the original array arr[].
Find the total number of K, then we assume we have an array with enough space to accommodate every element.
Initialize a variable write_idx that will point to the index at the end of this imaginary array and another pointer curr at the end of the current array, which is arr[N-1].
Iterate from the end and for each element we assume that we are copying the element to its current position, but copy only if the write_idx < N, and keep updating the write_idx each time. For an element with a value of zero, write it twice.
Below is the implementation of the above approach: 




// Java implementation to update 
// each entry of k with two k 
// entries adjacent to each other
class GFG{
 
// Function to update each 
// entry of k with two k 
// entries adjacent to each other
static int[] duplicateK(int []arr,int k)
{
     
    int N = arr.length;
     
    // Find the count of
    // total number of k
    int cnt = count(arr, k);
     
    // Variable to store index 
    // where elements will be 
    // written in the final array
    int write_idx = N + cnt - 1;
     
    // Variable to point the current index
    int curr = N - 1;
     
    while (curr >= 0 && write_idx >= 0)
    {
         
        // Keep the current element 
        // to its correctposition, if 
        // that is within the size N
        if (write_idx < N)
            arr[write_idx] = arr[curr];
     
        write_idx -= 1;
     
        // Check if the current element is also
        // k then again write its duplicate
        if (arr[curr] == k)
        {
            if (write_idx < N)
                arr[write_idx] = k;
                 
            write_idx -= 1;
        }
        --curr;
    }
     
    // Return the final result
    return arr;
}
 
static int count(int []arr, int num)
{
    int ans = 0;
    for(int i : arr)
     
       if(i == num)
          ans++;
    return ans;
}
}
    



                           OR

import java.util.ArrayList;

class Solution {
    public ArrayList<Integer> insertDuplicateK(int[] arr, int k) {
        // Create a result list to store the modified array
        ArrayList<Integer> result = new ArrayList<>();

        // Iterate through the array
        for (int num : arr) {
            result.add(num); // Add the current element
            if (num == k) {
                result.add(k); // Add a duplicate of 'k' if it matches
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] arr = {1, 2, 3, 2, 4};
        int k = 2;
        System.out.println(sol.insertDuplicateK(arr, k)); // Output: [1, 2, 2, 3, 2, 2, 4]
    }
}

*/}