import React, { useState } from 'react';
import Nav from '../Navigation';
import About from '../About';
import Resume from '../Resume';
import Contact from '../Contact';
import Projects from '../Project/projects';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Resume':
                return <Resume />

            case 'Projects':
                return <Projects />

            case 'Contact':
                return <Contact />

            default: return <About />
        }
    };
    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    Isabelle Bertram
        </a>
            </h2>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {renderPage()}
            </div>
        </header>

    )
}

export default Header;