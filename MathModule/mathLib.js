module.exports = function (){
    return {
      add: function(num1, num2) { 
          console.log("The sum of these two numbers is : ", num1 + num2);
           // add code here 
      },
      multiply: function(num1, num2) {
          console.log("The sum of these two numbers multiplied together is", num1 * num2);
           // add code here 
      },
      square: function(num) {
          console.log("The square root of the number is", num * num);
           // add code here 
      },
      random: function(num1, num2) {
          console.log("Here's a random number", Math.floor(Math.random()*num2)+num1);
           // add code here
      }
    }
  };