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

//UPPGIFT
//visa nyhet:
//skapa funktion till showallnews
//visa alla nyheter i consollen samt printas på sidan

async function clickShowAllNews() {
    alert('Går in i metoden..');

    let response = await fetch(`api/news/`); //automatiskt get-call

    //vill lägga till datan i div id="newsList"

    if (response.status === 200) {
        console.log('Showing all news..')
        let result = await response.json();

        let html = "";

        for (let n of result) {
            html += `<p>Id: ${n.id} Rubrik: ${n.header}</p>`;
        }

        document.getElementById("newsList").innerHTML = html;

        //TIPS högerklicka på objekt stora as global variabel--> laborera med resultatet

        //let listOfNews = [];

        //for (var i = 0; i < result.length; i++) {
        //    listOfNews.push(result[i]);
        //    //document.getElementById("newsList").innerHTML += result[i] + `<br>`;
        //}

        ////JSON.stringify();

        //console.table(listOfNews);

        //let newsList = document.getElementById("newsList");

        //for (var i = 0; i < listOfNews.length; i++) {
        //    let post = JSON.parse(listOfNews[i]);
        //    newsList.innerText = post.id + " " + post.header;

        //}

        //Fyller tabellen med X rader , x = antalet posts

                //let row = document.createElement("tr");
                //let newsTable = document.getElementById("newsTable");
                //newsTable.appendChild(row);

                //for (var i = 0; i < 7; i++) {
                //    let x = row.insertCell(i);
                //    x.innerHTML = "Data";
                //}

           

        

        //Skapar en ny row med en cell

        //for (var i = 0; i < 7; i++) {
        //    let row = document.getElementById("myRow");
        //    let x = row.insertCell(0);
        //    x.innerHTML = "Data";
        //}

        //var row = document.getElementById("myRow");
        //var x = row.insertCell(0);
        //x.innerHTML = "New cell";

        //document.getElementById("newsList");

        //for (var i = 0; i < listOfNews.length; i++) {
        //    document.getElementById("newsList").innerText += listOfNews[i].;

        //}

        //document.getElementById("newsList").innerText = listOfNews;
    }
    else if (response.status === 500) {
        console.log('Something went wrong..');
    }
}
