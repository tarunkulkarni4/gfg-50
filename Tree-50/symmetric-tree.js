{/*
    
    

Symmetric Tree

Given a Binary Tree. Check whether it is Symmetric or not, i.e. whether the binary tree is a Mirror image of itself.

Examples:

Input: root=
   ex-1_1
Output: true
Explanation: Tree is mirror image of itself i.e. tree is symmetric.
Input: root=
   ex-2_1
Output: false
Explanation: Tree is not mirror image of itself i.e. tree is not symmetric.
Input: root=
         5
       /   \
      10     10
Output: true
Explanation: Tree is mirror image of itself i.e. tree is symmetric.

Solution:

class Solution {
    public static boolean isSymmetric(Node root) {
        if (root == null) {
            return true;
        }

        Queue<Node> queue1 = new LinkedList<>();
        Queue<Node> queue2 = new LinkedList<>();
        
        queue1.add(root.left);
        queue2.add(root.right);

        while (!queue1.isEmpty() && !queue2.isEmpty()) {
            Node node1 = queue1.poll();
            Node node2 = queue2.poll();
            
            // Handle null nodes safely before accessing properties
            if (node1 == null && node2 == null) {
                continue;
            }
            if (node1 == null || node2 == null || node1.data != node2.data) {
                return false;
            }

            // Enqueue children in mirror order
            queue1.add(node1.left);
            queue2.add(node2.right);
            
            queue1.add(node1.right);
            queue2.add(node2.left);
        }

        return queue1.isEmpty() && queue2.isEmpty();
    }
}
    */}