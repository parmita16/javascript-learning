const person = {
    name: "Luffy",

    regularFunction: function() {
        console.log(this.name);
    }
};

person.regularFunction();