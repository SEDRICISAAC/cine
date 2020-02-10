/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Sidebar = () => (
    <div class="px-4 flex mb-0 -ml-3">
    <div class="ml-g mt-0 px-10 py-2 w-46 h-scren bg-gray-200  ">
        <img class="rounded-full w-38 h-40 border-4" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/hipster-123-887999.png" alt="Mount"></img>
        <h1 class=" mt-1 py-4  ml-8 text-2sl font-bold text-left text-gray-400 flex mb-4">Menu</h1>

        <Link to="/home">
            <button class="text-sm block px-4 py-2 bg-white-800 flex mb-4 text-gray-800 hover:text-blue-700">
                <img class="flex h-8" src="https://img.icons8.com/ios-filled/50/000000/homebrew.png" alt="Mount"></img>
                Inicio
            </button>
        </Link>
        <Link to="/add_movie">
            <button class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-4">
                <img class="flex h-8"src="https://img.icons8.com/material-two-tone/24/000000/dropdown-field.png" alt="Mount"></img>
            Nueva Película
            </button>
        </Link>
        <Link to="/movies">
            <button  class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-4">
                <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/grid-2.png" alt="Mount"></img>
            Cartelera
            </button>
        </Link>
        
        <Link to="/rooms">
            <button class="block px-4 py-2 bg-white-800 text-gray-800 hover:text-blue-700 flex mb-4">
                <img class="flex h-8" src="https://img.icons8.com/carbon-copy/100/000000/combo-chart.png" alt="Mount"></img>
            Nueva Sala
            </button>
        </Link>
        <Link to="/schedules">
            <button  class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-4">
                <img class="flex h-8" src="https://img.icons8.com/wired/64/000000/microsoft-forms.png" alt="Mount"></img>  
            Horario
            </button>
        </Link>
        <Link to="/films_room">
            <button  class="block px-4 py-2 bg-white-500  hover:text-blue-700 flex mb-4">
                <img class="flex h-8" src="https://img.icons8.com/dotty/64/000000/login-as-user.png" alt="Mount"></img>  
            Asignar Peliculas
            </button>
        </Link> 
    </div>
</div>

)

export default Sidebar;