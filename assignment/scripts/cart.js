console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];
console.log(`Basket is ${basket}`);
function addItem (item){
  if (item >= 0){
    console.log('That is not a proper item.')
    return false;
  }
  else if (item < 0){
    console.log('That is not a proper item.')
    return false;
  }
  else if (item = item){
    basket.push(item);
    console.log('We have added', basket, 'to the basket.');
    return true;
    }
  }
addItem('Cheese');
addItem(4);
console.log(`Basket is now ${basket}`);
addItem('Bacon');
console.log(`Basket is now ${basket}`);


function listItems(){
  for( let i=0; i<basket.length; i++){
    console.log('Your cart contains', basket[i]);
  }
}
listItems()

function RemoveItems(){
  basket.length = 0;
  console.log(basket);
}
RemoveItems()
addItem('Water');
listItems()
