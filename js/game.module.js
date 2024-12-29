import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Game{
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link) => 
            link.addEventListener('click' ,()=>{
                document.querySelector(".navbar-nav .active").classList.remove("active")
                link.classList.add('active')
                const category = link.dataset.category
                this.getGames(category)
            })
            
        )
        this.ui = new Ui()
        this.getGames("mmorpg")
    }


    async getGames(category){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd06a3c10e6msh6fbab9d9b3b3f8cp1798b6jsne21892ad4581',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
};
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const response = await api.json();
        loading.classList.add("d-none");
        console.log(response)
        this.ui.displayDataGame(response)

        document.querySelectorAll(".card").forEach((card)=>{
            card.addEventListener('click', ()=>{
                document.getElementById("details").classList.remove("d-none")
                document.getElementById("games").classList.add("d-none")
                const details = new Details(card.dataset.id)
            })
        })
    }

}