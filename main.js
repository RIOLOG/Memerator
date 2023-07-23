const gmb = document.querySelector(".meme-generator .generate-meme-btn");
const mi = document.querySelector(".meme-generator img");
const mt = document.querySelector(".meme-generator .meme-title");
const ma = document.querySelector(".meme-generator .meme-author");


const update = (url, title, author) => {
    mi.setAttribute("src",url);
    mt.innerHTML = title;
    ma.innerHTML = author;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json()).then(data => {
            update(data.url,data.title, data.author)
        });
};


gmb.addEventListener("click",generateMeme)