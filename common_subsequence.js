
// write a function that take two string like s1  and s2 and return common longest subsequence 

// s1="atikulislam",s2='abd' =>'islamatikul';
//aaaa, aa =>aa,  
function find_subsequence (s1,s2){
    
    let d = '';
   ///s1 to array 
    s1 = [...s1];
    s2 = [...s2];
    s3 =[];
    s1.forEach(e=>{

         if(s2.indexOf(e) !== -1){
            s3.push(e);
            index = s2.indexOf(e);
            s2.splice(index,1);
         }
    })

    s3.forEach(e=>{
        d+=e;
    });
    return d;

   // s3 to arr
}

console.log(find_subsequence('ABXGD','ABD'));

// cities = ['dhaka','maniktola','rajshahi','Istanbul']

// let person = {
//     id:123,
//     name:'Recep',
//     town:'Istanbul'
// };
// console.log(find_subsequence('aaaa','aa'));

// let match3 = cities.find(function(item){
//    return item  == this.town
//   },person);
// console.log(match3);


