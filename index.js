let mybtn = document.getElementById('bt');
let mbt = document.getElementById('data');
let Input_name = document.getElementById('nameinp');
let div = document.getElementById('inside');
const elm=document.querySelector('.con');
var favoritemovie = Input_name.value;
sessionStorage.setItem("dat", favoritemovie);

mybtn.onclick=async()=> {
    
 const url=await fetch(`https://restcountries.com/v3.1/name/${Input_name.value}?fullText=true`).then(function (res) {

return res.json();
}).then(function (data) {
    console.log(data);

const im=data[0].flags.svg;
const cure=data[0].currencies[Object.keys(data[0].currencies)].name;
const date = new Date().toLocaleString();
 console.log(data[0].idd.root+data[0].idd.suffixes[0]);
elm.innerHTML+=`<div class="card">
                <div class="flag">
                    <a href=""><img src="${im}" alt=""></a>
                </div>
                <div class="info">
                    <div class="Country-name">
                        <h3>${data[0].name.common}</h3>
                    </div>
                    <div class="Currency">
                        <p>Currency:${cure}</p>
                    </div>
                    <div class="D-T">
                        <p>Current data and time: ${date}</p>
                    </div>
                    <a href="${data[0].maps.googleMaps}">
                        <div class="btnn"><button type="button" class="btn btn-outline-primary">Show Map</button>
                    </a>
                    <a href="detail.html?greeting=${Input_name.value}"><button type="button" id="data"class="btn btn-outline-primary">Details</button></a>
                </div>
                
            </div>`;
        
           
});
}
