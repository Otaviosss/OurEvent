function logar(){
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;
        if(login == "Admin" && senha == "1234"){
            alert('sucesso');
            location.href = 'Login.html';
        }
        else{
            alert('Usuario ou Senha incorretos')
        }
    }