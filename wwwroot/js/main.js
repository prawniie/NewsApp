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