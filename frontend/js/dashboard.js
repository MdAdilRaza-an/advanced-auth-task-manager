const token =
localStorage.getItem('token');

if(!token){

    window.location =
    'index.html';
}

function logout(){

    localStorage.removeItem('token');

    window.location =
    'index.html';
}