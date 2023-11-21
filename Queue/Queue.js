class Queue{
    constructor(){
        this.items = []
    }
    enqueu(element){
        this.items.push(element)
    }
    dequeu(){
        this.items.shift();
    }
    peek(){
        return this.items[0]
    }
}