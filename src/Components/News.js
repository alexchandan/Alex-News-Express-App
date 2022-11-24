import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = [];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: this.totalResults
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c37e2ef951bf4f0caf7edba576d573eb"
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })

    }

    nextBtnHandler = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 100)) {
        }
        else {
            let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c37e2ef951bf4f0caf7edba576d573eb&page=${this.state.page + 1}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }
    previousBtnHandler = async () => {
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c37e2ef951bf4f0caf7edba576d573eb&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }
    render() {
        return (
            <div className="container my-3 pd-4">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row rounded-4" style={{ backgroundColor: '#e5e5e5' }} >
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col" key={element.url}>
                                <NewsItems title={element.title.slice(0, 64)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-success" onClick={this.previousBtnHandler}>&larr; Previous</button>
                        <button type="button" className="btn btn-success" onClick={this.nextBtnHandler}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
