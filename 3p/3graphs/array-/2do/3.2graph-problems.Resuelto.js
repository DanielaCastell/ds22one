/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
*/


/* PROBLEM 1 indicates whether x is a squared matrix */ 

let matriz1 = [
  [0,1,0,0],
  [1,0,1,1],
  [0,1,0,1],
  [0,1,1,0],
  ];
  function isSquare(x){
    for (let i=0;i<x.length;i++)
      if(x.length!==x[i].length)
        return console.log(false);
    return console.log(true);
  }
  console.log("Esta matriz es cuadrada")
  isSquare(matriz1)

 /* PROBLEM 2 indicates whether x is a symmetrical matrix */
 let z = [
  [0,1,0,0],
  [1,0,1,1],
  [0,1,0,1],
  [0,1,1,0],
  ];

  function isSymmetrical(x){
      for(let i=0; i < x.length; i++){
          for(let j=0; j < x[i].length; j++){
              if(x[i][j] != x[j][i]){
                  return console.log(false);
              }
          } 
        }
        return console.log(true);
  }
  
  console.log("Esta matriz es simetrica")
  isSymmetrical(z)

 /* PROBLEM 3 z PROBLEM 4  isTree(t) indicates whether t is a tree isGraph(q) indicates whether q is a graph */

 class M{
  constructor(matriz){
    this.matriz=matriz;
  }
    TREE(matriz){
    let sum=0;
    let cont=0;
    let colum=0;
    
     for(let i=0;i<matriz.length;i++){
         for(let j=0;j<matriz[i].length;j++){
             cont++;
             colum =cont/matriz.length;

        }
     }

     for(let i=1;i<matriz.length;i++){
         sum=0;
         for(let j=0;j<colum;j++){
             if(j<i){
                 sum+=matriz[i][j];
                 if(sum > 1){
                     return console.log(false);
              }
            }
         }
    }
      return console.log(true);     
  }
  
  esGrafo(matriz){
    if(matriz.TREE(matriz) == false){
      return console.log(true);
    }
    else{
      return console.log(false);    
    }
      
  }
  
}
   
let x = [
[0,1,0,0],
[1,0,1,1],
[0,1,0,1],
[0,1,1,0],
];
 let a = new M(x);
 console.log("Es un arbol")
a.TREE(a);
console.log("Es un grafo")
a.esGrafo(a);

