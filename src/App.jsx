
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData(); 
  const [coffees, setCoffees ] = useState(loadedCoffees)

  return (
    <>


      <div className='grid mt-10 max-w-6xl mx-auto md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            >

            </CoffeeCard>)


        }
      </div>

    </>
  )
}

export default App
