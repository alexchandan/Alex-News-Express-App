import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';

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
        let url = `${this.props.url}&page=1`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults
        })

    }

    nextBtnHandler = async () => {
        let url = `${this.props.url}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
        if (this.state.page + 1 === 2) {
            console.log("page2")
        }
    }

    previousBtnHandler = async () => {
        let url = `${this.props.url}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }
    render() {
        return (
            <div className="container my-3 pd-4">
                <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Loading />}
                <div className="row rounded-4" style={{ backgroundColor: '#e5e5e5' }} >
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col" key={element.url}>
                                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-success" onClick={this.previousBtnHandler}>&larr; Previous</button>
                        <button type="button" disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-success" onClick={this.nextBtnHandler}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
