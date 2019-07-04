// node ShoppingCart.js Beans Beans Beans Beans
// command to run script

// variables
// number of each item in list
var countBread = 0;
var countOnions = 0;
var countMilk = 0;
var countBeans = 0;

// Total and pre discount total
var subTotal = 0;
var Total = 0;

// Total price of each item without discount
var breadTotal = 0;
var onionTotal = 0;
var milkTotal = 0;
var beansTotal = 0;

// Boolean values to check if discount can be applied
var isDiscountOnions = false;
var isDiscountBread = false;
var isDiscountBeans = false;
var isDiscountMilk = false;




function Main(){
    // Total price of Braed
for (var i = 0; i < process.argv.length; ++i) {
    if (process.argv[i] == "Bread")
        countBread++;
    breadTotal = countBread * 0.85;
}

// Total price of Onions
for (var i = 0; i < process.argv.length; ++i) {
    if (process.argv[i] == "Onions")
        countOnions++;
    if (countOnions > 0) {
        isDiscountOnions = true;
    }

    var onionItems = 0;
    var onionFinal = 0;
    onionTotal = countOnions * 1.10;
    onionItems = countOnions * 0.9;
    onionFinal = onionItems * 1.10;
}

// Total price of Milk
for (var i = 0; i < process.argv.length; ++i) {
    if (process.argv[i] == "Milk")
        countMilk++;
    milkTotal = countMilk * 1.20;
}

// Total price of Beans
for (var i = 0; i < process.argv.length; ++i) {
    if (process.argv[i] == "Beans")
        countBeans++;

    if (countBeans > 2) {
        isDiscountB = true;
    }

    var remainderBeans = 0;
    var numCalc = 0;
    var numBeans = 0;
    var beansTotal2 = 0;
    var remainderTotal = 0;
    var beansFinal = 0;

    beansTotal = countBeans * 0.70;
    // 4 x 0.7 = 2.8
    remainderBeans = countBeans % 3;
    // 1
    numCalc = countBeans - remainderBeans;
    // 3
    numBeans = ((numCalc / 3) * 2.5);
    // 2.5
    beansTotal2 = numBeans * 0.70;
    // 1.75

    remainderTotal = remainderBeans * 0.70;
    // 0.70
    beansFinal = remainderTotal + beansTotal2
}


// function to ouput result.
function OutputTotal(breadTotal, beansTotal, milkTotal, onionTotal, beansFinal, onionFinal){

    console.log("---------------------")
    subTotal = (breadTotal + onionTotal + milkTotal + beansFinal).toFixed(2);
    Total = (breadTotal + onionFinal + milkTotal + beansFinal).toFixed(2);
    //subTotal = Math.round(subTotal * 100) / 100
    console.log("Subtotal: " + subTotal)


    if (countBeans > 2) {
        console.log("Buy two tins of beans and get one half price: -" + (beansTotal - beansFinal).toFixed(2) + "p")
    } else if (countBeans < 3 && countOnions == 0 & countMilk == 0 && countBread == 0)
        console.log("(Discount: none)")

    if (isDiscountOnions == true) {
        console.log("Onions: 10% off this month: -" + (onionTotal - onionFinal).toFixed(2) + "p")
    }

    if (countBread > 0 && countMilk < 1 && countOnions < 1 && countBeans < 3) {
        console.log("(Discount: none)")
    }

    
    
    if (countMilk > 0 && countOnions < 1 && countBeans < 3) {
        console.log("(Discount: none)") 
    }

    


    console.log("Total: " + Total)
}

OutputTotal(breadTotal, beansTotal, milkTotal, onionTotal, beansFinal, onionFinal);

}

// Error Handling
function Error(){
    if (process.argv.length < 3){
    console.log('Enter either Bread, Beans, Onions or Milk')
    return
    } else if (process.argv.includes('Bread') || process.argv.includes('Beans') || process.argv.includes('Onions') || process.argv.includes('Milk')){
        Main();

    } else {
      console.log('Enter either Bread, Beans, Onions or Milk')
        return  
    }

}

Error();
