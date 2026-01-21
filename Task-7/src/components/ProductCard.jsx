import React from 'react';
import { Button, Typography, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';

const ProductCard = ({ title, price, image, isOutOfStock }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transition-transform hover:scale-[1.02]">
      {/* Product Imege aye  */}
      <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className={`w-40 h-40 object-cointain ${isOutOfStock ? 'grayscale opacity-60' : ''}`}
        />
        {isOutOfStock && (
          <div className="absolute top-2 right-2">
            <Chip label="Out of Stock" color="error" size="small" />
          </div>
        )}
      </div>

      {/* Product Deteils */}
      <div className="p-5">
        <Typography variant="h6" component="h2" className="font-bold truncate">
          {title}
        </Typography>
        
        <div className="flex items-center justify-between mt-3">
          <Typography variant="h5" color="primary" className="font-semibold">
            ${price}
          </Typography>
          
          <div className="flex items-center text-gray-500 text-sm">
            <InventoryIcon fontSize="small" className="mr-1" />
            {isOutOfStock ? 'Unavailable' : 'In Stock'}
          </div>
        </div>

        {/* Action ka Button */}
        <div className="mt-5">
          <Button
            variant="contained"
            fullWidth
            startIcon={<ShoppingCartIcon />}
            disabled={isOutOfStock}
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              backgroundColor: isOutOfStock ? '#d1d5db' : '#2563eb',
              '&:hover': { backgroundColor: '#1d4ed8' }
            }}
          >
            {isOutOfStock ? 'Sold Out' : 'Buy Now'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;