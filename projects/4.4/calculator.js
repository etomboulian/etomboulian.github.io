
let calculator = {
    num1: 0,
    num2: 0,

    read(){    
        this.num1 = parseInt(prompt("Please enter the first number", ""));
        this.num2 = parseInt(prompt("Please enter the second number", ""));
    },

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    }

}


calculator.read();
alert("sum is: " + calculator.sum());
alert("product is: " + calculator.mul());