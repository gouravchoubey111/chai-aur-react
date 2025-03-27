import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "gourav",
    age: 26
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Card channel="chaiaurcode" someObj1={myObj} someObj2={newArr} /> */}
      <Card username="chaiaurcode" btnText="click me" />
      {/* <Card username="gourav" btnText="visit me" /> */}
      <Card username="gourav" />
      
    </>
  )
}

export default App










// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

//       {/* https://www.devui.in/components/card */}
//       <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
//         <img
//           src="https://images.pexels.com/photos/31266219/pexels-photo-31266219/free-photo-of-deer-under-cherry-blossoms-in-nara-park-japan.jpeg"
//           alt=""
//           className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
//         />
//         <div className="flex flex-col justify-between p-6 space-y-8">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
//             <p className="text-gray-400">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
//               soluta amet corporis accusantium aliquid consectetur eaque!
//             </p>
//           </div>
//           <button
//             type="button"
//             className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-black"
//           >
//             Read more
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
