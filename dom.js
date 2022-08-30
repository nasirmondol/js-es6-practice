document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container')
    container.style.border = '2px solid red'
})

function addBackgroundColor(){
const friends = document.getElementsByClassName('friend')
for(const friend of friends){
    friend.style.backgroundColor = 'yellow';
}

}
// document.getElementById('background').addEventListener('click', function (){
//     const backgrounds = document.getElementsByClassName('friend')
//     for(const background of backgrounds){
//         background.style.backgroundColor = 'red'
//     }
// })

// document.getElementById('add-friend').addEventListener('click', function(){
//     const container = document.getElementById('friend-container')
//     const friendDiv = document.createElement('div')
//     friendDiv.classList.add('friend')
//     friendDiv.innerHTML = `
//     <h3 class="friend-name">New friend-add</h3>
//     <p>Eveniet, distinctio.</p>
//     `
//     container.appendChild(friendDiv);
// })
document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container')
    const friendDiv =document.createElement('div')
    friendDiv.classList.add('friend')
    friendDiv.innerHTML = `
        <h3 class="friend-name">friend-3</h3>
        <p>Eveniet, distinctio.</p>
    `
    container.appendChild(friendDiv);
})