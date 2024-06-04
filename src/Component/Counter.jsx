import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)


  return (
    <>
        <h2 className=' text-center font-bold text-4xl'>Counter Application </h2>
        <div className='text-center mt-10'>
            <button onClick={increment} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increment</button>

            <h2 className='text-4xl font-bold mt-5'>{count}</h2>
            <button onClick={decrement} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Decrement</button>
            <br /> 
            <br />
            <button onClick={reset} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Reset</button>

        </div>

    </>
  )
}

export default Counter