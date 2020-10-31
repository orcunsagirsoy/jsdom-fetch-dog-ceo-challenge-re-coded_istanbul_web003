console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => renderDogImages(json.message));
}

function renderDogImages(dogs) {
const dogImages = document.getElementById('dog-image-container')
dogs.forEach(dog => {
    const img = document.createElement('img')
    img.setAttribute("width", "152");
    img.setAttribute("height", "114");
    img.setAttribute("src", dog);
    dogImages.appendChild(img)
 })
}

function fetchDogBreed(item) {
    fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
        const filter = Object.keys(json.message);
        filter.filter((obj) => {
            let display = false;
            if(Object.values(obj)[0] !== item) {
                display = true;
                return;
            }
            if (display) {
                return obj;
            }
            renderDogBreed(obj);
        })
    })
}

function renderDogBreed() {
    const dogBreed = document.getElementById('dog-breeds')
    const li = document.createElement('li');
    li.innerHTML = dog;
    dogBreed.appendChild(li);
}