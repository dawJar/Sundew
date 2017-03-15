$(document).ready(function () {

    let clearBtn = $('input#clear');
    let submitBtn = $('input#submit'); 

    const contactForm = (function () {

        let inputName = $('input#name');
        let inputEmail = $('input#email');
        let inputMsg = $('input#msg');

        let clearInputs = () => {
            inputName.val('');
            inputEmail.val('');
            inputMsg.val('');
        };

        let handleClickClear = (e) => {
            e.preventDefault();
            clearInputs();
        };

        let handleClickSubmit = (e) => {
            clearInputs();
        };

        return {
            handleClickClear,
            handleClickSubmit
        };

    })();

    clearBtn.on('click', contactForm.handleClickClear)
    submitBtn.on('click', contactForm.handleClickSubmit)

});
