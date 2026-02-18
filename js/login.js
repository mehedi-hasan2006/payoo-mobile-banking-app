document.getElementById('login-btn').addEventListener('click', function(){
    
    let loginNumber = document.getElementById('login-number').value;
    let loginPin    =   document.getElementById('login-pin').value;

    if(loginNumber === '01234567890' && loginPin === '1234'){
        alert("Login Success");
        window.location.assign('/https://mehedi-hasan2006.github.io/payoo-mobile-banking-app/home.html');
    }
    else{
        alert('Login Failed');
        return;
    }
})