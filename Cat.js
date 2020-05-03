function Cat(){  
    this.eat = []  
}
Cat.prototype.eat = function(){
    console.log("eat Mouse");
    
}

module.export = Cat;