// Function to process the fetched data
function processData(users) {
    console.log('Data from API:', users);
    users.forEach(user => {
      console.log('User:', user.name.title);
        const customerContainer = document.getElementById('customerContainer')
    // Hier ga ik de elementen aanmaken voor de personen in op te slaan. deze maken we een article en geven we ineens een classname mee voor manipulatie in css
      const userBox = document.createElement('article');
      let customerList = document.createElement('ul');
      let customerIMG = document.createElement('img');
      let customerApp = document.createElement('p');
    // De sublistelementen zoals naam, aanspreking , leeftijd etc
      let customerFirstName = document.createElement('li');
      let customerLastName = document.createElement('li');
      let customerAge = document.createElement('p');
      let customerCountry = document.createElement('li');
      let customerTitle = document.createElement('li'); 
      let customerGender = document.createElement('li');
    // De elementen beginnen "aankleden"
      customerFirstName.textContent =" Voornaam: " + user.name.first;
      customerLastName.textContent ="Achternaam: " + user.name.last;
      customerAge.textContent = " Leeftijd: " + user.age + "  " + "Geboren: " + user.date;
      customerCountry.textContent = " Nationaliteit: " + user.nat;
      customerTitle.textContent = user.name.title;
      customerGender.textContent = " Geslacht: " + user.gender;
    // de elementen aan de UL hangen in correcte volgorde
      customerList.appendChild(customerTitle);
      customerList.appendChild(customerFirstName);
      customerList.appendChild(customerLastName);
      customerList.appendChild(customerCountry);
      customerList.appendChild(customerGender);
    // de andere elementen finaliseren
      customerIMG.src = user.picture.large;
      customerApp.appendChild(customerAge);
    // Deze box heeft een classtitel mee voor een grid te definieren voor alles wat we er net hebben ingezet mee weg te werken en te organiseren.
      userBox.classList.add('customer');
      // dan hangen we de volgende elementen eraan: img, ul, p
      userBox.appendChild(customerIMG);
      userBox.appendChild(customerList);
      userBox.appendChild(customerApp); 
      // Add more logic to manipulate and add data to the HTML elements
      customerContainer.appendChild(userBox);
    });
  
    // Perform other actions or manipulations with the fetched data
    console.log('Number of users:', users.length);
  }
  
  const apiUrl = 'https://randomuser.me/api/?inc=gender,name,nat,dob,picture&results=12';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const users = response.results; // Access the 'results' array containing user data
  
        // Call the function to process the data
        processData(users);
      } else {
        console.error('Request failed with status:', xhr.status);
        // Handle errors here
      }
    }
  };
  
  xhr.open('GET', apiUrl);
  xhr.setRequestHeader('Accept', 'application/json'); // Set the Accept header
  xhr.send();
  