import ApiService from "../api";

class PortfolioService extends ApiService{
    getAllPortfolio = () => this.get("/api/portfolio");
}

const portfolio = new PortfolioService()

export default portfolio