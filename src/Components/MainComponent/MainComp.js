import React from 'react'
import Header from '../Header/Header'
import Banner from '../Body/Banner'
import MainBody from '../Body/MainBody'
import GetIntouch from '../Body/GetIntouch'
import Plan from '../Plan/Plan'
import Footer from '../Footer/Footer'

function MainComp() {
    return (
        <>
                <Header />
                <Banner />
                <MainBody />
                <GetIntouch />
                <Footer/>
                {/* <Plan/> */}
        </>
    )
}

export default MainComp
