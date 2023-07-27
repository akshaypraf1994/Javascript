l
//local and global concept in javascripts

let p = 9
function ax() {
  let a = 8;
  console.log(p)
  console.log(a)
}

ax()
console.log(p)
console.log(a)




// ==================================================

//event loop

setTimeout(function timer() {
    console.log('You clicked the button!');
  }, 2000); 
  
  console.log("Hi!");
  
  setTimeout(function timeout() {
    console.log("Click the button!");
  }, 5000);
  
  console.log("Welcome to loupe.");



  //==========================================

//closures in javascript

function returnFunc() {
    const x = () => {
      let a = 1
      console.log(a)
      const y = () => {
        // let a = 2
        console.log(a)
        const z = () => {
          // let a = 3
          console.log(a)
        }
        z()
      }
      a = 999
      y()
    }
    return x
  }
  
  let a = returnFunc()
  a()