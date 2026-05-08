async function loginUser() {

    const email =
    document.getElementById('email').value;

    const password =
    document.getElementById('password').value;

    try {

        const response =
        await fetch(
            'https://advanced-auth-task-manager.onrender.com/api/auth/login',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data =
        await response.json();

        console.log(data);

        if (data.token) {

            localStorage.setItem(
                'token',
                data.token
            );

            alert(data.message || 'Login Success ✅');

            window.location =
            'dashboard.html';

        } else {

            alert(data.message || 'Login Failed ❌');
        }

    } catch (error) {

        console.log(error);

        alert('Server Error ❌');
    }
}