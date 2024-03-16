class Article {
  constructor(
    id,
    type,
    author,
    agency,
    date,
    headline,
    imageUrl,
    description
  ) {
    this.id = id;
    this.type = type;
    this.author = author;
    this.agency = agency;
    this.date = date;
    this.headline = headline;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  toString() {
    return `${this.type} ${this.headline} - Author: ${this.author} - Agency: ${this.agency} Date: ${this.date} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
  }
}

export default Article;
