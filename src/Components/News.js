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
            page: 1
        }
    }
    async newsUpdate() {
        let url = `${this.props.url}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults,
        })
    }
    async componentDidMount() {
        this.newsUpdate();

    }

    nextBtnHandler = async () => {
        this.setState({ page: this.state.page + 1 })
        this.newsUpdate();
    }

    previousBtnHandler = async () => {
        this.setState({ page: this.state.page - 1 })
        this.newsUpdate();

    }
    render() {
        return (
            <div className="container my-3">
                <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Loading />}
                <div className="row rounded-4" >
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
            </div >
        )
    }
}

export default News
