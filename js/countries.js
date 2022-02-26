const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (countries) => {
  // for(const country of countries){
  //     console.log(country);
  // }
  const countriesDiv = document.getElementById("countries");
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
   <h3>${country.name}</h3>
   <p>${country.capital}</p>
   <button onclick = "loadCountryName('${country.name}')">Details</button>
   `;
    countriesDiv.appendChild(div);
    // h3.innerText = country.name;
    // countriesDiv.appendChild(h3);
    // const p = document.createElement("p");
    // p.innerText = country.capital;
    // div.appendChild(p);
    // countriesDiv.appendChild(div);
  });
};
const loadCountryName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
  .then((res) => res.json())
  .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  console.log(country);
  const countryDiv = document.getElementById("country-detail");
  countryDiv.innerHTML = `
  <h5>${country.name}</h5>
  <img src="${country.flag}">
  `;
};
