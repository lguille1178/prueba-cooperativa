"use client";
import {api} from "@/servicios/api.servicio"
import useSWR from "swr";
import Tarjetas from '@/componets/Card';


export default function Home() {
  // aqui traemos la data y la utilizamos de la conexion con la api
  const {data, mutate} = useSWR('/api/character', api); 
  // en ese console log mando a mostrar el array en la consla.
  // para ver si ya estamos recogiendo la info
  console.log(data?.data)
  // adentro del este return es donde seccionamos la informacion de persona api para mandarla a card.
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Peliculas</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
       
        {data && data.data.results.map((personaje) =>(
          <Tarjetas key={personaje.id} personaje={personaje} />
        ))} 
        
      </div>
    </main>
  );
}
