export class Ui{
    displayDataGame(data){
        let boxGames = ''
        for(let i = 0 ; i< data.length ; i++){
            boxGames += `
            <div class="col">
                <div data-id="${data[i].id}" class="card h-100 bg-transparent">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100">
                        </figure>
                        <figcaption>
                            <div class="hstack d-flex justify-content-between">
                                <h6 class="samll">${data[i].title}</h6>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="small  opacity-50 text-center card-text">${data[i].short_description.split(" ", 8)}</p>
                        </figcaption>
                    </div>
                    <div class="card-footer hstack samll justify-content-between">
                        <span class="badge badge-color">${data[i].genre}</span>
                        <span class="badge badge-color">${data[i].platform}</span>
                    </div>
                </div>
            </div>
        `
        document.getElementById("dataGame").innerHTML = boxGames
        }
    }
        displayDetails(data){
            let content = `
            <div class="col-md-4">
                <img src="${data.thumbnail}" class="w-100" alt="details image">
            </div>
            <div class="col-md-8">
                <h3>Title:${data.title}</h3>
                <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
                <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
                <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
                <p class="small">${data.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>
        `
        document.getElementById("detailsContent").innerHTML = content
        }
    }
