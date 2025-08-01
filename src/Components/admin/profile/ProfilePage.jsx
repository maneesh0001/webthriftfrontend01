import React, { useState } from 'react';
import { Store } from 'lucide-react';

const ProfilePage = () => {
    // State for the Store Profile form
    const [storeProfile, setStoreProfile] = useState({
        name: 'My Awesome Thrift Store',
        email: 'contact@awesomethrift.com',
        description: 'Your one-stop shop for curated second-hand treasures.',
    });

    // Handler for profile input changes
    const handleProfileChange = (e) => {
        const { id, value } = e.target;
        setStoreProfile(prevState => ({ ...prevState, [id]: value }));
    };

    // Handler for profile form submission
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        console.log('Saving store profile:', storeProfile);
        // In a real application, you would send this data to your backend
        // Example: settingsService.updateStoreProfile(storeProfile);
        alert('Store profile updated successfully!'); // Using alert for demo, replace with a proper notification
    };

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Store Profile</h1>
                    <p className="text-lg text-gray-500 mt-2">Manage your store's public details.</p>
                </header>

                <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
                    {/* Main Content Area */}
                    <main className="flex-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                            <section>
                                <form id="store-profile" onSubmit={handleProfileSubmit}>
                                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">Store Information</h2>
                                    <p className="text-gray-500 mb-8">Update your store's name, contact information, and description.</p>
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
                                            <input type="text" id="name" value={storeProfile.name} onChange={handleProfileChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                                            <input type="email" id="email" value={storeProfile.email} onChange={handleProfileChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Store Description</label>
                                            <textarea id="description" rows="4" value={storeProfile.description} onChange={handleProfileChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                                        <button type="submit" className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-semibold shadow-sm transition-transform transform hover:scale-105">Save Changes</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
