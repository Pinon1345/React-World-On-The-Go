import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {

  const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
    .then(response => response.json())

  return (
    <>
      <h1 className='text-center first-heading'>REACT WORLD</h1>

      <Suspense fallback={<h3>Countries are loading...</h3>}>

        <Countries countriesPromise = {countriesPromise}></Countries>

      </Suspense>

    </>
  )
}

export default App
