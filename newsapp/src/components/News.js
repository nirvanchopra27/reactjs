import React, { Component } from 'react';
import NewsItem from './NewsItem';

const API_KEY = "fb9175f0a1f14309b9a47f6a48aaac78";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.fetchNews();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.category !== this.props.category ||
      prevProps.query !== this.props.query
    ) {
      this.setState(
        { articles: [], page: 1, loading: true },
        () => this.fetchNews()
      );
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  fetchNews = async () => {
    const { page } = this.state;
    const category = this.props.category || "general";
    const pageSize = 6;
    const query = this.props.query;

    let url = query
      ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`
      : `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;

    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        articles: Array.isArray(data.articles) ? data.articles : [],
        totalResults: data.totalResults || 0,
        loading: false
      });
    } catch (error) {
      console.error("News fetch error:", error);
      this.setState({ loading: false });
    }
  };

  handleScroll = () => {
    // No infinite scroll logic
  };

  handleNext = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1, loading: true }),
      () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.fetchNews();
      }
    );
  };

  handlePrev = () => {
    this.setState(
      prevState => ({ page: prevState.page - 1, loading: true }),
      () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.fetchNews();
      }
    );
  };

  render() {
    const { articles, loading, page, totalResults } = this.state;
    const pageSize = 6;
    const maxPage = Math.ceil(totalResults / pageSize);

   return (
  <div className="container my-4" style={{ paddingTop: '120px' }}>
  <h2 className="text-center mb-4 text-capitalize fw-bold">
    {this.props.query
      ? `Search Results for "${this.props.query}"`
      : `${this.props.category || 'General'} News`}
  </h2>

        <div className="row">
          {Array.isArray(articles) && articles.length > 0 ? (
            articles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  link={article.url}
                  author={article.author}
                  publishedAt={article.publishedAt}
                  source={article.source?.name}
                />
              </div>
            ))
          ) : (
            !loading && (
              <div className="col-12 text-center">
                <p>No articles found.</p>
              </div>
            )
          )}
        </div>

        {loading && <h5 className="text-center mt-3">Loading...</h5>}

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-dark"
            onClick={this.handlePrev}
            disabled={page <= 1}
          >
            ⬅️ Previous
          </button>

          <button
            className="btn btn-secondary"
            onClick={this.handleNext}
            disabled={page >= maxPage}
          >
            Next ➡️
          </button>
        </div>
      </div>
    );
  }
}

export default News;
