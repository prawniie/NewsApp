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

        document.getElementById("newsList").innerHTML = html + `</table>`;


    }
    else if (response.status === 500) {
        console.log('Something went wrong..');
    }
}
