async function loginUser() {

    const email =
    document.getElementById('email').value;

    const password =
    document.getElementById('password').value;

    try {

        const response =
        await fetch(

            'http://localhost:3000/api/auth/login',

            {
                method:'POST',

                headers:{
                    'Content-Type':'application/json'
                },

                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data =
        await response.text();

        console.log(data);

        if(data.includes('token')){

            localStorage.setItem(
                'token',
                data.token
            );

            alert('Login Success ✅');

            window.location =
            'dashboard.html';

        }else{

            alert(data.message);
        }

    } catch(error){

        console.log(error);

        alert('Server Error ❌');
    }
}