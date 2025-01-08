{/*
    just use swappingg

    
    class Solution {
    // Function to convert a binary tree into its mirror tree.
    void mirror(Node node) {
        // Your code here
        if(node==null)
        {
            return ;
        }
        
        Queue<Node>queue=new LinkedList<>();
        queue.add(node);
        
        while(!queue.isEmpty())
        {
            Node curr=queue.poll();
            Node temp=curr.left;
            curr.left=curr.right;
            curr.right=temp;
            
            if(curr.left!=null)
            {
                queue.add(curr.left);
            }
            if(curr.right!=null)
            {
                queue.add(curr.right);
            }
        }
        
    }
}
*/}