const Http = new XMLHttpRequest();
// console.log(http)
var url ='https://jsonplaceholder.typicode.com/posts';
Http.open('GET' , url);
Http.send();

Http.onreadystatechange = function(){
   if(this.readyState==4 && this.status == 200){
    console.log(Http.responseText);
  }
}

$(document).ready(function(){
  $('.btn').on("click",function(){
   const Url  = 'https://jsonplaceholder.typicode.com/posts';
   $.ajax({
     url : Url,
     type : "GET",
     success : function(result){
       console.log(result);
     },
     error : function(error){
       console.log(`Error ${error}`);
     }
   })
  })   // close for btn
})  // close for document function


fetch('https://jsonplaceholder.typicode.com/posts')
.then( data => data.json())
.catch( error => console.log(error));
