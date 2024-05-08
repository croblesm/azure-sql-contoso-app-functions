import React from 'react'

export const Clippy = () => {
    const buttonStyle = {
        float: 'right'
    }
    return (
        <div className='card'>
            <div className='card-body'>
            <img src='./clippy.png' alt='clippy' />
            <h5 className='card-title'>Hello!</h5>
            <p className='card-text'>It looks like you're getting started with SQL bindings in JavaScript functions!</p>
            <a href='https://aka.ms/sqlbindings' className='btn btn-primary' style={buttonStyle}>Learn more</a>
            </div>
        </div>
    )
}