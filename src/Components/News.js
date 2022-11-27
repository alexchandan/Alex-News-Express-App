import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    static defaultProps = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    articles = [];
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }
    async newsUpdate() {
        let url = `${this.props.url}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }
    async componentDidMount() {
        this.newsUpdate();

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `${this.props.url}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    };

    render() {
        return (
            <>
                <h2 className='text-center'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Loading />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}
                >
                    <div className="container my-3">
                        <div className="row rounded-4" >
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div className="col" key={element.url}>
                                        <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </InfiniteScroll>

            </>

        )
    }
}

export default News
