
import './App.css'
import ProductCard from './components/ProductCard';

const App = () => {
  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 299,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      isOutOfStock: false
    },
    {
      id: 2,
      title: "Minimalist Smart Watch",
      price: 199,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      isOutOfStock: true
    },
    {
      id: 3,
      title: "Mechanical Gaming Keyboard",
      price: 129,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
      isOutOfStock: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Our Collection</h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            isOutOfStock={product.isOutOfStock}
          />
        ))}
      </div>
    </div>
  );
};
export default App;