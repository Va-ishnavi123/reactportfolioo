// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import ProjectDetails from './pages/ProjectDetails';
// import Contact from './pages/Contact';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/projects/:id" element={<ProjectDetails />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
