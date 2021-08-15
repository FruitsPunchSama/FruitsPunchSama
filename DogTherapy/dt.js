function getDogImg(){
    fetch('https://dog.ceo/api/breeds/image/random')    //api call to dog.ceo
     .then( response => response.json())   //promise method to get the response as JSON from the server. 
     .then(jsonResponse => document.querySelector(".dogimg").src = jsonResponse.message)    
     .catch(() => console.log("An error has occured"))   //to display error if the fetch method fails.
}


