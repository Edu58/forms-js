// const form = document.getElementById('form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const name = document.getElementById("name").value
//     const email = document.getElementById("email").value

//     console.log(name, email)
// })

function submittedForm(e) {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    alert(email)
}