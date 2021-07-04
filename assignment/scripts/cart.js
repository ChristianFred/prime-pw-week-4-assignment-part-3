console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5;
let basket=[];
console.log(`Basket is ${basket}`);
function addItem (item){
  if (item >= 0){
    console.log('That is not a proper item.')
  }
  else if (item < 0){
    console.log('That is not a proper item.')
  }
  else if (item = item){
    basket.push(item);
    console.log('We have added', basket, 'to the basket.');
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

function Clear(){
  basket.length = 0;
  console.log(basket);
}
Clear()
addItem('Water')
listItems()
function isFull(){
  if (basket.length >= maxItems){
    console.log('too many items');
    return true
  }
  else if (basket.length < maxItems){
   console.log('you can keep adding items');
   return false
  }
}
console.log('Is your cart currently full?', isFull() );

function RemoveItem(item, number){
  const index = basket.indexOf(number);
  basket.splice(index, 1);
  console.log('We have removed an entry from your cart')
}
RemoveItem('Water')
addItem('Pizza')
addItem('Rockstar')
addItem('Fire')
addItem('Cheese Curds')
addItem('Candy')
console.log('Is your cart currently full?', isFull() );
listItems()
RemoveItem('Fire')
listItems()
console.log('Is your cart currently full?', isFull() );
