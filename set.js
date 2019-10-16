// Sets

let MySet= function()
{
   let collection = [];
   
   //this method will check for the presention of an element and return true or false
   this.has = function(element)
   {
       return (collection.indexOf(element) !== -1);
   }

   //this method will return all the values of the set
   this.values = function(){
       return collection;
   }

   //this method will add an element in the set
   this.add = function(element)
   { 
         if(!this.has(element))
         {
             collection.push(element);
             return true;
         }
         return false;
   }
   
   // this method will remove an element from a set
   this.remove = function(element)
   {
          if(this.has(element))
          {
              index = collection.indexOf(element);
              collection.splice(index,1);
              return true;
          }
          return false;
   }

   this.size = function()
   {
       return collection.length;
   }
   this.union = function(otherSet){

       let unionAllSet = new MySet();
       let firstSet = this.values();
       let secondSet = otherSet.values();
      
       firstSet.forEach(value=>{
           unionAllSet.add(value);
       });
       secondSet.forEach(value=>{
          unionAllSet.add(value);
       });
       return unionAllSet;
   }

   this.intersection = function(otherSet)
   {
       let interSection = new MySet();
       let firstSet     = this.values();

       firstSet.forEach(e=>{
            
            if(otherSet.has(e))
            {
                interSection.add(e);
            }
       });


       return interSection;
   }
   this.difference = function(otherSet)
   {
       let differenceSet = new MySet();
       let firstSet      = this.values();
      
       firstSet.forEach(e=>{
             if(!otherSet.has(e))
             {
                 differenceSet.add(e);
             }
       });
       return differenceSet;
   }
   this.subset = function(otherSet)
   {
       let firstSet = this.values();
       return firstSet.every(e=>otherSet.has(e));
   }

}

let A = new MySet();
A.add(20);
A.add(30);
A.add(10);
A.add(5);
// console.log(A.remove(30));
let B = new MySet();
B.add(40);
B.add(20);
B.add(5);
B.add(10);
B.add(30)
console.log(A.subset(B));
// console.log(A.intersection(B).values());