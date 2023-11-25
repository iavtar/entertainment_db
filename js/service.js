let url = 'https://www.omdbapi.com/?apikey=<>';
function getMovieByTitle(title) {
  let titleInfo = "";
  let xhr = new XMLHttpRequest();
  let method = "GET";
  let url = `${url}&t=${title}`;
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      titleInfo = JSON.parse(xhr.responseText);
    }
  };
  xhr.onloadend = () => {
    renderTitleInfo(titleInfo);
  };
  xhr.onerror = () => {
    console.log("booo");
  };
  xhr.send();
}

function getMovieByTitleViaFetch(title) {
  let url = `${url}&t=${title}`;
  fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      renderTitleInfo(responseData);
    })
    .catch((e) => {
      console.log("error happened");
    });
}

async function getMovieByTitleViaFetchAynAndAwait(title) {
  try {
    let response = await fetch(
      `${url}&t=${title}`
    );
    let checkedResponse = await checkStatus(response);
    let data = await checkedResponse.json();
    renderTitleInfo(data);
  } catch (error) {
    console.log(error);
  }
}

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error("Error Occured"));
  }
}

function getTitleInfo(title) {
  getMovieByTitleViaFetchAynAndAwait(title);
}
