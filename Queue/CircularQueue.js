class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }
    enqueu(){
        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = element;
        this.currentLength ++
        if(this.front == -1){
            this.front = this.rear
        }
    }
    dequeue(){
        let item = this.items[this.front];
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength --
        return item
    }
    peek(){
        return this.item[this.front]
    }
}