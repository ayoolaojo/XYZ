
const btn = document.getElementById('btn')
const ul = document.getElementById('users')
const showError = document.getElementById('error')

const loading = document.getElementById('loading')

// btn.addEventListener('click',()=>{
//     ul.innerHTML = ''
//     fetch('https://jsonplaceholder.typicode.com/posts')

//     .then((response)=>response.json())
//     .then(data=>{
//         data.forEach(post=>{
//             const li = document.createElement('li')

//             li.textContent = `${post.id  }    - ${post.title}`i
//             ul.appendChild(li)
//         })
//     })
   
// })

// btn.addEventListener('click',async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     data.forEach(user=>{
//         const li = document.createElement('li')
//         li.textContent = user.name

//         ul.appendChild(li)
//     })
// })

// btn.addEventListener('click', async()=>{
//     ul.innerHTML = ''
//     showError.textContent = ''
//     loading.textContent = 'Loading..'

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()

//         loading.textContent = ''

//         data.forEach(user =>{
//             const li = document.createElement('li')

//             li.textContent = user.name

//             ul.appendChild(li)
//         })


//     } catch (error) {
//         loading.textContent = ''
//         showError.innerText = 'Unable to load'
//     }

// })



// btn.addEventListener('click',async()=>{
//     ul.innerHTML = ''
//     showError.textContent = ''
//     loading.textContent = 'loading...'
//     btn.disabled = true
    

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/user')

//         const data = await response.json()
//         data.forEach(user=>{
//             const li = document.createElement('li')

//             li.textContent = user.email
//             ul.appendChild(li)
//             loading.textContent = ''
//         })
        
//     } catch (error) {
//         loading.textContent = ''
//         showError.textContent = 'Unable to Load'
//     }
    

// })

async function getData(url){
  const response = await fetch(url)
  const data = await response.json()
  return data

}

btn.addEventListener('click',async()=>{
    ul.innerHTML = ''
    showError.textContent = ''
    loading.textContent = 'loading...'

    try {
    const users = await getData('https://jsonplaceholder.typicode.com/users')

    users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = `${user.name} - ${user.email}`
        ul.appendChild(li)
        loading.textContent = ''
       
    })

    } catch (error) {
         
        showError.textContent = 'Unable to Load..'
    }
})
    
 



