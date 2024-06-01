import React from 'react'


export const Footer = () => { 
    let footerStyle={
        border: "2px solid #8e64ce",
        padding: "8px",
        
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}