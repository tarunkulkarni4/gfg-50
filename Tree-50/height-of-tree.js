{/*
    Height of Binary Tree

Given a binary tree, find its height.

The height of a tree is defined as the number of edges on the longest path from the root to a leaf node. A leaf node is a node that does not have any children.

Examples:

Input: root[] = [12, 8, 18, 5, 11] 
 
Output: 2
Explanation: The longest path from the root (node 12) goes through node 8 to node 5, which has 2 edges.
Input: root[] = [1, 2, 3, 4, N, N, 5, N, N, 6, 7]  

Output: 3
Explanation: The longest path from the root (node 1) to a leaf node 6 with 3 edge.
Input: root[] = [1]
     1
Output: 0
Explanation: The tree consists of only one node (node 1) and has no edges, so the height is 0.


solution:

class Solution {
    // Function to find the height of a binary tree.
    int height(Node node) {
        // code here
        if(node==null)
        {
            return 0;
        }
        Queue<Node>queue=new LinkedList<>();
        queue.add(node);
        int level=0;
        
        while(!queue.isEmpty())
        {
            int count=queue.size();
            for(int i=0;i<count;i++)
            {
                Node curr=queue.poll();
                if(curr.left!=null)
                {
                    queue.add(curr.left);
                }
                 if(curr.right!=null)
                {
                    queue.add(curr.right);
                }
            }
            level++;
        }
        return level-1;
    }
}




                           OR

class Solution {
    // Function to find the height of a binary tree.
    int height(Node node) {
        // code here
        if(node==null)
        {
            return -1;
        }
       
       int left=height(node.left);
       int right=height(node.right);
       
       return Math.max(left,right)+1;
    }
}
*/}