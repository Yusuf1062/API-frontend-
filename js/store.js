function handlesearch(){
    //loading animation starts
   loadingAnimationToggle(true);
   const searchInputElement = document.getElementById('search-input-field');
   const searhInputValue = searchInputElement.value;
   loadPhone(searhInputValue);
}

function loadingAnimationToggle(isLoading){
   const loaderanimation = document.getElementById('loader-animation');
if(isLoading){
   loaderanimation.classList.remove("hidden");
}
else{
   loaderanimation.classList.add("hidden");
}

}

const loadPhone = async (searchText) => {
   const res = await fetch (
      ' https://openapi.programming-hero.com/api/phones?search=${searchText}'

   );
   console.log("server response: " , res);
   const serverdata = await res.json();
   displayPhone(serverdata.data);
};

const displayPhone = (data) => {
   console.log( data);

   const cardcontainer = document.getElementById("card-section");
   cardcontainer.innerHTML = "";

   data.forEach( (phone) => {
      const productCard = document.createElement('div');
      productCard.classList.add('card');

      productCard.innerHTML = `
      <div class="card-image">
      <img src=${phone.image} alt="phone.image">
                      </div>
      <h3 class="card-title">${phone.phone_name}</h3>
      <p class="card-describtion">There are many variations of passages of available, but the majority have suffered</p>
      <div class="card-price">
          <span>$</span>
          <span id="card-item-price">999</span>
      </div>
      <div class="card-button">
      <button class="btn">Show Details</button>
      </div>
      `;
      cardcontainer.appen-=--dChild(productCard);
   });
//loading animation ends here
loadingAnimationToggle(false);

};
openapi.programming-hero.comf