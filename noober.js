function renderNooberPool(ridedata){
let titleString = `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
<i class="fas fa-car-side"></i>
<span>Noober Pool</span>
</h1>`

let combinedLegData = ""
for(let i=0; i<ridedata.length; i++){
  let legData = `    <div class="border-4 border-gray-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${ridedata[i].passengerDetails.first + " " + ridedata[i].passengerDetails.last}</h2>
      <p class="font-bold text-gray-600">${ridedata[i].passengerDetails.phoneNumber}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
        ${ridedata[i].numberOfPassengers + " passengers"}
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${ridedata[i].pickupLocation.address}</p>
      <p>${ridedata[i].pickupLocation.city + ", " + ridedata[i].pickupLocation.state + " " + ridedata[i].pickupLocation.zip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${ridedata[i].dropoffLocation.address}</p>
      <p>${ridedata[i].dropoffLocation.city + ", " + ridedata[i].dropoffLocation.state + " " + ridedata[i].dropoffLocation.zip}</p>
    </div>
  </div>
</div>`

combinedLegData = combinedLegData + legData
}

let finalString = titleString + combinedLegData

return finalString
}

function renderNooberPurple(ridedata){

let titleString = `    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
<i class="fas fa-car-side"></i>
<span>Noober Purple</span>
</h1>`

let combinedLegData = ""
for(let i=0; i<ridedata.length; i++){
  let legData = `    <div class="border-4 border-purple-500 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${ridedata[i].passengerDetails.first + " " + ridedata[i].passengerDetails.last}</h2>
      <p class="font-bold text-gray-600">${ridedata[i].passengerDetails.phoneNumber}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-purple-600 text-white p-2">
      ${ridedata[i].numberOfPassengers + " passengers"}  
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${ridedata[i].pickupLocation.address}</p>
      <p>${ridedata[i].pickupLocation.city + ", " + ridedata[i].pickupLocation.state + " " + ridedata[i].pickupLocation.zip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${ridedata[i].dropoffLocation.address}</p>
      <p>${ridedata[i].dropoffLocation.city + ", " + ridedata[i].dropoffLocation.state + " " + ridedata[i].dropoffLocation.zip}</p>
    </div>
  </div>
</div>`

combinedLegData = combinedLegData + legData
}

let finalString = titleString + combinedLegData

return finalString
}

function renderNooberXL(ridedata){
  let titleString = `    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>Noober XL</span>
</h1>`
  
  let combinedLegData = ""
  for(let i=0; i<ridedata.length; i++){
    let legData = `    <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ridedata[i].passengerDetails.first + " " + ridedata[i].passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ridedata[i].passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${ridedata[i].numberOfPassengers + " passengers"}
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ridedata[i].pickupLocation.address}</p>
        <p>${ridedata[i].pickupLocation.city + ", " + ridedata[i].pickupLocation.state + " " + ridedata[i].pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ridedata[i].dropoffLocation.address}</p>
        <p>${ridedata[i].dropoffLocation.city + ", " + ridedata[i].dropoffLocation.state + " " + ridedata[i].dropoffLocation.zip}</p>
      </div>
    </div>
  </div>`
  
  combinedLegData = combinedLegData + legData
  }
  
  let finalString = titleString + combinedLegData
  
  return finalString
  }

  function renderNooberX(ridedata){
    let titleString = `    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober X</span>
  </h1>`
    
    let combinedLegData = ""
    for(let i=0; i<ridedata.length; i++){
      let legData = `    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ridedata[i].passengerDetails.first + " " + ridedata[i].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ridedata[i].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ridedata[i].numberOfPassengers + " passengers"}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ridedata[i].pickupLocation.address}</p>
          <p>${ridedata[i].pickupLocation.city + ", " + ridedata[i].pickupLocation.state + " " + ridedata[i].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ridedata[i].dropoffLocation.address}</p>
          <p>${ridedata[i].dropoffLocation.city + ", " + ridedata[i].dropoffLocation.state + " " + ridedata[i].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`
    
    combinedLegData = combinedLegData + legData
    }
    
    let finalString = titleString + combinedLegData
    
    return finalString
    }


async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  for(let i=0; i<json.length; i++)
  {
    let element = document.querySelector('.rides')
    if(json[i].length>1)
    {
      element.insertAdjacentHTML("beforeend",renderNooberPool(json[i]))
    }
    else
    {
      if(json[i][0].purpleRequested == true)
      {
        element.insertAdjacentHTML("beforeend",renderNooberPurple(json[i]))
      }
      else if(json[i][0].numberOfPassengers > 3){
        element.insertAdjacentHTML("beforeend",renderNooberXL(json[i]))
      }
      else{
        element.insertAdjacentHTML("beforeend",renderNooberX(json[i]))
      }
    }
  }
  // 🔥 start here: write code to loop through the rides
  
}

window.addEventListener('DOMContentLoaded', pageLoaded)

