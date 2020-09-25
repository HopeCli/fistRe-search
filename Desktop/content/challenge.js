function reverseString(str) {

  // make string into array
      let container = str.split("");
      // serverse the content of array
        let undone  = container.reverse();

        // from array to string
         let results = undone.join("");

   // end value
     return results;
}

reverseString("hello");
