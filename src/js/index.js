//https://api.github.com/users/defunkt


var inputElement = document.querySelector('#git')
var avatar = document.querySelector('#avatar')

function buscargit(){
    axios.get(`https://api.github.com/users/${inputElement.value}`)
.then(res =>{

    avatar.setAttribute('src', res.data.avatar_url)
    
    document.getElementById('name').value = res.data.name
    document.getElementById('email').value = res.data.email
    document.getElementById('bio').value = res.data.bio
})
.catch(() => {
    alert(`O GitHub ${inputElement.value} não existe!`);
})
}