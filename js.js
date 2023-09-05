
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let numberPhone = document.getElementById('phone').value;
    let old = document.getElementById('tentacles').value;
    let theme = document.getElementById('theme').value;

    console.log(
        `ФИО:${name}
Почта:${email}
Номер телефона:${numberPhone}
Тема консультации:${theme}
Возраст ребенка:${old}
Текст сообщения:${message}
`);

    alert('Сообщение отправлено!');
    this.reset();
});

/*
document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(feedbackForm);    
    }

    function formValidate(feedbackForm){
        let error = 0;
        let formReq = document.querySelectorAll('_req');

        for (let i = 0; i < formReq.length;i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')){
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }else if (input.getAttribute("type" === "checkbox" && input.checked === false)){
                formAddError(input);
                error++;
            }else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
*/