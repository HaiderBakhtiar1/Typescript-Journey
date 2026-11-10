// let age = 22;
// let name = "Haider";
// let isAlive = true;

// let animal;


// let ids : number[] = [];

// ids[0] = 0;
// ids[1] = 2

// ids.forEach(n => n.)

// let user : [number, string] = [1, "Haider"];
// user.push(2);

// console.log(user);

// const enum Size {Small = 1, Medium, Large}

// let mySize : Size = Size.Medium;

// console.log(mySize);


// let myName : string = "Haider";

// let student1: [string, number, boolean] = ["Haider", 98, true];
// let student2: [string, number, boolean] = ["Ali", 77, true];
// let student3: [string, number, boolean] = ["Moiz", 49, false];
// let student4: [string, number, boolean] = ["Sarah", 22, false];
// let students: [string, number, boolean][] = [student1, student2, student3,student4];

// for(let student of students){
//     console.log("Name: ", student[0]);
//     console.log("Marks: ", student[1]);

//     if(student[2] == true ){
//         console.log("Status: Passed");
        
//     }

//     else{
//         console.log("Status: Failed");
        
//     }

//     console.log("-------------");
        
// }


// let product1: [string, number, number] = ["Keyboard", 800, 2];
// let product2: [string, number, number] = ["Mouse", 500, 4];
// let product3: [string, number, number] = ["Monitor", 4000, 1];
// let product4: [string, number, number] = ["Graphics Card", 7000, 1];

// let products: [string, number, number][] = [product1,product2,product3,product4];

// let totalCartCost : number = 0;

// for(let product of products){
//     console.log("Product Name: ", product[0]);
//     console.log("Product Price: ", product[1]);
//     console.log("Product Quantity: ", product[2]);

// let cost = product[1]*product[2]
// console.log("Product Cost", cost);

//     console.log("----------");

//     totalCartCost += cost
//     }

//     console.log("total Cart" , totalCartCost);
    

enum TrafficLight {Red, Orange, Green};

function checkTrafficLight(light: TrafficLight) {


if(light === TrafficLight.Red){
console.log("Stop");
}

else if(light === TrafficLight.Orange){
    console.log("Be Ready");
    }
    else{
        console.log("Go");
        
    }
}

let currentTrafficLight: TrafficLight = TrafficLight.Green;

checkTrafficLight(currentTrafficLight)







