function saveNumberHandler() {
  debugger;
  // read new number from user input
  const newInput = document.getElementById('input').value;
  
   current = newInput;
  // read from state the data you will need for the next step
 // const newCurrent = numbers.current;

  // find the new biggest and smallest values
  if(current >= numbers.biggest){
  numbers.biggest = current;
  numbers.smallest = numbers.smallest;

/*  numbers.push(numbers.biggest);
  numbers.biggest = newBiggest;*/
    
  }else if(current < numbers.smallest){
    numbers.smallest = current;
    numbers.biggest = numbers.biggest;

  /*numbers.push(numbers.smallest);
    numbers.smallest = newSmallest;*/
 
  }

  // update state: new biggest, new smallest, new current & save the last current

 //numbers.past.push(numbers.current);
   //numbers.current = newCurrent;

 
  // re-render the user interface with values stored in state

  document.getElementById('input').innerHTML = numbers.current;
  document.getElementById('biggest').innerHTML = numbers.biggest;
  document.getElementById('smallest').innerHTML = numbers.smallest;

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
