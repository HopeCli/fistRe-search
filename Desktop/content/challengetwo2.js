function findLongestWordLength(str) {
  // divide string into array
     let stringer = str.split(" ");
     //array holder
       let container = [];


    // getting length values and insert into array holder
		     stringer.map(d =>{
		     	container.push(d.length);
		     })

     // getting the bigger number and setting value
		  let result = Math.max.apply(null, container); 

    return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
