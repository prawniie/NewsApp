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

    if (response.status === 200) {
        console.log('Showing all news..')
    }
    else if (response.status === 500) {
        console.log('Something went wrong..');
    }
}
