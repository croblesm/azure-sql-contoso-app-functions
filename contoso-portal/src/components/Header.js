import React from 'react'

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        background: 'linear-gradient(#0078D4,#463668)',
        color: 'white',
        textAlign: 'left'
    }

    return(
        <div style={headerStyle}>
            <h1>Contoso Adventure Products Portal</h1>
        </div>
    )
}