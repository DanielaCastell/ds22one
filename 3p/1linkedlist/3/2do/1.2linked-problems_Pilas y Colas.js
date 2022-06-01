
        /** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * linked-list (stack/queue) implementation exercise
 * 
 * zeeAlso edmodo
 */

 function Node(data) { 
   this.data = data
   this.next = null
}
  
    
function Linked(n) {
    this.head = n //node
    this.tail = n //node
    this.size = 1
    this.getHead = getHead
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    //this.contains = contains
}

function getHead(){return console.log(this.head)}

function prepend(n){ //new node
    n.next = this.head
    this.head=n
    this.size++
}

function append(n){ //new node
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){ 
	//console.log(c.key)
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}


  function Queue(n) {
    //props
    this.linked = new Linked(n)    
    //methods
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
}

//implement
function enqueue(n){
	this.linked.append(n);
  return console.log(n.data + ' Se agrego :D');
}
  
  function dequeue(n){
  	let temporal = this.linked.head;
    let a=null;
    
    if(temporal.data == n){
      this.linked.head = temporal.next;
      return console.log( n + ' Fue extraido :D');
    }
    else{
  	while(temporal != null){
    	if(temporal.data == n){
        a.next = temporal.next;
        return console.log(n + ' Fue extraido :D ');
      }
      a=temporal;
   		temporal= temporal.next;
  	}
   }
  }
  
  function front(){
  	return console.log("Front: " + this.linked.head.data);
  }
  
  function  back(){
  	return console.log("Back: " + this.linked.tail.data);
  }
  
  function toString(){
  	let temporal = this.linked.head;
  	while(temporal){
    	console.log(temporal.data);
    	temporal = temporal.next;
  	}
      console.log('\n')
  }
  
  function empty(){
    if(this.linked.head){
      return console.log("La cola no esta vacia");
    }
    else{
      return console.log("la cola esta vacia");
    }
  }
  
  
  
  function Stack(n) {
    //props
    this.linked = new Linked(n);  
    //methods
    this.push = push
    this.pop = pop
    this.peek = peek
}
  
  function  push(n){
    this.linked.prepend(n);
    return console.log(n.data + ' agregado con exito');
  }
  
  function pop(n){
      	let temporal = this.linked.head;
    let a = null;
    
    if(temporal.data == n){
      this.linked.head = temporal.next;
      return console.log( n + ' Extraido con exito');
    }
    else{
  	while(temporal != null){
    	if(temporal.data == n){
        a.next = temporal.next;
        return console.log(n + " Extraido con exito");
      }
      a = temporal;
   		temporal = temporal.next;
  	}
   }
  }
  
  function peek(){
    stack.linked.traverse();
  }
  
  let n1= new Node(1);
  let n2 = new Node(2);
  let n3 = new Node(3);
  let n4 = new Node(4);
  let n5 = new Node(5);
  let n6 = new Node(6);
  
  
  let queue = new Queue(n1);
  console.log("ES UNA COLA");
  queue.enqueue(n2);
  queue.enqueue(n3);
  queue.toString();
  queue.dequeue(2);
  queue.toString();
  queue.empty();
  queue.front();
  queue.back();
  console.log('\n')

  
  let stack = new Stack(n4);
  console.log("ES UNA PILA");
  stack.push(n5);
  stack.push(n6);
  stack.peek();
  stack.pop(6);
  stack.peek();