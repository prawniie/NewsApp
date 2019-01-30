console.log("Moi Mukulat!");

async function clickSeed() {

    let response = await fetch(`api/news/seed`, {method:"POST"});

    if (response.status === 204) {
        console.log('Seed done');
    }
    else if (response.status === 500) {
        console.log('Something went wrong');
    }
}

async function clickShowAllNews() {

    let response = await fetch(`api/news/`); //automatiskt get-call

    if (response.status === 200) {

        let allNews = await response.json();

        console.log("allNews", allNews);

        let html = "<table><tr><th>Id</th><th>Header</th><th>Intro</th><th>Created</th><th>Updated</th><th></th></tr>";

        for (let n of allNews) {
            html += `<tr><td>${n.id}</td><td>${n.header}</td><td>${n.intro}</td><td>${n.createdDate}</td><td>${n.updatedDate}</td><td><button>Update</button></td></tr>`;
        }
        //Vet ej hur jag ska skriva ut kategorin

        document.getElementById("newsList").innerHTML = html + `</table>`;


    }
    else if (response.status === 500) {
        console.log('Something went wrong..');
    }
}

async function clickAddNews() {

    let header = document.getElementById("addAreaHeader").value;
    let category = document.getElementById("addAreaCategory").value;
    let categoryText = document.getElementById("addAreaCategory").text;
    let intro = document.getElementById("addAreaIntro").value;
    let body = document.getElementById("addAreaBody").value;

    let response = await fetch(`api/News`, {
        method: "POST",
        body: JSON.stringify(
            {
                header: header,
                category: { id: category, name: categoryText },
                intro: intro,
                body: body
            }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.status === 200) {
        let areaError = document.getElementById("addAreaError");
        areaError.style.color = "green";
        areaError.innerText = 'Post successfully added!';
    }
}

async function clickStatArea() {

    let response = await fetch(`api/news/count`);
    let result = "";

    if (response.status === 200) {
        result = await response.text();

        let nrOfNews = document.getElementById("nrOfNews");
        nrOfNews.innerHTML = result;
    }
    else {
        let nrOfNews = document.getElementById("nrOfNews");
        nrOfNews.style.color = "red";
        nrOfNews.innerText = 'Something went wrong..';
    }





}
