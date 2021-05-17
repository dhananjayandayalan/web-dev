var btn = document.querySelector('.btn');
var fullname = document.querySelector('.name');
var age = document.querySelector('.age');
var email = document.querySelector('.email');
var phone = document.querySelector('.phone');

function onload() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
            .then(value => {
                var values = value.results[0];
                fullname.innerHTML = `${values.name.title} ${values.name.first} ${values.name.last}`;
                age.innerHTML = `${values.dob.age}`;
                email.innerHTML = `${values.email}`;
                phone.innerHTML = `${values.phone}`
            });
}


// btn.addEventListener('click', () => {
//     fetch('https://randomuser.me/api')
//         .then(response => response.json())
//             .then(value => {
//                 var values = value.results[0];
//                 fullname.innerHTML = `${values.name.title} ${values.name.first} ${values.name.last}`;
//                 age.innerHTML = `${values.dob.age}`;
//                 email.innerHTML = `${values.email}`;
//                 phone.innerHTML = `${values.phone}`
//             });         
// });