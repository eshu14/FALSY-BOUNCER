function bouncer(arr) {
  var falseVals=[false, null, 0, "", undefined, NaN];
  var newArr=falseVals.filter(function(val){
  var index=arr.indexOf(val);
    console.log(index);
      if(index>=0)
      {
        arr.splice(index,1);
        
      }
      
  return arr;
  });
  
 console.log(arr);
}

bouncer([7,null, "ate",NaN, false, 9]);
