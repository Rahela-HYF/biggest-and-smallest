function resetHandler() {
  debugger;
  // reset state to initial values

  numbers.current = 0;
  numbers.smallest = Infinity;
  numbers.biggest = -Infinity;
  numbers.all = []; 

  
  // re-render UI with values saved in state
  document.getElementById('input').value = numbers.current;
  document.getElementById('biggest').value = numbers.biggest;
  document.getElementById('smallest').value = numbers.smallest; 
  // log interaction: handler name, new state
  log.push({
    handler: 'reset',
    numbers: JSON.parse(JSON.stringify(numbers))
  });

}
