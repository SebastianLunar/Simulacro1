import React from 'react'
import { Layout } from 'antd'

const Footer = () => {
    const { Footer } = Layout
    return (
        <Footer
            style={{
                textAlign: 'center',
                padding: 12,
                position: 'fixed',
                backgroundColor: "black",
                color: "white",
                bottom: 0,
                right: 0,
                left: 0,
                height: 50
            }}
        >
            Primal @ 2022
        </Footer>
    )
}

export default Footer