const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://raghu_weconnect.herokuapp.com";

module.exports = baseUrl;
