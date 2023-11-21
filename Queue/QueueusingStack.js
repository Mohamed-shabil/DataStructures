class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop());
            }
        }
        this.stack2.pop();

        while(this.stack2.length >0){
            this.stack1.push(this.stack2.pop());
        }
    }
    peek(){
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop());
        }
        let peek = this.stack2[this.stack2.length-1]
        while(this.stack2.length>0){
            this.stack1.push(this.stack2.pop());
        }
        return peek;
    }
}