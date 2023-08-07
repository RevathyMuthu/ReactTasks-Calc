import React from 'react'
const year = new Date();
const Footer = ({ length }) => {
    return (
        <footer>
            <>
                copyright &copy; {year.getFullYear()} <br />


            </> </footer>
    )
}

export default Footer