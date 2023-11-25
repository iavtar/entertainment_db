hideInfo();
let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", searchTitle);
function searchTitle(e) {
  e.preventDefault();
  let titlePlacehoder = searchForm.title.value;
  getTitleInfo(titlePlacehoder);
}

function renderTitleInfo(titleInfo) {
  console.log(titleInfo);
  if (!titleInfo.Error) {
    document.getElementById("global_message").innerHTML = "";
    document.getElementById("title").innerHTML = `${titleInfo.Title}`;
    document.getElementById(
      "plot"
    ).innerHTML = `<b>Plot:</b> ${titleInfo.Plot}`;
    document.getElementById("poster").src = titleInfo.Poster;
    document.getElementById(
      "year"
    ).innerHTML = `<b>Year: </b>${titleInfo.Year}`;
    document.getElementById(
      "type"
    ).innerHTML = `<b>Type: </b>${titleInfo.Type}`;
    document.getElementById(
      "director"
    ).innerHTML = `<b>Director: </b> ${titleInfo.Director}`;
    document.getElementById(
      "genre"
    ).innerHTML = `<b>Genre: </b> ${titleInfo.Genre}`;
    document.getElementById(
      "actors"
    ).innerHTML = `<b>Cast: </b>${titleInfo.Actors}`;
    document.getElementById(
      "language"
    ).innerHTML = `<b>Languages: </b> ${titleInfo.Language}`;
    document.getElementById(
      "awards"
    ).innerHTML = `<b>Awards: </b> ${titleInfo.Awards}`;
    document.getElementById(
      "imdbRating"
    ).innerHTML = `<b>IMDB Rating: </b> ${titleInfo.imdbRating}`;
    searchForm.title.value = "";
    document.querySelector(".info").style.setProperty("width", "30%");
    document.querySelector(".info").style.setProperty("margin", "auto");
    document.querySelector(".info").style.setProperty("padding", "20px");
    document.querySelector(".info").style.setProperty("border-radius", "25px");
    document
      .querySelector(".info")
      .style.setProperty("background-color", "#FF3345");
  } else {
    document.getElementById("global_message").innerHTML = titleInfo.Error;
    searchForm.title.value = "";
    hideInfo();
    resetInfo();
  }
}

function hideInfo() {
  document.querySelector(".info").style.removeProperty("background-color");
}

function resetInfo() {
  document.getElementById("title").innerHTML = "";
  document.getElementById("plot").innerHTML = "";
  document.getElementById("poster").src = "";
  document.getElementById("year").innerHTML = "";
  document.getElementById("type").innerHTML = "";
  document.getElementById("director").innerHTML = "";
  document.getElementById("genre").innerHTML = "";
  document.getElementById("actors").innerHTML = "";
  document.getElementById("language").innerHTML = "";
  document.getElementById("awards").innerHTML = "";
  document.getElementById("imdbRating").innerHTML = "";
}
