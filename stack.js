// Stack 

// function :push,pop,peck,length,


//stack using function 
// let word = 'racacar';
// let rword = '';
// let letter = [];
// length = word.length


// // push data into stack
// for(let i=0;i<length;i++){
//     letter.push(word[i]);
// }

// // pop data off the stack
// for(let i =0;i<length;i++)
// {
//     w = letter.pop();
//     console.log(w);
//     rword +=w;
// }

// // check if two words is a palindrome or not 
// if(rword == word)
// {
//     console.log("This is a palindrome");
// }
// else{
//     console.log("This is not a palindrome");
// }



// Stack using class 

let Stack = function()
{
    this.count = 0;
    this.storage = [];
    // add a value to the stack
    this.push = function(value){
         this.storage.push(value);
         this.count++;
    }
    
    //remove and return the value at the end of the stack
    this.pop = function()
    {
        if(this.count == 0)
        {
            return undefined;
        }
        this.count--;
        let result = this.storage.pop();
        // let result = this.storage[this.count];
        // delete this.storage[this.count];
        return result;
    }
    this.peck = function()
    { 
       if(this.count == 0 )
       {
           return undefined;
       } 
       return this.storage[this.count - 1];   
    }
    this.size = function(){
        return this.count;
    }
}

let stack = new Stack;
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
console.log(stack.storage);
console.log(stack.size());
