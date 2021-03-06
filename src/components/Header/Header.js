import React from 'react'
import { GitHub, Mail, Linkedin } from 'react-feather';

import './index.scss';

export default () => {

    return (
        <header className='header'>
            <span className='logo'>Justas <span>Samuolis</span></span>
            <div className='social'>
                <a data-hoverable="true" href="https://github.com/justasam" alt="GitHub profile"><GitHub size={20} /></a>
                <a data-hoverable="true" href="https://www.linkedin.com/in/justas-s-157846108/" alt="Linkedin profile"><Linkedin size={20} /></a>
                <a data-hoverable="true" href="mailto:samuolis.just@gmail.com" alt="Email me"><Mail size={20} /></a>
            </div>
        </header>
    )
}