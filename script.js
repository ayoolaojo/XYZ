
const btn = document.getElementById('btn')
const ul = document.getElementById('')

btn.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(data => data.forEach(user=>{
        console.log(`${user.name} - ${user.email}`)
    }))

   
   


        
})

