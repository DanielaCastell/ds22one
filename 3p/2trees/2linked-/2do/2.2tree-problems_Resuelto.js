/** INSTRUCTIONS
* 
* create one file by program
* implement a method, function, non-function solution
* solve each as requested
* may use code from previous exercises
* 
*
* PROBLEM 1
* inorder(n)
*
* traverses a tree in INORDER
*/



/* traverses a tree in INORDER*/
function Node(o){
   this.d=o
   this.l=null
   this.r=null
}
 console.log("ARBOL EN INORDER")
function inorder(n){
   if (n!==null){
     inorder(n.l)
     console.log(n.d)
     inorder(n.r)
   }
 }
let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')

a.l = b
a.r = c
b.l = d
b.r = e


inorder(a);
/* traverses a tree in POSORDER */
console.log("ARBOL EN POSORDER")
function posorder(n){
   if (n!==null){
     posorder(n.l)
     posorder(n.r)
     console.log(n.d)
   }
 }
 posorder(a);