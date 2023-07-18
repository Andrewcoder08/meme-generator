var memeButton = document.querySelector("#meme-generate-btn");
var memeTitle = document.querySelector("#meme-title-text");
var memeImage = document.querySelector("#meme-image");
var memeAuthor = document.querySelector("#meme-author-text");
var memeCount = document.querySelector("#meme-count");
var count = 0;
var memeApiUrl = "https://meme-api.com/gimme/wholesomememes";

memeButton.addEventListener("click", generateMeme);

function generateMeme() {
  fetch(memeApiUrl)
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    })
    .catch(errorHandler);
}

function errorHandler() {
  alert("API error, try after sometime");
}

function updateDetails(url, title, author) {
  memeImage.setAttribute("src", url);
  memeTitle.innerText = title;
  memeAuthor.innerText = `Meme by: ${author}`;
  count += 1;
  if (count == 1) {
    memeCount.innerText = `${count} meme`;
  } else {
    memeCount.innerText = `${count} memes`;
  }
}
