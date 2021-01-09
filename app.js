window.onload = function(){
    document.getElementById('contact-form').addEventListener('submit', function(event){
        this.contact_number.value = Math.random()*100000 | 0;
        emailjs.sendForm('mymain', 'contact_form', this)
        .then(function(){
            console.log('success!')
        }, function(error){
            console.log('failed...', error)
        })
    })
}

let expandButtons = document.querySelectorAll('.expandButton')

function navigationOperation(x){
    x.classList.toggle('move')
    document.getElementById('navigation').classList.toggle('curtain')
}

function expandText(x){
    console.log(x)
    
    let buttonNumber = 0
    
    for(let i = 0; i<expandButtons.length; i++){
        if(expandButtons[i].id == x.id){
            buttonNumber = i
           }
    }
       
    if(expandButtons[buttonNumber].innerHTML == 'Show less'){
        expandButtons[buttonNumber].innerHTML = 'Read more'
        console.log(expandButtons[buttonNumber].parentElement)
        expandButtons[buttonNumber].parentElement.parentElement.classList.toggle('openProject') 
        expandButtons[buttonNumber].parentElement.classList.toggle('buttonOpen')  
    }else{
        expandButtons[buttonNumber].innerHTML = 'Show less'
    expandButtons[buttonNumber].parentElement.parentElement.classList.toggle('openProject')
        expandButtons[buttonNumber].parentElement.classList.toggle('buttonOpen')
    }
}

function formSubmit(){
    alert('Message has been sent! I will get in contact with you as soon as possible.')
}

function navigate(){
    switch(event.target.innerHTML){
        case 'Top':
            document.getElementById('greetingSection').scrollIntoView({behavior: 'smooth'})
            break;
        case 'About me':
            document.getElementById('aboutSection').scrollIntoView({behavior: 'smooth'})
            break;
        case 'Projects':
            document.getElementById('projectsSection').scrollIntoView({behavior: 'smooth'})
            break;
        case 'Contacts':
            document.getElementById('contactsSection').scrollIntoView({behavior: 'smooth'})
            break;
        case 'Restourant':
            document.getElementById('project1').scrollIntoView({behavior: 'smooth'})
            break;
        case 'Webshop':
            document.getElementById('project2').scrollIntoView({behavior: 'smooth'})
            break;
        case 'Solitare':
            document.getElementById('project3').scrollIntoView({behavior: 'smooth'})
            break;
        case 'Landscaping':
            document.getElementById('project4').scrollIntoView({behavior: 'smooth'})
            break;
           }
}

var string = "Hi, I am Igor Kuprijanov and I develop websites!";
var str = string.split("");
var el = document.getElementById('greetingTextBig');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 50);
})();


function inViewport(element){
    const rect = element.getBoundingClientRect()
    return(
        rect.top >= (window.innerHeight*-0.5) &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientWidth)&&
        rect.right <= (window.innerWidth || document.documentElement.clientHeight)
    )
}

const image = document.getElementById('greetingImage')

let imagesArray = ['images/image1.JPG', 'images/image2.JPG', 'images/image3.JPG', 'images/image4.JPG', 'images/image5.JPG', 'images/image6.JPG', 'images/image7.JPG', 'images/image8.JPG', 'images/image9.JPG']

document.addEventListener('scroll', function(){
    if(inViewport(image) == true){
        console.log('image is in the viewport')
    }else{
        console.log('image is not in the viewport')
        document.getElementById('mainPic').setAttribute('src', imagesArray[Math.floor(Math.random()*(8 - 0 + 1 )+ 0)])
    }
})


document.getElementById('certificate1').addEventListener('click', (()=>{window.open('images/Fron%20end%20Libraries%20Certification.pdf', '_blank')}))
document.getElementById('certificate2').addEventListener('click', (()=>{window.open('images/Javascript%20and%20Algorithms%20Certification.pdf', '_blank')}))
document.getElementById('certificate3').addEventListener('click', (()=>{window.open('images/Responsive%20Design%20Certification.pdf', '_blank')}))