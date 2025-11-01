// singleton = from constructor not through literals for ex like object.create 
 const jsUser = {    // creation of object using object literal
    name: 'John',
    age: 30,
    email: "john@gmail.com",
    location: "USA",

 }
    console.log(jsUser.email);
    console.log(jsUser["email"]);
    

    // to create a symbol
      const sym = Symbol("key1");  
      const hello = {

         [sym]: "value1",     // ye method bss. object literal ke andar hi use hota hai yaha object hello tha 
      }
      
      // console.log(jsUser[sym]);

   jsUser.greeting = function(){   // adding method to object
      console.log("Hello there " + this.name);
   }

   console.log(jsUser.greeting());
