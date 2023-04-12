let form = document.querySelector('#form');

let user = [
    {
        email: 'promisedaniel027@gmail.com',
        password: 'Password',
    },
];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    if (userEmail == user[0].email) {
        if (userPassword == user[0].password) {
            form.submit()
         } else {
            alert('You dont have an account please sign in');
        }
    }

})


