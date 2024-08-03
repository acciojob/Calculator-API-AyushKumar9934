// Add the Calculator APIs

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
  
});
app.post('/add',(req,res,next)=>{
  let num1=req.body.num1;

  let num2=req.body.num2;
  
  if(num1<-1000000 || num2<-1000000){

    res.send({status:"error",message: "Underflow",  
     })
  }
   if(num1>1000000 || num2>1000000){

    res.send({status:"error",message: "Overflow",  
      })
  }
 if(typeof(num1)!='number' || typeof(num2)!='number'){
   
    res.send({status:"error",message: "Invalid data types",  
    })

  }
 
  else res.send({status:"success",message: "the sum of given two numbers",  
    sum: num1+num2})
})
app.post('/sub',(req,res,next)=>{
  let num1=req.body.num1;

  let num2=req.body.num2;

  if(num1<-1000000 || num2<-1000000){

    res.send({status:"error",message: "Underflow",  
     })
  }
   if(num1>1000000 || num2>1000000){

    res.send({status:"error",message: "Overflow",  
      })
  }
 if(typeof(num1)!='number' || typeof(num2)!='number'){
    console.log(typeof(num1))
    res.send({status:"error",message: "Invalid data types",  
    })

  }
  if(num2>num1){
    res.send({status:"error",message:"Cannot divide by zero"})
  
   }
 
  else res.send({status:"success",message: "the difference of given two numbers",  
    difference: num1-num2})
})
app.post('/multiply',(req,res,next)=>{
  let num1=req.body.num1;

  let num2=req.body.num2;
  if(num1<-1000000 || num2<-1000000){

    res.send({status:"error",message: "Underflow",  
     })
  }
   if(num1>1000000 || num2>1000000){

    res.send({status:"error",message: "Overflow",  
      })
  }
 if(typeof(num1)!='number' || typeof(num2)!='number'){
    console.log(typeof(num1))
    res.send({status:"error",message: "Invalid data types",  
    })

  }
 
  else res.send({status:"success",message: "The product of given numbers",  
    result: num1*num2})
})
app.post('/divide',(req,res,next)=>{
  let num1=req.body.num1;

  let num2=req.body.num2;
  if(num1<-1000000 || num2<-1000000){

    res.send({status:"error",message: "Underflow",  
     })
  }
   if(num1>1000000 || num2>1000000){

    res.send({status:"error",message: "Overflow",  
      })
  }
 if(typeof(num1)!='number' || typeof(num2)!='number'){
    console.log(typeof(num1))
    res.send({status:"error",message: "Invalid data types",  
    })

  }
 if(num2===0){
  res.send({status:"error",message:"Cannot divide by zero"})

 }
 else res.send({status:"success",message: "The division of given numbers",  
    result: num1/num2})
})
app.use('/',(req,res,next)=>{
  res.send({status:"error",message:"pageNotFound"})

})
 


//your code here 
module.exports = app;
