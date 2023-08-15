const generate = document.getElementById("generate");
const userDataDiv = document.getElementById("user");
const spinner = document.querySelector('.spinner');



generate.addEventListener("click", () => {
  spinner.classList.remove('hidden');
  fetch("https://randomuser.me/api")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })


    .then((data) => {
      const user = data.results[0];
      userDataDiv.innerHTML = `
            <div class="flex justify-between">
            <div class="flex">
              <img
                class="w-48 h-48 rounded-full mr-8"
                src="${user.picture.large}"
              />
              <div class="space-y-3">
                <p class="text-xl">
                  <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
                </p>
                <p class="text-xl">
                  <span class="font-bold">Email: </span> ${user.email}
                </p>
                <p class="text-xl">
                  <span class="font-bold">Phone: </span> ${user.phone}
                </p>
                <p class="text-xl">
                  <span class="font-bold">Location: </span> ${user.location.country}
                  </p>
                </p>
                <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
              </div>
            </div>
          </div>
        `;



      const user1 = data.results[0];
      const gender = user.gender;
      const body = document.body;

      // Define color values for different genders
      const maleColor = "steelblue";
      const femaleColor = "rebeccapurple";
      const defaultColor = "white"; // You can set a default color here

      // Apply background color based on gender
      if (gender === "male") {
        body.style.backgroundColor = maleColor;
      } else if (gender === "female") {
        body.style.backgroundColor = femaleColor;
      } else {
        body.style.backgroundColor = defaultColor; // Reset color if gender is not male or female
      }


      spinner.classList.add('hidden');
    })
    .catch((error) => {
      console.error("Error fetching data:", error);


    });
});