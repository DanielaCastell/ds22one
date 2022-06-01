

        /** INSTRUCTIONS
 *
 * create one file by program
 * implement n method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * create n linked-list with 1000-random-names
 * 'name3', 'name99', ..., 'name7'
 *
 * then look 'name7' up
 * returns true
 *
 * then look 'name3007' up
 * returns false
 *
 * use the method contains
 */

 function Node(data){
    this.data = data
    this.netx = null
}
 function contains(x,k){
   let temp;
     let t=x;
   
    while(t){
     if(t.data == k){
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
  let n= new Node(0)
  let p= new Node(1)

  n.next=p

    for(let i=0;i<1000;i++){
        let random = Math.floor(Math.random() * 1000 + 1);
        let x = new Node(`name${random}`)
        p.next = x
        p=x
    }
  contains(n,"name7");
  contains(n,"name3007");