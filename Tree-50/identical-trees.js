{/*
    Identical Trees

Given two binary trees with their root nodes r1 and r2, return true if both of them are identical, otherwise, false.

Examples:

Input:
    1          1
   /   \       /   \
  2     3    2    3
Output: true
Explanation: 
There are two trees both having 3 nodes and 2 edges, both trees are identical having the root as 1, left child of 1 is 2 and right child of 1 is 3.
Input:
    1         1
   /   \      /  \
  2     3   3   2
Output: false
Explanation: There are two trees both having 3 nodes and 2 edges, but both trees are not identical.
Input:
    1   1
   /      \
  2        2
Output: false
Explanation: Although both trees have the same node values (1 and 2), they are arranged differently, making the trees non-identical.


    class Solution {
    // Function to check if two trees are identical.
    boolean isIdentical(Node r1, Node r2) {
        // Code Here
        Queue<Node>q1=new LinkedList<>();
         Queue<Node>q2=new LinkedList<>();
         q1.add(r1);
         q2.add(r2);
         
         while(!q1.isEmpty() && !q2.isEmpty())
         {
             Node purr=q1.poll();
             Node qurr=q2.poll();
             
             if(purr==null && qurr==null)
             {
                 continue;
             }
             if(purr==null||qurr==null||purr.data!=qurr.data)
             {
                 return false;
             }
             q1.add(purr.left);
             q2.add(qurr.left);
             q1.add(purr.right);
             q2.add(qurr.right);
         }
        return true;
    }
}


class Solution {
    // Function to check if two trees are identical.
    boolean isIdentical(Node r1, Node r2) {
        // Base case: If both nodes are null, they are identical.
        if (r1 == null && r2 == null) {
            return true;
        }
        
        // If one node is null and the other is not, they are not identical.
        if (r1 == null || r2 == null) {
            return false;
        }
        
        // Check if current nodes are identical and recursively check left and right subtrees.
        return (r1.data == r2.data)
            && isIdentical(r1.left, r2.left)
            && isIdentical(r1.right, r2.right);
    }
}


*/}