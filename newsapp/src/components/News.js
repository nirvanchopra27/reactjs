import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0, // ✅ track total news count
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
    ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&pageSize=${pageSize}&page=${page}&apiKey=fb9175f0a1f14309b9a47f6a48aaac78`
    : `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=${pageSize}&page=${page}&apiKey=fb9175f0a1f14309b9a47f6a48aaac78`;

    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();

      this.setState(prevState => ({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false
      }));
    } catch (error) {
      console.error("News fetch error:", error);
      this.setState({ loading: false });
    }
  };

  handleScroll = () => {
    // 🔒 Disable infinite scroll (optional if using next/prev)
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
      <div className="container my-4">
        <h2 className="text-center mb-4 text-capitalize">
          {this.props.category || 'General'} News
        </h2>

        <div className="row">
          {articles.map((article, index) => (
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
          ))}
        </div>

        {loading && <h5 className="text-center mt-3">Loading...</h5>}

        {/* ✅ Prev/Next Buttons */}
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
