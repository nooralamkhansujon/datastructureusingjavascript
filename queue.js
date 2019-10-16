
// Queue 

let Queue = function(){
   
  collection = [];

  this.print = function(){
      console.log(collection);
  };
  this.enqueue = function(element){
      collection.push(element);
  };
  this.dequeue = function(){
      return collection.shift();
  };
  
  this.front = function(){
      return collection[0];
  }
  this.size  = function(){
      return collection.length;
  };
  this.isEmpty = function(){
      return (collection.length == 0);
  }

}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
// console.log(q.front());
// console.log(q.dequeue());




// priority Queue 

let priorityQueue = function(){
    let collection = [];
    
    this.printCollection = function(){
        console.log(collection);
    }
    this.enqueue = function(element){

        if(this.isEmpty()){
            collection.push(element);
        }

        else{
            let added = false;
            for(let i=0;i < collection.length;i++){

                if(element[1] < collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    }
    this.dequeue = function(){
        let value = collection.shift();
        return value[0];
    }
    this.front = function(){
        let value = collection[0];
    }
    this.size = function(){
        return collection.length;
    }
    this.isEmpty = function(){
        return (collection.length == 0);
    }
}

let pq = new priorityQueue();
pq.enqueue(['Beau Carnes',2]);
pq.enqueue(['Quincy Larson',3]);
pq.enqueue(['Ewa Mitulska-wojcik',1]);
console.log(pq.printCollection());
console.log(pq.size());