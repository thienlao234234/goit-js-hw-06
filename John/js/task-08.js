const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
    }
    const dataEl = {
        email: email.value,
        password: password.value,
    };
    console.log(dataEl)
   event.currentTarget.reset();
}
