const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
i=0;
// Write a while loop that prints out the contents of ingredients:
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++
}
// Write a for loop that prints out the contents of ingredients:
for(let ingredient of ingredients){
  console.log(ingredient);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(i = ingredients.length - 1; i > -1; i--){
  console.log(ingredients[i]);
}