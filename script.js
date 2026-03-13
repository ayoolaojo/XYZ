
const btn = document.getElementById('btn')
const ul = document.getElementById('users')

btn.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(data => data.forEach(user=>{
        const li = document.createElement('li')
        li.textContent = user.name

      ul.appendChild(li)
    }))

   
   


        
})




