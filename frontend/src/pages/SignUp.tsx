// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const App: React.FC = () => {
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });

    // Error state
    const [errors, setErrors] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: ''
    });

    // Password strength state
    const [passwordStrength, setPasswordStrength] = useState(0);

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear error when user types
        setErrors({
            ...errors,
            [name]: ''
        });

        // Calculate password strength
        if (name === 'password') {
            calculatePasswordStrength(value);
        }
    };

    // Calculate password strength
    const calculatePasswordStrength = (password: string) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        setPasswordStrength(strength);
    };

    // Get strength color
    const getStrengthColor = () => {
        if (passwordStrength === 0) return 'bg-gray-200';
        if (passwordStrength === 1) return 'bg-red-500';
        if (passwordStrength === 2) return 'bg-yellow-500';
        if (passwordStrength === 3) return 'bg-blue-500';
        return 'bg-green-500';
    };

    // Get strength text
    const getStrengthText = () => {
        if (passwordStrength === 0) return 'Enter a password';
        if (passwordStrength === 1) return 'Weak';
        if (passwordStrength === 2) return 'Fair';
        if (passwordStrength === 3) return 'Good';
        return 'Strong';
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {
            fullName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: ''
        };
        let isValid = true;

        // Validate full name
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
            isValid = false;
        }

        // Validate phone number (Kenyan format)
        const phoneRegex = /^(?:\+254|0)[17]\d{8}$/;
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
            isValid = false;
        } else if (!phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Enter a valid Kenyan phone number';
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
            isValid = false;
        }

        // Validate password
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        }

        // Validate confirm password
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        // Validate terms acceptance
        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'You must accept the terms and privacy policy';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, proceed with submission
            console.log('Form submitted:', formData);
            // Here you would typically send the data to your backend
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header Section */}
            <header className="bg-white shadow-md w-full">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="https://readdy.ai/home/4140dace-ee34-45a9-a47b-1a6de15bc824/6b895e06-3a3d-49b1-806d-7c13bea6885a" data-readdy="true" className="text-2xl font-bold cursor-pointer">
                            <span className="text-[#00ff00]">M-</span>
                            <span className="text-[#cd0000]">Chama</span>
                        </a>
                    </div>
                    <a
                        href="https://readdy.ai/home/4140dace-ee34-45a9-a47b-1a6de15bc824/6b895e06-3a3d-49b1-806d-7c13bea6885a"
                        data-readdy="true"
                        className="text-gray-700 hover:text-[#00ff00] transition duration-300 flex items-center cursor-pointer"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back to Home
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-12">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch min-h-[800px]">
                    {/* Left Column - Image and Info */}
                    <div className="md:w-1/2 bg-gradient-to-br from-[#00ff00]/10 to-[#00ff00]/30 rounded-l-xl hidden md:flex flex-col justify-center items-center p-12 relative overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20Kenyan%20people%20using%20mobile%20phones%20for%20digital%20banking%20and%20savings%2C%20modern%20office%20setting%20with%20traditional%20African%20design%20elements%2C%20bright%20natural%20lighting%2C%20professional%20environment%2C%20financial%20technology%20concept%2C%20high%20quality%20professional%20photography&width=800&height=1024&seq=1&orientation=portrait"
                                alt="Digital Chama Community"
                                className="w-full h-full object-cover object-top opacity-20"
                            />
                        </div>
                        <div className="relative z-10 text-center max-w-md">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Join the Digital Chama Revolution</h2>
                            <div className="mb-8">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Kenyan%20business%20people%20using%20smartphones%20for%20mobile%20banking%2C%20sitting%20in%20modern%20office%20with%20traditional%20African%20decor%2C%20professional%20attire%2C%20focused%20expressions%2C%20bright%20natural%20lighting%2C%20financial%20technology%20concept%2C%20high%20quality%20professional%20photography&width=500&height=400&seq=2&orientation=landscape"
                                    alt="M-Chama App Users"
                                    className="w-full rounded-xl shadow-lg"
                                />
                            </div>
                            <div className="space-y-6 text-left">
                                <div className="flex items-start">
                                    <div className="bg-white p-2 rounded-full mr-4 shadow-md">
                                        <i className="fas fa-mobile-alt text-[#00ff00] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">M-PESA Integration</h3>
                                        <p className="text-gray-600">Seamlessly connect with your M-PESA account for easy contributions and withdrawals</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-2 rounded-full mr-4 shadow-md">
                                        <i className="fas fa-shield-alt text-[#00ff00] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Secure Transactions</h3>
                                        <p className="text-gray-600">Bank-grade security ensures your money and data are always protected</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-2 rounded-full mr-4 shadow-md">
                                        <i className="fas fa-users text-[#00ff00] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Community Growth</h3>
                                        <p className="text-gray-600">Join over 10,000 Chamas already transforming their financial future</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sign Up Form */}
                    <div className="md:w-1/2 bg-white rounded-xl md:rounded-l-none rounded-r-xl shadow-xl p-8 md:p-12">
                        <div className="max-w-md mx-auto">
                            <h1 className="text-3xl font-bold mb-2 text-gray-800">Create Your Account</h1>
                            <p className="text-gray-600 mb-8">Join M-Chama today and transform how your group saves and grows together.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name Field */}
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-user text-gray-400"></i>
                                        </div>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className={`w-full pl-10 pr-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00] text-sm`}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                                </div>

                                {/* Phone Number Field */}
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (M-PESA)</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-phone text-gray-400"></i>
                                        </div>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className={`w-full pl-10 pr-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00] text-sm`}
                                            placeholder="e.g., 0712345678 or +254712345678"
                                        />
                                    </div>
                                    {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
                                    <p className="mt-1 text-xs text-gray-500">Enter your M-PESA registered phone number</p>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-envelope text-gray-400"></i>
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00] text-sm`}
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-lock text-gray-400"></i>
                                        </div>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={`w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00] text-sm`}
                                            placeholder="Create a strong password"
                                        />
                                    </div>
                                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}

                                    {/* Password strength indicator */}
                                    <div className="mt-2">
                                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${getStrengthColor()}`}
                                                style={{ width: `${passwordStrength * 25}%` }}
                                            ></div>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500">{getStrengthText()}</p>
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <i className="fas fa-lock text-gray-400"></i>
                                        </div>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className={`w-full pl-10 pr-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00] text-sm`}
                                            placeholder="Confirm your password"
                                        />
                                    </div>
                                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                                </div>

                                {/* Terms and Privacy Policy */}
                                <div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="acceptTerms"
                                                name="acceptTerms"
                                                type="checkbox"
                                                checked={formData.acceptTerms}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-[#00ff00] border-gray-300 rounded focus:ring-[#00ff00]"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="acceptTerms" className="text-gray-600">
                                                I agree to the <a href="#" className="text-[#00ff00] hover:underline cursor-pointer">Terms of Service</a> and <a href="#" className="text-[#00ff00] hover:underline cursor-pointer">Privacy Policy</a>
                                            </label>
                                        </div>
                                    </div>
                                    {errors.acceptTerms && <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>}
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#00ff00] text-white py-3 rounded-button hover:bg-[#00dd00] transition duration-300 font-medium whitespace-nowrap cursor-pointer"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </form>

                            {/* Social Sign-up Options */}
                            <div className="mt-8">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-button bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap cursor-pointer">
                                        <i className="fab fa-google text-red-500 mr-2"></i>
                                        Google
                                    </button>
                                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-button bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap cursor-pointer">
                                        <i className="fab fa-facebook-f text-blue-600 mr-2"></i>
                                        Facebook
                                    </button>
                                </div>
                            </div>

                            {/* Login Link */}
                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{' '}
                                    <a href="#" className="text-[#00ff00] hover:underline font-medium cursor-pointer">
                                        Login here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white py-6 border-t">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <div className="text-xl font-bold">
                                <span className="text-[#00ff00]">M-</span>
                                <span className="text-[#cd0000]">Chama</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Digital Group Savings Powered by M-PESA</p>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-600 hover:text-[#00ff00] transition duration-300 text-sm cursor-pointer">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-[#00ff00] transition duration-300 text-sm cursor-pointer">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-[#00ff00] transition duration-300 text-sm cursor-pointer">Help Center</a>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-500 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} M-Chama. All rights reserved. A Safaricom powered service.
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-500 text-sm mr-2">Powered by:</span>
                            <span className="text-[#00ff00] font-bold mr-3">Safaricom</span>
                            <span className="text-[#cd0000] font-bold">M-PESA</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
