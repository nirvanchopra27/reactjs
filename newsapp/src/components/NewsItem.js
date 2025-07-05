import React, { Component } from 'react';

const fallbackImage = "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, link } = this.props;

    return (
      <div className="card my-3 h-100">
        <img
          src={imageUrl || fallbackImage}
          onError={(e) => {
            e.target.onerror = null; // prevent infinite loop
            e.target.src = fallbackImage;
          }}
          className="card-img-top"
          alt="news"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title || "No Title Available"}</h5>
          <p className="card-text">{description || "No Description"}</p>
          <a
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
