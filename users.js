
const apiKey =
  "https://jsonplaceholder.typicode.com/users/";

async function getData(apiKey) {
  let data;
  try {
    const response = await fetch(apiKey);
    data = await response.json();
  } catch {
    console.log("An error occured");
  }

  async function createCard() {
    const row = document.getElementById("cards-row");
    for (i = 0; i < data.length; i++) {
      
    row.innerHTML += `
     <div class="col-md-6 mt-5">
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            <i class="fa fa-user" aria-hidden="true"></i> Personal Info
          </h5>
          <p class="card-text"><strong>ID:</strong> ${data[i].id}</p>
          <p class="card-text"><strong>Name:</strong> ${data[i].name}</p>
          <p class="card-text"><strong>Username:</strong> ${data[i].username}</p>

          <h5 class="card-title mt-3">
            <i class="fa fa-home" aria-hidden="true"></i> Address Info
          </h5>
          <p class="card-text"><strong>Street:</strong> ${data[i].address.street}</p>
          <p class="card-text"><strong>City:</strong> ${data[i].address.city}</p>
          <p class="card-text"><strong>Suite:</strong> ${data[i].address.suite}</p>
          <p class="card-text"><strong>Zipcode:</strong> ${data[i].address.zipcode}</p>
          <p class="card-text"><strong>Geo:</strong> ${data[i].address.geo.lat}, ${data[i].address.geo.lng}</p>

          <h5 class="card-title mt-3">
            <i class="fa fa-envelope" aria-hidden="true"></i> Contact
            Info
          </h5>
          <p class="card-text"><strong>Phone:</strong> ${data[i].phone}</p>
          <p class="card-text"><strong>Website:</strong> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab" target="_blank">${data[i].website}</a></p>
          <p class="card-text"><strong>Email:</strong> ${data[i].email}</p>

          <h5 class="card-title mt-3">
            <i class="fa fa-building" aria-hidden="true"></i> Company Info
          </h5>
          <p class="card-text"><strong>Company:</strong> ${data[i].company.name}</p>
          <p class="card-text"><strong>Catch Phrase:</strong> ${data[i].company.catchPhrase}</p>
          <p class="card-text"><strong>Businnes Service:</strong> ${data[i].company.bs}</p>
          <a href='/posts.html?userId=${data[i].id}' class="btn btn-info" role="button">See posts</a>

        </div>
        </div>
      </div>
      `;
    }
  }
  createCard();
}

getData(apiKey);
