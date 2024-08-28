// getter and setter 

/*
  In simpler terms, getters and setters are like controlled doors. You decide who gets in or out (setters) and what others can see (getters) from the outside.

  1. Control: You can control what happens when you read or change a property.
  2. Validation: You can make sure the data being set is valid (e.g., no empty names or negative ages).
  3. Encapsulation: You keep the actual data private and only expose what you want through getters and setters.
*/

/*
  ## EXPLAINED BY CHAT-GPT

  
*/

// Define a Person class
class Person {
    // The constructor method is called when we create a new instance of the Person class
    constructor(name) {
      // Here, we store the actual name value in a private variable _name
      // The underscore is a common convention to indicate that this is a private variable
      this._name = name;
    }
  
    // This is the getter method for the 'name' property
    // When you access person.name, this method is automatically called
    get name() {
      // The getter returns the value of the private variable _name
      // It does NOT call this.name, which would cause an infinite loop
      return this._name; // This is correct because it returns the private _name
    }
  
    // This is the setter method for the 'name' property
    // When you set person.name = "new name", this method is automatically called
    set name(newName) {
      // Here, we check if the new name is not empty
      if (newName.length > 0) {
        // If the name is valid, we update the private _name variable with the new value
        this._name = newName; // This is correct because it updates the private _name
      } else {
        // If the name is empty, we log an error to the console
        console.error("Name cannot be empty");
      }
    }
  }
  
  // Let's create a new Person instance
//   let person = new Person("Alice"); // The constructor is called with "Alice" as the initial name
  
  // Now, let's use the getter to access the name
//   console.log(person.name); // Output: Alice
  // person.name calls the get name() method, which returns the value of _name ("Alice")
  
  // Let's change the name using the setter
//   person.name = "Bob"; // This calls the set name() method with "Bob" as the new value
  
  // After setting, let's check the name again
//   console.log(person.name); // Output: Bob
  // The name has been updated to "Bob" because the set name() method updated _name
  
  // Let's try setting an invalid name
//   person.name = ""; // This will trigger the error inside the setter
  // Output: "Name cannot be empty"
  // Since the newName is empty, the setter does not update _name and shows an error instead
  

// The key to avoiding the "call stack full" error is to ensure the getter and setter do not directly reference the property they are defining (i.e., this.name). Instead, they should work with a separate private variable (this._name).



// Practicing the getter and setter
// this is the least confusing way
class User{
    constructor(privateName){
        this.name = privateName
        // _name = means private property which should not be accessible outside class
    }

    get privateName(){  // A 'get' accessor cannot have parameters.
        // this._name = gettingName // this line is wrong since . getter always returns
        console.log("I am GET")
        return this._name

    }

    set privateName(settingName){
       if (settingName.length > 0){
        this._name = settingName
       }else{
        console.log("empty string")
       }
       console.log("I am SET")
    }
}

const data = new User("aniket") 
console.log(data.name)


// correction done by chatgpt

class UserGPT {
    // Constructor function to initialize the class with a private name
    constructor(privateName) {
        // Use a private property (conventionally denoted with an underscore)
        this._name = privateName;
    }

    // Getter method to retrieve the private name
    get privateName() {
        // The getter should simply return the value of _name, not set it
        // Incorrect line: this._name = gettingName;
        console.log("I am GET");
        return this._name; // Return the name so that it can be accessed
    }

    // Setter method to set or update the private name
    set privateName(settingName) {
        // Validate input to ensure it’s not an empty string
        if (settingName.length > 0) {
            this._name = settingName; // Set the private name
        } else {
            console.log("empty string"); // Log a warning if the input is invalid
        }
        console.log("I am SET");
    }
}

// Example usage:
const dataGPT = new UserGPT("John Doe"); // Initialize a new User object with a name

// Attempt to set the name to an empty string
// This will trigger the setter method and log "empty string"
dataGPT.privateName = "";

// Attempt to retrieve the name
// This will trigger the getter method and log "I am GET"
const nameDataGPT = dataGPT.privateName;

console.log(nameDataGPT); // Log the name (it should be "John Doe" since the empty string wasn't accepted)


