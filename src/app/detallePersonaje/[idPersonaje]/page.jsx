"use client"
import React from 'react'
import {detallePersonaje} from '@/servicios/api.servicio'

const IdPersonajes = async({params}) => {
    const idPersonaje = params.idPersonaje
    const personaje = await detallePersonaje(idPersonaje)
    console.log(personaje.data)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={personaje.data.image}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {personaje.data.name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {personaje.data.species}
          </p>
          
        </div>
      </div>
      <button
            href="http://localhost:3000/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Regresar
          </button>
    </div>
  );
}

export default IdPersonajes