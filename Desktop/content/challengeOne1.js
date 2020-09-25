function largestOfFour(collection) {
 // setting --- super array
   let container = [];

  collection.map(d =>{
  	   /// getting max values for each array...
  	    //  setting the variable with result inside...
             let result = Math.max.apply(null, d);

        // push the result into super array 
            container.push(result);
       });
    // return super array...
        return container;
}

/// example values
largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
	   ]);
