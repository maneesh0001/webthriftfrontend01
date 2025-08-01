// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import LandingPage from "../pages/auth/LandingPage";
// import SignupPage from "../pages/auth/SignupPage";
// import LoginPage from "../pages/auth/loginpage";
// import ProtectedRoute from "../pages/auth/ProtectedRoute";
// import MainLayout from "../layouts/MainLayout";
// import AdminLayout from "../layouts/AdminLayout";
// import DashboardPage from "../pages/DashboardPage";
// import ProductPage from "../Components/admin/products/ProductPage";
// import OrderPage from "../Components/admin/orders/OrderPage";
// import { User } from "lucide-react";
// import UserPage from "../Components/admin/users/UserPage";
// import InventoryAlertPage from "../Components/admin/InventoryAlert/InventoryAlertPage";
// import SettingsPage from "../Components/admin/settings/SettingsPage";
// import Cart from "../Components/Dashboard/Cart";

// export default function AppRouter() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/signup" element={<SignupPage />} />
//                 <Route path="/" element={<LandingPage />} />
//                 <Route path="/cart" element={<Cart/>} />

//                 <Route path="/admin/*" element={
//                     <ProtectedRoute allowedRoles={["admin"]}>
//                         <AdminLayout />
//                     </ProtectedRoute>
//                 } >
//                     <Route index element={<Navigate to="admin/dashboard" replace />} />
//                     <Route path="dashboard" element={<DashboardPage />} />
//                     <Route path="products" element={<ProductPage />} /> 
//                     <Route path="orders" element={<OrderPage />} /> 
//                     <Route path="users" element={<UserPage />} />
//                     <Route path="alerts" element={<InventoryAlertPage />} />
//                     <Route path="settings" element={<SettingsPage />} />
                    




                    
//                 </Route>

//                 <Route path="/user/*" element={
//                     <ProtectedRoute allowedRoles={["user"]}>
//                         <MainLayout />
//                     </ProtectedRoute>
//                 } />
//             </Routes>
//         </BrowserRouter>

//     );
// }




import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/auth/LandingPage";
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/loginpage";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../Components/admin/products/ProductPage";
import OrderPage from "../Components/admin/orders/OrderPage";
import UserPage from "../Components/admin/users/UserPage";
import InventoryAlertPage from "../Components/admin/InventoryAlert/InventoryAlertPage";
import SettingsPage from "../Components/admin/settings/SettingsPage";
import ProfilePage from "../Components/admin/profile/ProfilePage"; // Added import
import Cart from "../Components/Dashboard/Cart";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/cart" element={<Cart />} />

                <Route
                    path="/admin/*"
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="products" element={<ProductPage />} />
                    <Route path="orders" element={<OrderPage />} />
                    <Route path="users" element={<UserPage />} />
                    <Route path="alerts" element={<InventoryAlertPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="profile" element={<ProfilePage />} /> {/* Added profile route */}
                </Route>

                <Route
                    path="/user/*"
                    element={
                        <ProtectedRoute allowedRoles={["user"]}>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
