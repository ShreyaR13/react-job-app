// JSX CRASH COURSE

// import React from 'react'

// const App = () => {
//   const x = 10;
//   const y = 20;
//   const name = 'Shreya';
//   const names = ['Shreya', 'Pingu', 'Anup'];
//   const lastnames = ['Rajwade', 'Shre', 'Akkar']
//   const loggedIn = true;
//   // we dont need to do this since we are using tailwind
//   // which will need classNameName
//   const styles = {
//     color: 'orange',
//     fontSize: '55px',
//   }

//   return (
//     <>
//       <div classNameName='text-5xl'>App</div>
//       <p style={{ color: 'red', fontSize: '24px' }}>Hello {name}</p>
//       <br />
//       <p>The sum of {x} and {y} is {x + y}</p>
//       <br />
//       <ul>
//         <p classNameName='text-3lg font-bold'>Names are: </p>
//         {names.map((name, index) => (
//           // here key is added since without it, it throws a warning saying each prop should have a unique key
//           // if this array had an id, we could use it as key. But since we dont, we will use the 
//           // index of the list as a key
//           <li key={index} style={styles}>{name}</li>
//         ))}
//       </ul>
//       <br />
//       <ol>
//         <p classNameName='text-3lg font-bold'>Last names are:</p>
//         {lastnames.map((lastname, index) => (
//           <li key={index}>{lastname}</li>
//         ))}
//       </ol>
//       {/* ternary if else */}
//       {/* {loggedIn ? <h1>Welcome memer!</h1> : <h1>Hello Guest!</h1>} */}
//       {/* or */}
//       {loggedIn ? <h1>Welcome memer!</h1> : ''}
//       {/* or */}
//       {/* {loggedIn && <h1>Welcome member</h1>} */}
//     </>
//   )
// }

// export default App

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />

      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing 1 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Full-Time</div>
                  <h3 className="text-xl font-bold">Senior React Developer</h3>
                </div>

                <div className="mb-5">
                  We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
                </div>

                <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Boston, MA
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 2 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">Front-End Engineer (React)</h3>
                </div>

                <div className="mb-5">
                  Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
                </div>

                <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Miami, FL
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 3 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">React.js Developer</h3>
                </div>

                <div className="mb-5">
                  Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
                </div>

                <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Brooklyn, NY
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
        >
      </section>
    </>
  )
}

export default App