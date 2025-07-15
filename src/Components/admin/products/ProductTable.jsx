// FILE: productTable.jsx

import React from 'react';

const ProductTable = ({ products }) => {
  const ProductRow = ({ product }) => (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
      <td className="p-4">
        <div className="flex items-center gap-4">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-12 h-12 object-cover rounded-md" 
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/cccccc/ffffff?text=Error'; }}
          />
          <span className="font-medium text-slate-800">{product.name}</span>
        </div>
      </td>
      <td className="p-4 text-slate-600">{product.category}</td>
      <td className="p-4 text-slate-600">${product.price.toFixed(2)}</td>
      <td className="p-4 text-center">
        <button className="p-2 rounded-full hover:bg-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        </button>
      </td>
    </tr>
  );

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-40 object-cover" 
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/ffffff?text=Error'; }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-slate-800">{product.name}</h3>
        <p className="text-sm text-slate-500 mt-1">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-indigo-600">${product.price.toFixed(2)}</p>
          <button className="p-2 rounded-full hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-6">
      <div className="hidden md:block bg-white rounded-lg shadow-sm border border-slate-200">
        <table className="w-full">
          <thead className="border-b border-slate-200">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wider">Product Name</th>
              <th className="p-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wider">Category</th>
              <th className="p-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wider">Price</th>
              <th className="p-4 text-center text-sm font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => <ProductRow key={product.id} product={product} />)}
          </tbody>
        </table>
      </div>
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default ProductTable;