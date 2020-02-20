import React from 'react';
import Home from "./Home/Home";
import Blog from "./Blog/Blog";

class PageRouter {
  constructor(meta) {
    const { type, parent, first_published_at } = meta;
    this.type = type;
    this.parent = parent;
    this.firstPublishedAt = first_published_at;
  }

  getComponent = (pageContent, props) => {
    switch(this.type) {
      case 'home.HomePage':
        return <Home content={pageContent} {...props}/>;
      case 'home.BlogPage':
        return <Blog content={pageContent} {...props} />;
      default:
        return <h1>Page type {this.type} not built or not registered!</h1>
    }
  }
};

export default PageRouter;
