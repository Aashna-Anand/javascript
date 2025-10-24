// singleton = from constructor not through literals for ex like object.create 
 const jsUser = {    // creation of object using object literal
    name: 'John',
    age: 30,
    email: "john@gmail.com",
    location: "USA",

 }
    console.log(jsUser.email);
    console.log(jsUser["email"]);
    

    // to create a sumbol as a key
      const sym = Symbol("key1");  
      [sym]; "value1"
      
      // console.log(jsUser[sym]);

   jsUser.greeting = function(){   // adding method to object
      console.log("Hello there " + this.name);
   }

   console.log(jsUser.greeting());
