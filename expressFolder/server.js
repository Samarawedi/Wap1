const express = require('express');
const app = express();
app.use('/',(req,res,next) =>{
    console.log('serverhomepage content');
    const homepagecontent =
        //   <! doctype html>
         <html lang ='en'>
             <head>
                 <title>My Express Web app</title>
             </head>
             <body>
                 <h1>Wel Come To My First express app</h1>
             </body>
         </html>;
         res.send(homepagecontent);





})
app.listen(3000,()=> {
    console.log('web server started on port 3000');
});