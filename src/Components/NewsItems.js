import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {

        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="conatainer my-3 " >
                <div className="align-items-center">
                    <div className="card" style={{ width: "18rem", minHeight: "389.91px" }}>
                        <img src={!(imageUrl) ? "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q=" : imageUrl} className="card-img-top" alt="..." style={{ height: "149.53px" }} />
                        <div className="card-body ">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary">Read More...</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems    