/* 
///////////////
Conferindo se os valores dos inputs são válidos
///////////////
*/
const checkValue = (element) =>{
    /*
        variavel para conferir se o email é valido e conferindo o valor dos inputs com um if
     */
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(element.id == 'email' && element.value.match(validRegex) ||
    element.id == 'nome' && element.value.length > 1 || 
    element.id == 'tel' && element.value.length >= 8 ||
    element.id == 'service' && element.value != '' ||
    element.id == 'message' && element.value.length > 0
    ){
        let input = document.querySelector(`#container-${element.id}`)
        input.classList.remove('invalid')
        input.classList.add('valid')
        input.querySelector('#invalid').classList.add('aviso-closed')
    }
    else{
        let div = document.querySelector(`#container-${element.id}`)
        div.classList.remove('valid')
        div.classList.add('invalid')
        div.querySelector('#invalid').classList.remove('aviso-closed')
    }
    /* 
    /////////////////
    Conferindo se existe algum input invalido, caso não tenha o botão enviar é habilitado
    ////////////////
    */
    if(document.querySelector('.invalid')){
        let btn = document.querySelector('#btn-enviar')
        btn.disabled = true;
        btn.classList.remove('btn-valid')
        btn.classList.add('btn-invalid')
    }else{
        let btn = document.querySelector('#btn-enviar')
        btn.disabled = false;
        btn.classList.remove('btn-invalid')
        btn.classList.add('btn-valid')
    }
}

/*
///////////////////
Mensagem mostrando que o form foi enviado com sucesso
///////////////////
*/
const confirm = (event) =>{
    event.preventDefault()
    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email')
    let tel = document.querySelector('#tel')
    let service = document.querySelector('#service')
    let message = document.querySelector('#message')
    email.value = ''
    nome.value = ''
    tel.value = ''
    service.value = ''
    message.value = ''
    let successMessage = document.querySelector('#aviso')
    successMessage.classList.remove('aviso-closed')
    setTimeout(()=>successMessage.classList.add('aviso-closed'), 8000)
}