function Dog(){
    console.log("Dog");
    
}

Dog.prototype.eat = function(){
    console.log("Eat");
}
Dog.prototype.run = function(){
    console.log("Run");
    
}

exports.module = Dog;