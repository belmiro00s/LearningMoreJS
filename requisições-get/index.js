function createCountryCard(country){
    //1
    const card = document.createElement('div')//Creating "card" div
    card.classList.add('country')//The class country is added to div "card"

    //2
    const countryName = country.name.common //this is the way to acess these objects, folowing api documentation
    const name = document.createElement('h2') //creating the h2 element 
    name.textContent = countryName //inserting the country name in h2 element

    //3
    const flag = document.createElement('img') //Creating img element 
    flag.src = country.flag.svg  //passing the path to acess the img in the request body
    flag.alt = countryName //insertin inside alt element the name of coutry 
    card.append(name, flag)//appending the country name and the img to div "card"
    document.querySelector('#countries').append(card)//appending the card to main element"
}


async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')//using fetch function to make request http
    const countries =  await response.json()
    console.log(countries)

    countries.forEach((country)=>{
        createCountryCard(country)
    })
}

document.addEventListener('DOMContentLoaded', getCountries); //Ensuring DOM is fully loaded before execution

