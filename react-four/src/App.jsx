import React, { Suspense } from 'react'
import Bottles from './components/bottles/Bottles'
// import { add, diff, multiplyToNumbers, divide as div } from './utilities/math/Math'




const bottlesPromise = fetch('./bottles.json').then(res => res.json())


const App = () => {

  // const sum = add(2,4)
  // console.log(sum)

  // const subs = diff(2,2)
  // console.log(subs)

  // const gunfol = multiplyToNumbers(2,2)
  // console.log(gunfol)

  // const divide = 10 / 2

  // const bhag = div(10,2)
  // console.log(bhag)

  // const bottles = [
  //   {id: 1, name: "Pink water", price: 250, color: "pink"},
  //   {id: 2, name: "Blue water", price: 200, color: "Blue"},
  //   {id: 3, name: "Red water", price: 270, color: "Red"},
  // ];

  return (
    <div>
      <Suspense fallback={<h4>Bottles are loading....</h4>}>
      <Bottles bottlesPromise={bottlesPromise}/>
    </Suspense>
    </div>

  )
}

export default App