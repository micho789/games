import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        document.getElementById("btnClose").addEventListener('click',()=>{
            document.getElementById("details").classList.add("d-none")
            document.getElementById("games").classList.remove("d-none")
        })
        this.getDetails(id)
    }
    async getDetails(id){
        const loading = document.querySelector(".loading");
		loading.classList.remove("d-none");

const options = {
	   method: 'GET',
	   headers: {
		   'x-rapidapi-key': 'd06a3c10e6msh6fbab9d9b3b3f8cp1798b6jsne21892ad4581',
		   'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
const response = await api.json()
console.log(response);
loading.classList.add("d-none")
const ui = new Ui()
ui.displayDetails(response)
    }

}