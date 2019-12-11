const MEMORY = require('./memory');
let memory = new MEMORY();

class customArray {
  constructor(memAllo = 10, size_ratio = 2) {
    this.length = 0;
    this.size = memAllo;
    this.size_ratio = size_ratio;
    this.ptr = memory.allocate(memAllo);
  }

  setSizeRatio(size) {
    if (size < 0 || size > 999999999999999999999999999999999999) {
      throw new Error('Nope');
    }
    this.size_ratio = size;
  }

  checkIndex(indx) {
    if (indx < 0 || indx >= this.length) {
      throw new Error('Index out of bounds.');
    }
  }

  checkMem() {
    if (this.length + 1 > this.size) {
      let newPtr = memory.allocate(this.size * this.size_ratio);
      memory.copy(newPtr, this.ptr, this.size);

      this.size = this.length * this.size_ratio;
      this.ptr = newPtr;
    }
  }

  push(element) {
    this.checkMem();
    memory.set(this.ptr + this.length, element);
    this.length++;
  }

  pop() {
    if (this.length > 0) {
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

  remove(index) {
    this.checkIndex();

    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }

  length() {
    return this.length;
  }
}

module.exports = customArray;