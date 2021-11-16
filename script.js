document.querySelector(".header-btn-menu").addEventListener('click', ()=>{
    document.querySelector('.menu-mobile-space').classList.add('open-menu-animation')
    document.querySelector('.menu-mobile-space').classList.remove('close-menu-animation')
    document.querySelector('.hamburger').style.display = 'none'
})

document.querySelector('.close').addEventListener('click',()=>{

    document.querySelector('.menu-mobile-space').classList.add('close-menu-animation')
    document.querySelector('.hamburger').style.display="flex"
})

const feature = `[
    {
        "title": "Bookmark in one click",
        "description":"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        "image":{
            "png":"./images/illustration-features-tab-1.svg"
        }
    },
    {
        "title": "Intelligent search",
        "description":"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        "image":{
            "png":"./images/illustration-features-tab-2.svg"
        }
    },
    {
        "title": "Share your bookmarks",
        "description":"Easily share your bookmarks and collections with others. Create a shareable   link that you can send at the click of a button.",
        "image":{
            "png":"./images/illustration-features-tab-3.svg"
        }
    }
]`

const dataFeature = JSON.parse(feature)

const simpleBook = document.getElementById('simple');

simpleBook.addEventListener('click',()=>{
    document.getElementById('title-feature').innerHTML = dataFeature[0].title;
    document.getElementById('description-feature').innerHTML = dataFeature[0].description;
    document.getElementById('img-feature').src = dataFeature[0].image.png;
    simpleBook.classList.add('active')
    document.getElementById('speedy').classList.remove('active')
    document.getElementById('sharing').classList.remove('active')
})

const speedyScrech = document.getElementById('speedy');

speedyScrech.addEventListener('click',()=>{
    document.getElementById('title-feature').innerHTML = dataFeature[1].title;
    document.getElementById('description-feature').innerHTML = dataFeature[1].description;
    document.getElementById('img-feature').src = dataFeature[1].image.png;
    speedyScrech.classList.add('active')
    document.getElementById('simple').classList.remove('active')
    document.getElementById('sharing').classList.remove('active')
})

const easyShare = document.getElementById('sharing');

easyShare.addEventListener('click', ()=>{
    document.getElementById('title-feature').innerHTML = dataFeature[2].title;
    document.getElementById('description-feature').innerHTML = dataFeature[2].description;
    document.getElementById('img-feature').src = dataFeature[2].image.png;
    easyShare.classList.add('active')
    document.getElementById('simple').classList.remove('active')
    document.getElementById('speedy').classList.remove('active')
})

const question01 = document.getElementById('Q01');

question01.addEventListener('click',() =>{
    //
    const answer = document.getElementById('answer-01')
    const rotate = document.getElementById('rotate-arrow1')
    const question02open = document.getElementById('answer-02')
    const arrowQ02 = document.getElementById('rotate-arrow2')
    const question03open = document.getElementById('answer-03')
    const arrowQ03 = document.getElementById('rotate-arrow3')
    const question04open = document.getElementById('answer-04')
    const arrowQ04 = document.getElementById('rotate-arrow4')


    //
    if(answer.style.display == "flex"){
        answer.style.display = 'none'
        rotate.classList.add('reverse-rotate-arrow')
        rotate.classList.remove('rotate-arrow')
    }else{
        answer.style.display = 'flex'
        rotate.classList.add('rotate-arrow')
        rotate.classList.remove('reverse-rotate-arrow')
        //
        question02open.style.display = 'none'
        arrowQ02.classList.add('reverse-rotate-arrow')
        arrowQ02.classList.remove('rotate-arrow')
        //
        question03open.style.display = 'none'
        arrowQ03.classList.add('reverse-rotate-arrow')
        arrowQ03.classList.remove('rotate-arrow')
        //
        question04open.style.display = 'none'
        arrowQ04.classList.add('reverse-rotate-arrow')
        arrowQ04.classList.remove('rotate-arrow')
    }
    
}   
)

const question02 = document.getElementById('Q02');

question02.addEventListener('click',() =>{
   
    const answer = document.getElementById('answer-02')
    const rotate = document.getElementById('rotate-arrow2')
    const question01open = document.getElementById('answer-01')
    const arrowQ01 = document.getElementById('rotate-arrow1')
    const question03open = document.getElementById('answer-03')
    const arrowQ03 = document.getElementById('rotate-arrow3')
    const question04open = document.getElementById('answer-04')
    const arrowQ04 = document.getElementById('rotate-arrow4')

    if(answer.style.display == "flex"){
        answer.style.display = 'none'
        rotate.classList.add('reverse-rotate-arrow')
        rotate.classList.remove('rotate-arrow')
    }else{
        answer.style.display = 'flex'   
        rotate.classList.add('rotate-arrow')
        rotate.classList.remove('reverse-rotate-arrow')
        //
        question01open.style.display ='none'
        arrowQ01.classList.add('reverse-rotate-arrow')
        arrowQ01.classList.remove('rotate-arrow')
        //
        question03open.style.display = 'none'
        arrowQ03.classList.add('reverse-rotate-arrow')
        arrowQ03.classList.remove('rotate-arrow')
        //
        question04open.style.display = 'none'
        arrowQ04.classList.add('reverse-rotate-arrow')
        arrowQ04.classList.remove('rotate-arrow')
    }   
    }   
)

const question03 = document.getElementById('Q03')

question03.addEventListener('click',()=>{
    const answer = document.getElementById('answer-03')
    const rotate = document.getElementById('rotate-arrow3')

    const question01open = document.getElementById('answer-01')
    const arrowQ01 = document.getElementById('rotate-arrow1')
    const question02open = document.getElementById('answer-02')
    const arrowQ02 = document.getElementById('rotate-arrow2')
    const question04open = document.getElementById('answer-04')
    const arrowQ04 = document.getElementById('rotate-arrow4')
    if(answer.style.display == 'flex'){
        answer.style.display = 'none'
        rotate.classList.add('reverse-rotate-arrow')
        rotate.classList.remove('rotate-arrow')
    } else{
        answer.style.display = 'flex'   
        rotate.classList.add('rotate-arrow')
        rotate.classList.remove('reverse-rotate-arrow')
        //
        question01open.style.display = 'none'
        arrowQ01.classList.add('reverse-rotate-arrow')
        arrowQ01.classList.remove('rotate-arrow')
        //
        question02open.style.display = 'none'
        arrowQ02.classList.add('reverse-rotate-arrow')
        arrowQ02.classList.remove('rotate-arrow')
        //
        question04open.style.display = 'none'
        arrowQ04.classList.add('reverse-rotate-arrow')
        arrowQ04.classList.remove('rotate-arrow')
    }

})

const question04 = document.getElementById('Q04')

question04.addEventListener('click',()=>{
    const answer = document.getElementById('answer-04')
    const rotate = document.getElementById('rotate-arrow4')
    const question01open = document.getElementById('answer-01')
    const arrowQ01 = document.getElementById('rotate-arrow1')
    const question02open = document.getElementById('answer-02')
    const arrowQ02 = document.getElementById('rotate-arrow2')
    const question03open = document.getElementById('answer-03')
    const arrowQ03 = document.getElementById('rotate-arrow3')

    if(answer.style.display == 'flex'){
        answer.style.display = 'none'
        rotate.classList.add('reverse-rotate-arrow')
        rotate.classList.remove('rotate-arrow')
    } else{
        answer.style.display = 'flex'   
        rotate.classList.add('rotate-arrow')
        rotate.classList.remove('reverse-rotate-arrow')
        //
        question01open.style.display = 'none'
        arrowQ01.classList.add('reverse-rotate-arrow')
        arrowQ01.classList.remove('rotate-arrow')
        //
        question02open.style.display = 'none'
        arrowQ02.classList.add('reverse-rotate-arrow')
        arrowQ02.classList.remove('rotate-arrow')
        //
        question03open.style.display = 'none'
        arrowQ03.classList.add('reverse-rotate-arrow')
        arrowQ03.classList.remove('rotate-arrow')
    }

})

