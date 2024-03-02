async function cardInfo(clicked) {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const datas = data;

  if (clicked) {
    allData(datas.data.tools);
    document.getElementById("see-more").classList.add("hidden");
  } else {
    const infos = datas.data.tools.slice(0, 6);
    allData(infos);
  }
}

const showAllDetails = async (id) => {
  console.log(id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await res.json();
  const specificData = data.data;
  singleCardWithModal(specificData);

  my_modal_5.showModal();
};

const singleCardWithModal = (data) => {
  console.log(data);

  const desElement = document.getElementById("des");
  desElement.innerText = data.description;
};

const allData = (datas) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  datas.forEach((data) => {
    const card = document.createElement("div");

    console.log(data);
    card.innerHTML = `
      <div class="card  bg-base-100 shadow-xl border-2 border-slate-950 border-rounded p-4">
      <figure><img src="${data.image}" alt="Shoes"class="rounded-xl" /></figure>
      <div class="card-body">
        <h2 class="text-xl font-semibold">Features</h2>
        <ol class="text-lg font-semibold">
            <li>1.${data.features[0]}</li>
            <li>2.${data.features[1]}</li>
            <li>3.${data.features[2]}</li>
        </ol>
          <hr class="my-2 font-bold"/>
         <div class="flex justify-between items-center">
            <div>
            <h2 class="text-xl font-semibold">${data.name}</h2>
            <div class="flex gap-3 text-lg font-semibold">
                <img src="images/Vector.png"alt=""/>
                <p>${data.published_in}</p>
                
            </div>  
            </div>

              <button class="btn bg-inherit border-none hover:bg-inherit rounded-full"onclick="showAllDetails('${data.id}')">
                  <img src="images/Group 31.png"/>
              </button>
            
              
              <!-- Open the modal using ID.showModal() method -->


         </div>
         
        
      </div>
    </div>

      
      
      `;
    cardContainer.appendChild(card);
  });
};
cardInfo();
