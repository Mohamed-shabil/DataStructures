class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        this.items.pop();
    }
    display(){
        console.log(this.items.toString());
    }
}