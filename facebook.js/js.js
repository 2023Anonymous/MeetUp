const mineElement = document.querySelector('#mine');

console.log(mineElement);

//                              Get Attribute Method

let attr = mineElement.getAttribute('data-person');

console.log(attr);

//                              Set Attribute Method

mineElement.setAttribute('data-person', 'Promise')
mineElement.setAttribute('style', 'background-color: red; padding: 20px;')

attr = mineElement.getAttribute('data-person');

console.log(attr);

//                              Remove Attribute Method

mineElement.removeAttribute('style')

//                               Class List Property

// console.log(mineElement.classList);

//                               Adding class property mettod
// console.log(mineElement.classList);
mineElement.classList.add('p-5', 'container', 'my-5')

//                               Adding class property mettod
mineElement.classList.remove('container', 'text-white')
console.log(mineElement.classList);

//INNER HTML(returns all html)/ INNER TEXT(returns only text) METHOD
console.log(mineElement.innerText);
console.log(mineElement.innerHTML);
//...
const second = document.querySelector('#second')

second.classList.add('card')
second.classList.add('w-50')
second.classList.add('my-3')
second.classList.add('mx-auto')

let age = prompt('Enter ur age')

if (age > 17) { 
    mineElement.innerHTML = `
    <h1 style="text-align:center;">Note:  By Clicking Any Link Below You Will Be Redirected To Another Website</h1>
    
    `
    second.innerHTML = `
        <p style="text-align:center;"> 
            <a href="www.youtube/videos.com" style="width: 70px; text-decoration: underline; color: blue; ">Click For Youtube Videos</a>
        </p>
        <p style="text-align:center;"> 
            <a href="www.Google/videos.com" style="width: 70px; text-decoration: underline; color: blue;" >Click to search Videos On google </a>
        </p>
    `;
}else{
    second.innerHTML = `<h1 class="text-danger text-center">You Are UnderAge </h1>`
}