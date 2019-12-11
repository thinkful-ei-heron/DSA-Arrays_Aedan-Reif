const MEMORY = require('./memory');
let memory = new MEMORY();

class customArray {
    constructor(memAllo = 10) {
        this.length = 0;
        this.size = memAllo;
        this.ptr = memory.allocate(memAllo);
    }
    
    checkIndex(indx) {
        if(indx < 0 || indx >= this.length) {
            throw new Error('Index out of bounds.');
        }
    }

    checkMem() {
        if(this.length + 1 > this.size) {
            let newPtr = memory.allocate(this.size + 10);
            memory.copy(newPtr, this.ptr, this.size);
            
            this.size += 10;
            this.ptr = newPtr;
        }
    }

    push(element) {
        this.checkMem();
        memory.set(this.ptr + this.length, element);
        this.length++;
    }

    pop() {
        if(this.length > 0) {
            let lastElement = memory.get(this.ptr + this.length - 1);
            this.length--;
            return lastElement;
        } else throw new Error('Array must not be empty.');
    }

    get(indx) {
        this.checkIndex(indx);
        return memory.get(this.ptr + indx);
    }

    set(indx, value) {
        this.checkIndex(indx);
        memory.set(this.ptr + indx, value);
    }

    insert(index, value) {
        this.checkIndex(index);
        this.checkMem();

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        this.length++;
        memory.set(this.ptr + index, value);
    }
    // | c|x|1 |2 |3 |4 | 5| 
    // |c |1 |2 |3 |4 | 5| 5|
    remove(index) {
        this.checkIndex();

        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

    length() {
        return this.length;
    }
}

let x = new customArray();

x.push('something');

console.log(x);