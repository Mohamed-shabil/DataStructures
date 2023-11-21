class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++;
    }
    dequeue(){
        let item = this.items[front]
        delete this.items[front]
        this.front++
    }
    peek(){
        return this.items[this.front];
    }
}