/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 */

    function Node(data) {
    this.data = data
    this.next = null
 }
 
 let n1 = new Node(3)
 let n2 = new Node(-2)
 let n3 = new Node(1)

 n1.next=n2
 n2.next=n3

 function contains(X,K){
   let temp;
   let t=X;
   
    while(t){
     if(t.data == K){
       temp = "true"
       t = null
     }
     else{
         t = t.next
      }
    }
    
    if(temp=="true"){
      console.log(true)
    }
    else{
      console.log(false)
    }
  }
  
  contains(n1,1)