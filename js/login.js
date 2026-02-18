document.getElementById('login-btn').addEventListener('click', function(){
    
    let loginNumber = document.getElementById('login-number').value;
    let loginPin    =   document.getElementById('login-pin').value;

    if(loginNumber === '01234567890' && loginPin === '1234'){
        alert("Login Success");
        window.location.assign('../home.html');
    }
    else{
        alert('Login Failed');
        return;
    }
})