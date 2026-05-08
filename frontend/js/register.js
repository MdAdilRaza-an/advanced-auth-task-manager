async function registerUser(){

    const name =
    document.getElementById('name').value;

    const email =
    document.getElementById('email').value;

    const password =
    document.getElementById('password').value;

    try{

        const response =
        await fetch(

            'https://advanced-auth-task-manager.onrender.com/api/auth/register',

            {
                method:'POST',

                headers:{
                    'Content-Type':'application/json'
                },

                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );

        const data =
        await response.text();

        alert(data);

        window.location =
        'index.html';

    }catch(error){

        console.log(error);

        alert('Server Error ❌');
    }
}