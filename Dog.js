function Dog(){
    console.log("Dog");
    
}

Dog.prototype.eat = function(){
    console.log("Eat");
}

exports.module = Dog;