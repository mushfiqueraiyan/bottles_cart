import React, { Suspense } from 'react'
import Bottles from './components/bottles/Bottles'


const bottlesPromise = fetch('./bottles.json')
                                  .then((res)=> res.json())

const App = () => {


  return (
    <div>
      <Suspense>
        <Bottles bottlesPromise={bottlesPromise}/>
      </Suspense>
    </div>

  )
}

export default App