import React, { Component } from 'react'
import loading from './loading.gif'

export class Loading extends Component {
    render() {
        return (
            <div className='text-center mb-3'>
                <img src={loading} alt="loading" style={{ width: "40px", height: "auto" }} />
                <h4 className='mt-2'>Loading...</h4>
            </div>
        )
    }
}

export default Loading