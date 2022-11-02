const http = require('http');
 
const requestListener = (req, res)=>{
  console.log("Request is Incoming");
     
  const responseData = {
      message:"Welcome to Node JS",
    articleData:{
        articleName: "How to send JSON response from NodeJS in VS",
        category:"NodeJS",
        status: "published"
    },
    endingMessage:"Contact Developer for more...!"    
  }
   
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
};
 
const server = http.createServer(requestListener);
 
// server.listen(3000,'localhost', function(){
//     console.log("Server is Listening at Port 3000!");
// });
server.listen(3000)
