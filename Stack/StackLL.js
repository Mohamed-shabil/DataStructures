// Stack using Linked List

class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(value){
        const newEl = new Node(value)
        if(this.top == null){
            this.top = newEl
        }else{
            newEl.next = this.top
            this.top = newEl
        }
        this.size++;
    }
    pop(){
        if(this.size<0){
            return null
        }
        const removeEl = this.top.value
        this.top = this.top.next
        this.size--;
        return removeEl
    }
    peek(){
        if(this.top == null){
            return null
        }else{
            return this.top
        }
    }

}