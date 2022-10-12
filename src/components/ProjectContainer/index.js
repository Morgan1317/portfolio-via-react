import React, { useState } from 'react';
import Nav from '../Navigation';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';



export default function ProjectContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Project />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* // TODO: Add a comment describing what we are passing as props */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* // TODO: Add a comment explaining what is happening on the following line */}
        {renderPage()}
      </div>
    );
  }