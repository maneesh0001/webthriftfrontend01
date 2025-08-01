// src/pages/CheckoutPage.jsx
import React, { useState, useEffect } from "react";

// Add initialCartItems prop and onBack prop
const CheckoutPage = ({ initialCartItems = [], onBack }) => {
  // Use initialCartItems if provided, otherwise fallback to a default empty array
  // In a real app, this might be managed by a global cart state.
  const [orderItems, setOrderItems] = useState(initialCartItems);

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [shippingAddress, setShippingAddress] = useState({
    streetAddress: "",
    apartmentSuite: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const shipping = 0; // As per image, "FREE"
  const taxRate = 0.08; // Example tax rate (8%)

  // Calculate order summary details
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    // Add your order submission logic here
    console.log("Placing Order...");
    console.log("Contact Info:", contactInfo);
    console.log("Shipping Address:", shippingAddress);
    console.log("Order Summary:", { subtotal, shipping, tax, total });
    console.log("Items:", orderItems);
    alert("Order placed successfully! (Placeholder)"); // Replace with actual success flow
    // After placing order, you might want to navigate back to home or a confirmation page
    if (onBack) {
      onBack();
    }
  };

  // Optional: If initialCartItems can change from parent, use useEffect to update internal state
  useEffect(() => {
    setOrderItems(initialCartItems);
  }, [initialCartItems]);


  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-gray-800 text-2xl mr-4">
          &larr; {/* Back button */}
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Left Column: Contact and Shipping Forms */}
        <div className="lg:w-2/3 space-y-8 mb-8 lg:mb-0">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input-field"
                value={contactInfo.firstName}
                onChange={handleContactChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input-field"
                value={contactInfo.lastName}
                onChange={handleContactChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field md:col-span-2"
                value={contactInfo.email}
                onChange={handleContactChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input-field md:col-span-2"
                value={contactInfo.phone}
                onChange={handleContactChange}
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Shipping Address
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                className="input-field"
                value={shippingAddress.streetAddress}
                onChange={handleShippingChange}
              />
              <input
                type="text"
                name="apartmentSuite"
                placeholder="Apartment, suite, etc. (optional)"
                className="input-field"
                value={shippingAddress.apartmentSuite}
                onChange={handleShippingChange}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="input-field"
                  value={shippingAddress.city}
                  onChange={handleShippingChange}
                />
                <select
                  name="state"
                  className="input-field"
                  value={shippingAddress.state}
                  onChange={handleShippingChange}
                >
                  <option value="">Select state</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  {/* Add more states as needed */}
                </select>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  className="input-field"
                  value={shippingAddress.zipCode}
                  onChange={handleShippingChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>
          <div className="space-y-4 mb-6">
            {orderItems.length === 0 ? (
                <p className="text-gray-600">No items to display.</p>
            ) : (
                orderItems.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 pb-3 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">
                        Size: {item.size || 'N/A'} • Qty: {item.qty}
                    </p>
                    {item.condition && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mt-1 inline-block ${
                            item.condition === "Like New" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                        }`}>
                        {item.condition}
                        </span>
                    )}
                    </div>
                    <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
                </div>
                ))
            )}
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2 text-gray-700 mb-6 border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium">{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-300 pt-2 mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-emerald-500 text-white py-3 rounded-md font-semibold hover:bg-emerald-600 transition-colors shadow-md"
          >
            Place Order
          </button>

          {/* Security and Returns Info */}
          <div className="text-center text-sm text-gray-500 mt-4 space-y-2">
            <p className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              Secure SSL encryption
            </p>
            <p className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              Free returns within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;