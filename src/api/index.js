const AUTH_URL = 'https://playlove.herokuapp.com/users/login'

export const makeAuth = async function makeAuth(phoneNumber, password){
  try {
    if(phoneNumber == '' || password==''){
      alert("Faltan datos por ingresar");
    }else{
      var dataToSend = {id_user: phoneNumber, password: password};
      var url = 'https://playlove.herokuapp.com/users/login';
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      let response = await fetch(url, {
        method: "POST",
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
      let responseJson = await response.json()
     return responseJson; 
    }  
  } catch (error) {
    console.log(error);
  }
}