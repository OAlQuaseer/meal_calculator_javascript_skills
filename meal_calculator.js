
// Diner constructor

var Diner = function (name){
    
    this.dishes = [] ; 
    this.name = name || "default";
    
};

Diner.prototype.addDish = function ( dishName , dishCost) {
    
  this.dishes.push({
      
      dishName : dishName || " " ,
      dishCost : dishCost || 0
      
  });
    
};

Diner.prototype.getTotalOfDinerDishes = function (){
    
    return this.dishes.reduce(function(previousValue, currentValue, currentIndex, array){
        return previousValue + currentValue.dishCost ; 
    }, 0 );
}


Diner.prototype.printOutTotalBill = function () {
    
    console.log('Diner: ' + this.name + ', total dishes cost $' + this.getTotalOfDinerDishes());
    
}

var omar = new Diner("Omar AlQuaseer");
omar.addDish("chicken masala", 10);
omar.addDish("beef masala", 3);
console.log(omar);
omar.printOutTotalBill();