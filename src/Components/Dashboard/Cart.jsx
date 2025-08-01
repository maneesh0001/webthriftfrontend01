// import React from "react";
// import { useCart } from "../../hooks/useCartHook";
// import { useCreateBooking } from "../../hooks/useBookingHook";

// const Cart = () => {
//   const { cartItems, isLoading, isError, clearCart } = useCart();
//   const { mutate: createBooking, isLoading: isBooking } = useCreateBooking();

//   if (isLoading) return <p>Loading cart...</p>;
//   if (isError) return <p>Failed to load cart.</p>;

//   const handleCheckout = () => {
//     if (!cartItems?.items?.length) {
//       alert("Cart is empty");
//       return;
//     }

//     const bookingData = {
//       items: cartItems.items.map((item) => ({
//         product: item.product._id,
//         quantity: item.quantity,
//       })),
//       totalPrice: cartItems.totalPrice,
//     };

//     createBooking(bookingData, {
//       onSuccess: () => {
//         alert("Checkout successful!");
//         clearCart(); // optional: clear cart after checkout
//       },
//       onError: () => {
//         alert("Checkout failed.");
//       },
//     });
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

//       {cartItems?.items?.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cartItems.items.map((item) => (
//               <li key={item._id} className="flex justify-between items-center border p-4 rounded">
//                 <div>
//                   <p className="font-medium">{item.product.name}</p>
//                   <p className="text-sm text-gray-500">
//                     Quantity: {item.quantity}
//                   </p>
//                 </div>
//                 <p className="text-pink-600 font-semibold">
//                   ${(item.product.price * item.quantity).toFixed(2)}
//                 </p>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-6 flex justify-between items-center">
//             <p className="font-bold text-lg">
//               Total: ${cartItems.totalPrice?.toFixed(2)}
//             </p>
//             <div className="space-x-2">
//               <button
//                 onClick={clearCart}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//               >
//                 Clear Cart
//               </button>

//               <button
//                 onClick={handleCheckout}
//                 disabled={isBooking}
//                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//               >
//                 {isBooking ? "Processing..." : "Checkout"}
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;




import React from "react";
import { useCart } from "../../hooks/useCartHook";
import { useCreateBooking } from "../../hooks/useBookingHook";

const Cart = () => {
  const { cartItems, isLoading, isError, clearCart } = useCart();
  const { mutate: createBooking, isLoading: isBooking } = useCreateBooking();

  if (isLoading) return <p>Loading cart...</p>;
  if (isError) return <p>Failed to load cart.</p>;

  const handleCheckout = () => {
    if (!cartItems?.items?.length) {
      alert("Cart is empty");
      return;
    }

    const bookingData = {
      items: cartItems.items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalPrice: cartItems.totalPrice,
    };

    createBooking(bookingData, {
      onSuccess: () => {
        alert("Checkout successful!");
        clearCart();
      },
      onError: () => {
        alert("Checkout failed.");
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems?.items?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.items.map((item) => {
              console.log("Product image URL:", `http://localhost:5000${item.product.image}`);

              return (
                <li
                  key={item._id}
                  className="flex items-center justify-between border p-4 rounded gap-4"
                >
                  {/* Product Image */}
                  <img
                    src={`http://localhost:5000${item.product.image}`}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>

                  {/* Price */}
                  <p className="text-pink-600 font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <p className="font-bold text-lg">
              Total: ${cartItems.totalPrice?.toFixed(2)}
            </p>
            <div className="space-x-2">
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                disabled={isBooking}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                {isBooking ? "Processing..." : "Checkout"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
