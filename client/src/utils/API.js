import axios from "axios";

export default {
  getArticles: function() {
    return axios.get("/api/articles");
  },
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  queryNYT: function (query, page) {
    let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&page=${page}`
    let key = `&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`;
    return axios.get(`${queryUrl}${key}${query}`);
  }
};