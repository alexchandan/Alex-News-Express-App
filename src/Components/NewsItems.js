import React, { Component } from 'react'

export class NewsItems extends Component {
    constructor() {
        super();
        console.log('this is constructor')
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        let { title, discription, imageUrl } = this.props;
        return (
            <>
                <div className="container">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="{imageUrl}" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <a href="/" className="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItems