class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
               root.right = newNode  
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(value, root=this.root){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    remove(value){
        this.root = this.removeNode(this.root,value);
    }
    removeNode(node,data){
        if(node == null){
            return null
        }
        if(data < node.value){
            node.left = this.removeNode(node.left,data);
            return node;
        }else if(data > node.value){
            node.right = this.removeNode(node.right,data)
            return node
        }else{
            if(node.left === null){
                return node.right
            }else if(node.right === null){
                return node.left
            }
            node.data = this.getMinValue(node.right)
            node.right = this.removeNode(node.right,node.data)
        }
    }

    getMinValue(node){
        let current = node
        while(this.root.left!=null){
            current = current.left
        }
        return current.value
    }

    getMaxValue(node){
        let current = node
        while(this.root.right!=null){
            current = current.right
        }
        return current.value
    }

    preOrder(root = this.root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}


const bst = new BinaryTree();

bst.insert(10)
bst.insert(11)
bst.insert(12)
bst.insert(13)
bst.insert(14)
bst.remove(11)
bst.preOrder()
console.log(bst.search(112))

