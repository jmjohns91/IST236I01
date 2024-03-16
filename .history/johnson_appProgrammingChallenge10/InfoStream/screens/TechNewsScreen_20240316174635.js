import List from "../components/List/List";
import { articles } from "../data/dummy_data";






function TechNewsScreen() {
  const type = "tech";
  const displayedArticles = articles.filter((articleItem) => {
    return articleItem.type === type;
  });

  return <List items={displayedArticles} />;
}
export default TechNewsScreen;