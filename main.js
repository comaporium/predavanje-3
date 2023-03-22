let cars = [
    {
        "id": 0,
      "color": "purple",
      "url" : "https://childhood101.com/wp-content/uploads/2009/09/c16.jpg",
      "type": "minivan",
      "registration": new Date('2017-01-03').toUTCString(),
      "capacity": 7
    },
    {
        "id": 1,
      "color": "red",
      "url": "https://www.wikihow.com/images/thumb/e/ec/Make-a-Cardboard-Car-Step-24-Version-3.jpg/aid147113-v4-728px-Make-a-Cardboard-Car-Step-24-Version-3.jpg.webp",
      "type": "station wagon",
      "registration": new Date('2018-03-03').toUTCString(),
      "capacity": 5
    },
    {
        "id": 2,
        "color": "yellow",
        "type": "bus",
        "url": "https://cdn.rebrickable.com/media/thumbs/sets/10696-1-s5/4072.jpg/1000x800p.jpg?1657698436.8899343",
        "registration": new Date('2019-02-02').toUTCString(),
        "capacity": 13
    },
    {
        "id": 3,
        "color": "grey",
        "url": "https://inventorsoftomorrowdotcom.files.wordpress.com/2021/03/20191123_193632541_ios-2.jpg",
        "type": "wagon",
        "registration": new Date('2018-06-04').toUTCString(),
        "capacity": 5
    },
    {
        "id": 4,
        "color": "blue",
        "url": "https://www.wikihow.com/images/thumb/7/7c/Make-a-Cardboard-Car-Step-12-Version-3.jpg/aid147113-v4-728px-Make-a-Cardboard-Car-Step-12-Version-3.jpg.webp",
        "type": "car",
        "registration": new Date('2021-03-01').toUTCString(),
        "capacity": 3
    },
    {
        "id": 5,
        "color": "red",
        "type": "bike",
        "url": "http://s3.amazonaws.com/cme_public_images/www_ehow_com/cdn-write.demandstudios.com/upload/image/C5/1C/D1549ACD-BD1E-4209-941B-FF1A74011CC5/D1549ACD-BD1E-4209-941B-FF1A74011CC5.jpg",
        "registration": new Date('2018-03-03').toUTCString(),
        "capacity": 2
    }
]


prikazVozila = () =>{
    document.getElementById("spoljni").innerHTML = "";
    cars.forEach(x => {
        let hr = document.createElement("hr");
        let hr1 = document.createElement("hr");
        let glavniDiv = document.createElement("div");
        glavniDiv.setAttribute("class", "unutrasnji");
        glavniDiv.setAttribute("id", "div" + x.id); 
        document.getElementById("spoljni").appendChild(glavniDiv);

        let url = document.createElement("img");
        url.setAttribute("src", x.url);
        url.setAttribute("alt","car photo");
        url.setAttribute("class","slika");
        glavniDiv.appendChild(url);

        let color = document.createElement("h4");
        glavniDiv.appendChild(color);
        color.innerHTML = x.color;

        let type = document.createElement("h4");
        glavniDiv.appendChild(type);
        type.innerHTML = x.type;

        let registration = document.createElement("h5");
        glavniDiv.appendChild(registration);
        registration.innerHTML = x.registration;

        let ispisIda = document.createElement("button");
        ispisIda.setAttribute("onclick", "ispisIda(" + cars.indexOf(x) + ")");
        ispisIda.setAttribute("class","dugme");
        ispisIda.innerHTML = "Ispis ID vozila";
        glavniDiv.appendChild(ispisIda);
        glavniDiv.appendChild(hr);

        let editVozila = document.createElement("button");
        editVozila.setAttribute("onclick", "editVozila(" + cars.indexOf(x) + ")");
        editVozila.setAttribute("class", "dugme");
        editVozila.innerHTML = "editVozila";
        glavniDiv.appendChild(editVozila);
        glavniDiv.appendChild(hr1);

        let obrisiVozilo = document.createElement("button");
        obrisiVozilo.setAttribute("onclick", "obrisiVozilo(" + x.id + ")");
        obrisiVozilo.setAttribute("class", "dugme");
        glavniDiv.appendChild(obrisiVozilo);
        obrisiVozilo.innerHTML = "Obrisi vozilo";
    });
}

var intervalId;

ispisIda = (x) =>{
    let car = cars[x];
    console.log(car.id);
}

editVozila = (x) =>{
    let car = cars[x];
    document.getElementById("idVozila").value = car.id;
    document.getElementById("bojaVozila").value = car.color;
    document.getElementById("urlVozila").value = car.url;
    document.getElementById("kategorijaVozila").value = car.type;
    document.getElementById("registracijaVozila").value = car.registration;
    document.getElementById("kapacitetVozila").value = car.capacity;

    intervalId = window.setInterval(function(){
        document.getElementById("slideshow").setAttribute("src",cars[Math.floor(Math.random() * cars.length)].url);
      }, 1000);
}

obrisiVozilo = (id) =>{
    let izrbisaniDiv = document.getElementById("div" + id);
    izrbisaniDiv.style.opacity = "0";
    setTimeout(()=>{
        izrbisaniDiv.remove();
        cars.splice(cars.findIndex(obj =>obj.id == id), 1);
        console.log(cars);
    },1000);
}

finishUpdate = () =>{
    if(document.getElementById("idVozila").value == "") return;
    
    let car = cars.find(obj =>obj.id == document.getElementById("idVozila").value);
    car.color = document.getElementById("bojaVozila").value;
    car.url = document.getElementById("urlVozila").value;
    car.type = document.getElementById("kategorijaVozila").value;
    car.registration = document.getElementById("registracijaVozila").value;
    car.capacity = document.getElementById("kapacitetVozila").value;

    cars.splice(cars.findIndex(obj =>obj.id == car.id), 1, car);
    prikazVozila();
    ocistiEdit();
    clearInterval(intervalId);
}

ocistiEdit = () =>{
    document.getElementById("idVozila").value = "";
    document.getElementById("bojaVozila").value = "";
    document.getElementById("urlVozila").value = "";
    document.getElementById("kategorijaVozila").value = "";
    document.getElementById("registracijaVozila").value = "";
    document.getElementById("kapacitetVozila").value = "";
}