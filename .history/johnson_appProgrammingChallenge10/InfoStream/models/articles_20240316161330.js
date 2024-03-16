class Article {
  constructor(
    id,
    type,
    author,
    bedrooms,
    bathrooms,
    squareFeet,
    date,
    headline,
    city,
    state,
    zipCode,
    imageUrl,
    description
  ) {
    this.id = id;
    this.type = type;
    this.author = author;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.squareFeet = squareFeet;
    this.date = date;
    this.headline = headline;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  toString() {
    return `${this.type} at ${this.headline}, ${this.city}, ${this.state} ${this.zipCode} - Author: $${this.author} - Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms} - Square Feet: ${this.squareFeet} - Year Built: ${this.date} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
  }
}

export default Article;
