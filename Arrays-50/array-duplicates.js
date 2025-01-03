{/*
Array Duplicates

Given an array arr of integers, find all the elements that occur more than once in the array. If no element repeats, return an empty array.

Examples:

Input: arr[] = [2, 3, 1, 2, 3]
Output: [2, 3] 
Explanation: 2 and 3 occur more than once in the given array.
Input: arr[] = [0, 3, 1, 2] 
Output: [] 
Explanation: There is no repeating element in the array, so the output is empty.
Input: arr[] = [2]
Output: [] 
Explanation: There is single element in the array. Therefore output is empty.

    Brute force
 time is o(n2) and o(n)
    class Solution {
    public List<Integer> findDuplicates(int[] arr) {
        List<Integer>result=new ArrayList<>();
        // code here
    for(int i=0;i<arr.length;i++)
    {
        for(int j=i+1;j<arr.length;j++)
        {
           if(arr[i]==arr[j])
           {
               result.add(arr[i]);
           }
        }
    }
    return result;
    }
}




using hashset

class Solution {
    public List<Integer> findDuplicates(int[] arr) {
        List<Integer> result = new ArrayList<>();
        HashSet<Integer> seen = new HashSet<>();
        
        for (int num : arr) {
            // If the number is already in the set, it's a duplicate
            if (!seen.add(num)) {
                result.add(num);
            }
        }
        
        return result;
    }
}

Insertion and look-up in a HashSet are average-case 
𝑂
(
1
)
O(1), so iterating through the array and checking for duplicates takes 
𝑂
(
𝑛
)
O(n), where 
𝑛
n is the length of the array.
Space Complexity:
The space complexity is 
𝑂
(
𝑛
)
O(n) because we are storing the elements in the HashSet.

*/}