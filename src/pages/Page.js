import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import FlotaPage from './FlotaPage'

const Page = () => {

    return (
        <>
        <Route path="/" exact component={HomePage} />
        <Route path="/wynajem-indywidualny" component={FlotaPage} />
        <Route path="/kontakt" component={ContactPage} />
        </>
    );
}

export default Page;

