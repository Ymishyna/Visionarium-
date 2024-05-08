// import React from "react"
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import { logo } from "./assets"
// import { Home, CreatePost } from "./pages"

// const App = () => {
//   return (
//     <BrowserRouter>
//       <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
//         <Link to="/">
//           <img src={logo} alt="logo" className="w-28 object-contain" />
//         </Link>
//         <Link to="/create-post" className="font-inter font-midium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create
//         </Link>
//       </header>
//       <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
//         <Routes>
//           <Route path="/"element={<Home />} />
//           <Route path="/create-post" element={<CreatePost />} />
//         </Routes>

//       </main>




//     </BrowserRouter>
//   )
// }

// export default App;

// import React from "react"
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import { logo } from "./assets"
// import { Home, CreatePost } from "./pages"

// const App = () => {
//   return (
//     <BrowserRouter>
//       <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
//         <Link to="/">
//           <img src={logo} alt="logo" className="w-28 object-contain" />
//         </Link>
//         <Link to="/create-post" className="font-inter font-midium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create
//         </Link>
//       </header>
//       <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
//         <Routes>
//           <Route path="/"element={<Home />} />
//           <Route path="/create-post" element={<CreatePost />} />
//         </Routes>

//       </main>




//     </BrowserRouter>
//   )
// }

// export default App;

import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import name from "./assets/logo.png"; // Import the new logo image
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-4 border-pink-500">
      <div className="flex items-center">
        <Link to="/">
        <img src={name} alt="logo" className="w-12 xl:w-80 object-contain" />
          {/* <img src={logo} alt="logo" className="w-28 object-contain" /> */}
        </Link>
        </div>
        {/* Centered logo in the header */}
        {/* <img src={name} alt="logo" className="w-12 xl:w-80 object-contain" /> */}
        <div>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-gradient-to-r from-green-400 to-blue-700 text-white px-11 py-4 rounded-md"
        >
          Create
        </Link>
        </div>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
