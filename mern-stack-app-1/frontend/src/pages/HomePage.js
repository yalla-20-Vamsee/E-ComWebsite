import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Books",
    "Monitors",
    "Videos",
    "Games"
  ];
  return (
    <>
      <ProductCarouselComponent />
      {
        categories.map(() => <CategoryCardComponent />)
      }
      
    </>
  );
};

export default HomePage;

