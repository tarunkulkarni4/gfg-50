{/*
    Balanced Tree Check
Difficulty: EasyAccuracy: 43.15%Submissions: 324K+Points: 2
Given a binary tree, determine if it is height-balanced. A binary tree is considered height-balanced if the absolute difference in heights of the left and right subtrees is at most 1 for every node in the tree.

Examples:

Input: root[] = [1, 2, N, N, 3]
      1
    /
   2
    \
     3 
Output: false
Explanation: The height difference between the left and right subtrees at node 1 is 2, which exceeds 1. Hence, the tree is not balanced.
Input: root[] = [10, 20, 30, 40, 60]
       10
     /   \
    20   30 
  /   \
 40   60
Output: true
Explanation: The height difference between the left and right subtrees at all nodes is at most 1. Hence, the tree is balanced.
Input: root[] = [1, 2, 3, 4, N, N, N, 5]
       1
      / \
     2   3
    / 
   4
  /
 5
Output: false
Explanation: The height difference between the left and right subtrees at node 2 is 2, which exceeds 1. Hence, the tree is not balanced.

using recursion

class Solution {
    public boolean isBalanced(Node root) {
        return checkBalance(root) != -1;  // If it returns -1, it means the tree is not balanced.
    }

    // Helper method to check the balance and return the height of the tree if balanced
    private int checkBalance(Node root) {
        if (root == null) {
            return 0;  // Height of null tree is 0
        }

        int left = checkBalance(root.left);
        if (left == -1) {
            return -1;  // Tree is unbalanced
        }

        int right = checkBalance(root.right);
        if (right == -1) {
            return -1;  // Tree is unbalanced
        }

        // If the difference in heights of left and right subtrees is more than 1, it's unbalanced
        if (Math.abs(left - right) > 1) {
            return -1;  // Unbalanced
        }

        // Return the height of the tree
        return Math.max(left, right) + 1;
    }
}

              OR
 

 using level order

Time and Space Complexity:
Iterative Approach (Corrected Code):

Time Complexity: 
𝑂
(
𝑁
2
)
O(N 
2
 ) due to repeated height calculations.
Space Complexity: 
𝑂
(
𝑁
)
O(N) for the queue.

class Solution {
    public boolean isBalanced(Node root) {
        if (root == null) {
            return true;
        }

        // Create a queue for level-order traversal
        Queue<Node> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            Node current = queue.poll();

            // Check height difference for the current node
            if (Math.abs(height(current.left) - height(current.right)) > 1) {
                return false;  // If height difference is more than 1, it's unbalanced
            }

            // Add children to the queue for further processing
            if (current.left != null) {
                queue.offer(current.left);
            }
            if (current.right != null) {
                queue.offer(current.right);
            }
        }

        return true;  // If no unbalanced node is found, the tree is balanced
    }

    // Helper method to calculate the height of a subtree
    private int height(Node node) {
        if (node == null) {
            return 0;
        }
        return Math.max(height(node.left), height(node.right)) + 1;
    }
}



 */}