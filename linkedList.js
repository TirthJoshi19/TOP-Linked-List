let exArray = [];

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value, null);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;
      this.length++;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head); // Create a new node with the given value and make its next node the current head
    this.head = newNode; // Update the head of the list to be the new node
    this.length++;
  }

  size() {
    return this.length + 1;
  }

  returnHead() {
    return this.head;
  }

  returnTail() {
    let current = this.head;
    if (!current) {
      return null;
    }
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  atIndex(index) {
    if (index < 0 || index > this.size()) {
      return null;
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex !== index) {
        current = current.nextNode;
        currentIndex++;
      }
      return current;
    }
  }

  pop() {
    let previous = null;
    let current = this.head;

    if (!this.head) {
      return null;
    }
    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    if (previous === null) {
      this.head = null;
    } else {
      previous.nextNode = null;
    }
    this.length--;
    return current.value;
  }

  contains(value) {
    let current = this.head;

    if (current === null) {
      return false;
    }
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let index = 0;
    let current = this.head;
    if (index < 0 || current == null || value == undefined) {
      return false;
    }
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.nextNode;
      index++;
    }
  }
  toString() {
    let current = this.head;
    let printOutput = `( ${this.head.value} ) -->`;

    if (current === null) {
      return 'This list is empty...';
    }
    while (current.nextNode !== null) {
      current = current.nextNode;
      printOutput += ` ( ${current.value} ) --> `;
    }
    printOutput += null;
    return printOutput;
  }

  insertAt(index, value) {
    if (index < 0) {
      console.error('index is out of bounds');
      return;
    }
    let newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let currIndex = 0;

    if (current === null) {
      console.error('Invalid Index');
      return;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }
  removeAt(index) {
    if (index < 0) {
      console.error('Index is out of bounds');
      return;
    }
    if (index === 0) {
      if (this.head === null) {
        console.error('List is empty');
        return;
      }
      this.head = this.head.nextNode;
      return;
    }
    let current = this.head;
    let prev = null;
    let currIndex = 0;

    while (current !== null && currIndex < index) {
      prev = current;
      current = current.nextNode;
      currIndex++;
    }
    if (current === null) {
      console.error('Index is out of bounds');
      return;
    }
    prev.nextNode = current.nextNode;
  }
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const a = new LinkedList();
a.append('l');
a.append('v');
a.append('v');
a.insertAt(1, 'foo');
console.log(a.toString());
