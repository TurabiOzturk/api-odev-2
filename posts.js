const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

function validateUserId(userId) {
  if ((userId ?? "") === "" || userId.trim() === "") {
    alert("Lütfen bir değer giriniz");
    userId = prompt("Lütfen bir ID giriniz");
    return validateUserId(userId);
  } else if (isNaN(userId) || userId < 0 || userId > 10) {
    alert("Lütfen 1 ile 10 arasında geçerli bir sayı giriniz");
    userId = prompt("Lütfen bir ID giriniz");
    return validateUserId(userId);
  }
  userId = +userId;
  return userId;
}

userId = validateUserId(userId);

const apiKey = "https://jsonplaceholder.typicode.com/posts";

async function getData(apiKey) {
  let data;
  try {
    const response = await fetch(`${apiKey}?userId=${userId}`);
    data = await response.json();
  } catch {
    console.log("An error occured");
  }
  async function createCard() {
    const row = document.getElementById("cards-row");
    for (i = 0; i < data.length; i++) {
      row.innerHTML += `
     <div class="col-md-4 mt-5">
        <div class="card">
        <div class="card-header">
            <strong>User ID:</strong> ${data[i].userId}
        </div>
        <div class="card-body">
            <p class="card-text"><strong>Post ID:</strong> ${data[i].id}</p>
            <p class="card-text">${data[i].body}</p>
        </div>
        </div>
      </div>
      `;
    }
  }
  createCard();
}

getData(apiKey);
