
             "use strict"
              let x = Math.floor(Math.random() * 101);
              let y = Math.floor(Math.random() * 101);
              document.getElementById("firstNum").innerHTML = x;
              document.getElementById("secondNum").innerHTML = y;
              function submitAnswer(){
                let ans = document.getElementById("ans").value;
                if (x + y == ans){
                  document.getElementById("status").innerHTML = "CORRECT";
                }
                else {
                  document.getElementById("status").innerHTML = "WRONG";
                }
              }
    
          