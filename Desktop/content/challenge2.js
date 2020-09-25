function confirmEnding(str, target) {
	//string length
	 let mainValueLen = str.length;
	 let targetValueLength = target.length;

	// making sure it takes what its needs..
	  let count  =  mainValueLen + -targetValueLength;

	   //subtrac values needed to compare...
	    let undone = str.substring(count,mainValueLen);
	  
	  //comparing final values...

	      if(undone == target)
	      {
	        return true;
	      }else
	      {
	      	return false;
	      } 
}

confirmEnding("Bastian", "n");