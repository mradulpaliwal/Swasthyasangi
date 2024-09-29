
// SIGNLE HEADER CODE

var htmlCode = `
<div class=" h-100">
<div class="font-regular relative block w-full bg-rare text-center font-medium uppercase p-4 text-base leading-5 text-white opacity-100">
  <a href="#" class="text-style-proximaB">  <i class="fas fa-exclamation mr-2"></i>
    Informations Regarding To COVID 19 </a>
</div>
</div>
<header class="bg-white shadow-lg h-24 hidden md:flex">
  <a href="" class="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
    <img class="" src="/assets/images/preview.png" alt="" / width="180">
  </a>
  <nav class="header-links contents font-semibold text-base lg:text-lg uppercase text-style-gemsbuck ">
    <ul class="flex items-center ml-4 xl:ml-8 mr-auto" id="list">
    </ul>
  </nav>
  <nav class="hidden xl:contents">
    <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
      <li class="p-1">
        <a href="" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
          <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img"  viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16 fa-9x"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
        </a>
      </li>
      <li class="p-1">
        <a href="" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
          <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img"  viewBox="0 0 320 512" class="svg-inline--fa fa-facebook-f fa-w-10 fa-7x"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
        </a>
      </li>
      <li class="p-1">
        <a href="" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
        <img src="/assets/images/envelope.png" width="16">
        </a>
      </li>
      <li class="p-1">
        <a href="" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
          <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img"  viewBox="0 0 448 512" class="svg-inline--fa fa-instagram fa-w-14 fa-9x"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        </a>
      </li>
    </ul>
  </nav>
  <div class="border flex items-center">
  <input class="search-btn text-center h-12 uppercase focus:outline-none" type="text" placeholder="Search Here..." id="searchbar" onkeyup="search()">
  </div>
</header>
`;

var container = document.getElementById('header')
var newElement = document.createElement('div')
newElement.innerHTML = htmlCode
container.appendChild(newElement)

// SIGNLE FOOTER CODE

var htmlCode = `
<footer class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">General</h2>
        <nav class="list-none mb-10 uppercase">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Home</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Activities</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">FAQs</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">General</h2>
        <nav class="list-none mb-10 uppercase">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Workout Guide</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Premium Guide</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Team</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Terms & Legacy</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact</h2>
        <nav class="list-none mb-10 uppercase">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Phone : +00 000 000</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Phone : +00 000 001</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Email : contact@swasthyasangi.com</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Address :Sanjay Colony,Sasni,Hathras</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="contact@swasthyasangi.com">
          </div>
          <button class="title-font-two inline-flex text-white bg-rare border-0 py-2 px-6 focus:outline-none text-lg uppercase">Submit</button>
        </div>
        <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Get Latest News & Updates 
          <br class="lg:block hidden">Through SwasthyaSangi Newsletter.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span class="ml-3 text-xl"></span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024  —
        <a href="#" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">
        <img src="/assets/images/preview.png" width="100">
        All Rights Reserved.
        </a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </span>
    </div>
    <div class="font-regular relative block w-full bg-rare text-center font-medium uppercase p-4 text-base leading-5 text-white opacity-100">
  <span class="credit">Powered By :
  <a href="https://github.com/mradulpaliwal"><i class="fas fa-exclamation mr-2"></i>
    MRADUL PALIWAL &nbsp;<svg class="inline w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
     </span>
</div>
  </div>
</footer>
`;

var containerTwo = document.getElementById('footer')
var newElement = document.createElement('div')
newElement.innerHTML = htmlCode
containerTwo.appendChild(newElement)


// SEARCHBAR > SEARCH FOR ANYTHING ON THE WEBSITE

function search() {
    var input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    var x = document.getElementsByClassName('srch');
     
    for (var i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
    }
}

// ADD NAVBAR LINKS 

 var navbarLinks = [
  { linkName: 'Home', href: '#'},
  { linkName: 'About', href: '#' },
  { linkName: 'Activities', href: '#' },
  { linkName: 'Team', href: '#' },
  { linkName: 'Workout Guide', href: '#'},
  { linkName: 'Contact', href: '#' }
]
var list = document.getElementById('list');

for (var i = 0; i < navbarLinks.length; i++) {
  var li = document.createElement('li')
  li.classList.add('p-3', 'xl:p-6')
  var link = document.createElement('a')
  link.href = navbarLinks[i].href
  link.innerText = navbarLinks[i].linkName
  li.appendChild(link)
  list.appendChild(li)
}

// CALCULATE BODY MASS INDEX

function calculateBmi(event) {
  event.preventDefault(); // prevent form submission and page reload
  
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);

  var bmi = weight / ((height / 100) ** 2);
  var resultDisplay = document.createElement('h1');
  resultDisplay.textContent = `Your Body Mass Index is ${bmi.toFixed(2)}`;

  var result = document.querySelector('.resultBMI');
  result.innerHTML = ''; 
  result.appendChild(resultDisplay);

  var image = document.createElement('img');
  image.src = '/assets/images/Untitled.png';
  image.classList.add('result-image')
  result.appendChild(image);
  
  // reset the input fields
  document.getElementById('age').value = '';
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  
}