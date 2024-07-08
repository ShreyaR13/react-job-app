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

import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './layouts/MainLayout';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJob from './pages/AddJob';

// const router = createBrowserRouter(createRoutesFromElements(<Route index element={<h1>My Jobs App</h1>} />));


const App = () => {
  // This function passes the newJob field (values) details as a prop/argument to the addJobSubmit function
  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return;
  };

  const deleteJob = async (jobId) => {
    // console.log('delete', jobId);
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE',
    })

  }

  const router = createBrowserRouter(createRoutesFromElements(
    // add parent route for rest of the routes
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
      {/* deleteJob gets passed on to JobPage */}
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='*' element={< NotFoundPage />} />
    </Route>
  ));

  return <RouterProvider router={router} />
  // return (
  //   <>
  //     <Navbar />
  //     <Hero />
  //     <HomeCards />
  //     <JobListings />
  //     <ViewAllJobs />
  //   </>
  // )
}

export default App