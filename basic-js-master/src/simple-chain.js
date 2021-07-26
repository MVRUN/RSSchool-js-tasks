const chainMaker = {
   arr: [],
   
  getLength() {
    this.arr.length;
  },
  addLink(value) {
    if (value === "") {
    this.arr.push("()");
    }
    else {
    this.arr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if(typeof(position) != "number") {
      this.arr = [];
      throw new Error();
    }
    else {
      this.arr.splice(position - 1, 1);
    }
    return this;
    
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chainOver = this.arr.join("~~");
    this.arr = [];
    return chainOver;
  }
};

module.exports = chainMaker;
