// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import "./App.css"; // Import your Tailwind CSS styles
//import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome for icons
//import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles


const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [loginForm, setLoginForm] = useState({
        identifier: "",
        password: "",
        rememberMe: false,
    });
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };
    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login form submitted:", loginForm);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header Section */}
            <header className="bg-white shadow-md fixed w-full z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-[#00ff00]">
                            <span className="text-[#00ff00]">M-</span>
                            <span className="text-[#cd0000]">Chama</span>
                        </div>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#about"
                            className="text-gray-700 hover:text-[#00ff00] transition duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#features"
                            className="text-gray-700 hover:text-[#00ff00] transition duration-300"
                        >
                            Features
                        </a>
                        <a
                            href="#benefits"
                            className="text-gray-700 hover:text-[#00ff00] transition duration-300"
                        >
                            Benefits
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-[#00ff00] transition duration-300"
                        >
                            Contact
                        </a>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            id="loginButton"
                            onClick={toggleLoginModal}
                            className="px-4 py-2 text-[#00ff00] border border-[#00ff00] rounded-button hover:bg-[#00ff00] hover:text-white transition duration-300 whitespace-nowrap cursor-pointer"
                        >
                            Login
                        </button>
                        {/* Login Modal */}
                        {isLoginModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
                                    <button
                                        id="closeLoginModal"
                                        onClick={toggleLoginModal}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                    >
                                        <i className="fas fa-times text-xl"></i>
                                    </button>
                                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                                        Login to M-Chama
                                    </h2>
                                    <form
                                        id="loginForm"
                                        onSubmit={handleLoginSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="bg-blue-50 p-3 rounded-lg mb-4">
                                            <div className="flex items-center mb-2">
                                                <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                                                <span className="text-sm font-medium text-blue-700">
                          Demo Account Available
                        </span>
                                            </div>
                                            <div className="text-sm text-blue-600">
                                                Use these credentials to try the system:
                                                <div className="mt-1 font-mono bg-white p-2 rounded border border-blue-200">
                                                    Email: demo@m-chama.co.ke
                                                    <br />
                                                    Password: demo123
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="identifier"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Phone Number or Email
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="loginIdentifier"
                                                    type="text"
                                                    name="identifier"
                                                    value={loginForm.identifier}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                                                    placeholder="Enter phone number or email"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setLoginForm((prev) => ({
                                                            ...prev,
                                                            identifier: "demo@m-chama.co.ke",
                                                        }))
                                                    }
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#00ff00] hover:text-[#00dd00]"
                                                >
                                                    Fill Demo
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="loginPassword"
                                                    type="password"
                                                    name="password"
                                                    value={loginForm.password}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                                                    placeholder="Enter password"
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setLoginForm((prev) => ({
                                                            ...prev,
                                                            password: "demo123",
                                                        }))
                                                    }
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#00ff00] hover:text-[#00dd00]"
                                                >
                                                    Fill Demo
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="rememberMe"
                                                    type="checkbox"
                                                    name="rememberMe"
                                                    checked={loginForm.rememberMe}
                                                    onChange={handleInputChange}
                                                    className="h-4 w-4 text-[#00ff00] focus:ring-[#00ff00] border-gray-300 rounded"
                                                />
                                                <label
                                                    htmlFor="rememberMe"
                                                    className="ml-2 block text-sm text-gray-700"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <a
                                                id="forgotPassword"
                                                href="#"
                                                className="text-sm text-[#00ff00] hover:text-[#00dd00]"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <button
                                            id="submitLogin"
                                            type="submit"
                                            className="w-full px-4 py-2 bg-[#00ff00] text-white rounded-button hover:bg-[#00dd00] transition duration-300 whitespace-nowrap"
                                        >
                                            Login
                                        </button>
                                        <div className="text-center mt-4">
                      <span className="text-gray-600">
                        Don't have an account?
                      </span>
                                            <a
                                                id="signupLink"
                                                href="#"
                                                className="ml-1 text-[#00ff00] hover:text-[#00dd00]"
                                            >
                                                Sign up
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        <a
                            href="https://readdy.ai/home/4140dace-ee34-45a9-a47b-1a6de15bc824/6a48bc45-3841-4426-a343-1d3222bcaa14"
                            data-readdy="true"
                        >
                            <button className="px-4 py-2 bg-[#00ff00] text-white rounded-button hover:bg-[#00dd00] transition duration-300 whitespace-nowrap cursor-pointer">
                                Sign Up
                            </button>
                        </a>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <i
                            className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
                        ></i>
                    </button>
                </div>
                {/* Mobile Navigation */}
                <div
                    className={`md:hidden bg-white ${isMenuOpen ? "block" : "hidden"}`}
                >
                    <div className="px-4 py-3 space-y-3">
                        <a
                            href="#about"
                            className="block text-gray-700 hover:text-[#00ff00] transition duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#features"
                            className="block text-gray-700 hover:text-[#00ff00] transition duration-300"
                        >
                            Features
                        </a>
                        <a
                            href="#benefits"
                            className="block text-gray-700 hover:text-[#00ff00] transition duration-300"
                        >
                            Benefits
                        </a>
                        <a
                            href="#contact"
                            className="block text-gray-700 hover:text-[#00ff00] transition duration-300"
                        >
                            Contact
                        </a>
                        <div className="pt-3 flex flex-col space-y-3">
                            <button
                                id="loginButton"
                                onClick={toggleLoginModal}
                                className="px-4 py-2 text-[#00ff00] border border-[#00ff00] rounded-button hover:bg-[#00ff00] hover:text-white transition duration-300 whitespace-nowrap cursor-pointer"
                            >
                                Login
                            </button>
                            {/* Login Modal */}
                            {isLoginModalOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
                                        <button
                                            id="closeLoginModal"
                                            onClick={toggleLoginModal}
                                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                        >
                                            <i className="fas fa-times text-xl"></i>
                                        </button>
                                        <h2 className="text-2xl font-bold mb-6 text-gray-800">
                                            Login to M-Chama
                                        </h2>
                                        <form
                                            id="loginForm"
                                            onSubmit={handleLoginSubmit}
                                            className="space-y-4"
                                        >
                                            <div className="bg-blue-50 p-3 rounded-lg mb-4">
                                                <div className="flex items-center mb-2">
                                                    <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                                                    <span className="text-sm font-medium text-blue-700">
                            Demo Account Available
                          </span>
                                                </div>
                                                <div className="text-sm text-blue-600">
                                                    Use these credentials to try the system:
                                                    <div className="mt-1 font-mono bg-white p-2 rounded border border-blue-200">
                                                        Email: demo@m-chama.co.ke
                                                        <br />
                                                        Password: demo123
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="identifier"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Phone Number or Email
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        id="loginIdentifier"
                                                        type="text"
                                                        name="identifier"
                                                        value={loginForm.identifier}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                                                        placeholder="Enter phone number or email"
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setLoginForm((prev) => ({
                                                                ...prev,
                                                                identifier: "demo@m-chama.co.ke",
                                                            }))
                                                        }
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#00ff00] hover:text-[#00dd00]"
                                                    >
                                                        Fill Demo
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="password"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Password
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        id="loginPassword"
                                                        type="password"
                                                        name="password"
                                                        value={loginForm.password}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                                                        placeholder="Enter password"
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setLoginForm((prev) => ({
                                                                ...prev,
                                                                password: "demo123",
                                                            }))
                                                        }
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#00ff00] hover:text-[#00dd00]"
                                                    >
                                                        Fill Demo
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <input
                                                        id="rememberMe"
                                                        type="checkbox"
                                                        name="rememberMe"
                                                        checked={loginForm.rememberMe}
                                                        onChange={handleInputChange}
                                                        className="h-4 w-4 text-[#00ff00] focus:ring-[#00ff00] border-gray-300 rounded"
                                                    />
                                                    <label
                                                        htmlFor="rememberMe"
                                                        className="ml-2 block text-sm text-gray-700"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a
                                                    id="forgotPassword"
                                                    href="#"
                                                    className="text-sm text-[#00ff00] hover:text-[#00dd00]"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <button
                                                id="submitLogin"
                                                type="submit"
                                                className="w-full px-4 py-2 bg-[#00ff00] text-white rounded-button hover:bg-[#00dd00] transition duration-300 whitespace-nowrap"
                                            >
                                                Login
                                            </button>
                                            <div className="text-center mt-4">
                        <span className="text-gray-600">
                          Don't have an account?
                        </span>
                                                <a
                                                    id="signupLink"
                                                    href="#"
                                                    className="ml-1 text-[#00ff00] hover:text-[#00dd00]"
                                                >
                                                    Sign up
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                            <a
                                href="https://readdy.ai/home/4140dace-ee34-45a9-a47b-1a6de15bc824/6a48bc45-3841-4426-a343-1d3222bcaa14"
                                data-readdy="true"
                            >
                                <button className="px-4 py-2 bg-[#00ff00] text-white rounded-button hover:bg-[#00dd00] transition duration-300 whitespace-nowrap cursor-pointer">
                                    Sign Up
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {/* Hero Section */}
            <section
                className="pt-24 md:pt-0 relative overflow-hidden"
                style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Kenyan%20community%20groups%20meeting%20under%20a%20tree%2C%20discussing%20finances%20with%20mobile%20phones%20in%20hand%2C%20bright%20sunlight%20filtering%20through%20leaves%2C%20rural%20Kenyan%20landscape%20in%20background%2C%20vibrant%20traditional%20clothing%2C%20positive%20atmosphere%2C%20high%20quality%20professional%20photography&width=1440&height=800&seq=1&orientation=landscape')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                <div className="container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl text-white relative z-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Welcome to M-Chama
                        </h1>
                        <h2 className="text-xl md:text-2xl mb-6">
                            Digital Group Savings Powered by M-PESA
                        </h2>
                        <p className="text-lg mb-8">
                            Revolutionizing how Chamas operate in Kenya with automated
                            savings, contributions, and loan disbursements - all through the
                            convenience of M-PESA.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="px-6 py-3 bg-[#00ff00] text-white rounded-button hover:bg-[#00dd00] transition duration-300 whitespace-nowrap cursor-pointer">
                                Get Started
                            </button>
                            <button className="px-6 py-3 text-white border border-white rounded-button hover:bg-white hover:text-gray-900 transition duration-300 whitespace-nowrap cursor-pointer">
                                Learn More
                            </button>
                        </div>
                        <div className="mt-8 flex items-center space-x-4">
                            <p className="text-white">Powered by:</p>
                            <div className="flex items-center space-x-3">
                                <div className="bg-white rounded-lg px-3 py-1">
                                    <span className="font-bold text-[#00ff00]">Safaricom</span>
                                </div>
                                <div className="bg-white rounded-lg px-3 py-1">
                                    <span className="font-bold text-[#cd0000]">M-PESA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">About M-Chama</h2>
                        <div className="w-20 h-1 bg-[#00ff00] mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Transforming Traditional Chamas into Digital Powerhouses
                            </h3>
                            <p className="text-gray-700 mb-6">
                                M-Chama is a revolutionary digital platform that modernizes the
                                traditional Chama system in Kenya. By leveraging the power of
                                M-PESA and Safaricom's technology, we're empowering SMEs and
                                SACCOs to manage their group savings and loans with
                                unprecedented efficiency and transparency.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-[#00ff00] text-2xl font-bold">98%</div>
                                    <p className="text-gray-700">Reduction in payment delays</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-[#00ff00] text-2xl font-bold">10M+</div>
                                    <p className="text-gray-700">Kenyans use Chama systems</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-[#00ff00] text-2xl font-bold">45%</div>
                                    <p className="text-gray-700">Increase in savings rate</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-[#00ff00] text-2xl font-bold">100%</div>
                                    <p className="text-gray-700">Digital record keeping</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-xl">
                            <img
                                src="https://readdy.ai/api/search-image?query=Kenyan%20business%20people%20using%20mobile%20phones%20for%20financial%20transactions%2C%20modern%20office%20setting%20with%20traditional%20African%20decor%20elements%2C%20professional%20attire%2C%20focused%20expressions%2C%20bright%20natural%20lighting%2C%20high%20quality%20professional%20photography&width=600&height=600&seq=2&orientation=squarish"
                                alt="Kenyan professionals using M-Chama"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* How It Works Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">How M-Chama Works</h2>
                        <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Our platform simplifies every aspect of running a Chama, from
                            member management to financial transactions, all integrated
                            seamlessly with M-PESA.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-[#e6ffe6] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-users text-[#00ff00] text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Group Registration</h3>
                            <p className="text-gray-700">
                                Create your Chama in minutes with a simple registration process.
                                Add members and set contribution rules.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-[#e6ffe6] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-user-cog text-[#00ff00] text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Member Management</h3>
                            <p className="text-gray-700">
                                Easily add, remove, and manage members. Track contributions and
                                participation history.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-[#e6ffe6] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-mobile-alt text-[#00ff00] text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">M-PESA Integration</h3>
                            <p className="text-gray-700">
                                Seamless connection with M-PESA for automatic contributions,
                                disbursements, and loan repayments.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-[#e6ffe6] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-sync text-[#00ff00] text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Automated Savings & Loans
                            </h3>
                            <p className="text-gray-700">
                                Set up recurring contributions, manage group funds, and process
                                loan applications digitally.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <div className="relative">
                            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#00ff00] -translate-y-1/2 z-0"></div>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between">
                                <div className="w-12 h-12 bg-[#00ff00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                    1
                                </div>
                                <div className="w-12 h-12 bg-[#00ff00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                    2
                                </div>
                                <div className="w-12 h-12 bg-[#00ff00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                    3
                                </div>
                                <div className="w-12 h-12 bg-[#00ff00] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                    4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Key Features Section */}
            <section id="features" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                        <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            M-Chama combines powerful features with ease of use to create the
                            ultimate digital Chama experience.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#00ff00]">
                            <div className="text-[#00ff00] mb-4">
                                <i className="fas fa-money-bill-wave text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Automated M-PESA Contributions
                            </h3>
                            <p className="text-gray-700">
                                Schedule regular contributions with automated reminders and
                                M-PESA payment requests.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#00ff00]">
                            <div className="text-[#00ff00] mb-4">
                                <i className="fas fa-bell text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Smart Reminder System
                            </h3>
                            <p className="text-gray-700">
                                Customizable notifications ensure members never miss a
                                contribution deadline.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#00ff00]">
                            <div className="text-[#00ff00] mb-4">
                                <i className="fas fa-file-alt text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Digital Record Keeping
                            </h3>
                            <p className="text-gray-700">
                                Comprehensive digital records of all transactions, meetings, and
                                member activities.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#00ff00]">
                            <div className="text-[#00ff00] mb-4">
                                <i className="fas fa-chart-line text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Transparent Loan Management
                            </h3>
                            <p className="text-gray-700">
                                Streamlined loan application, approval, disbursement, and
                                repayment tracking.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#00ff00]">
                            <div className="text-[#00ff00] mb-4">
                                <i className="fas fa-shield-alt text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
                            <p className="text-gray-700">
                                Bank-grade security protocols protect all your group's financial
                                data and transactions.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#00ff00]">
                            <div className="text-[#00ff00] mb-4">
                                <i className="fas fa-chart-pie text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Financial Analytics
                            </h3>
                            <p className="text-gray-700">
                                Gain insights into your group's financial health with detailed
                                reports and analytics.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#00ff00]">
                            <div className="text-[#00ff00] mb-4">
                                <i className="fas fa-vote-yea text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Democratic Governance
                            </h3>
                            <p className="text-gray-700">
                                Built-in voting and decision-making tools for transparent group
                                governance.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#00ff00]">
                            <div className="text-[#00ff00] mb-4">
                                <i className="fas fa-calendar-alt text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Meeting Management</h3>
                            <p className="text-gray-700">
                                Schedule, notify, and record minutes for physical or virtual
                                Chama meetings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Benefits Section */}
            <section id="benefits" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Benefits</h2>
                        <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            M-Chama delivers unique advantages for everyone involved in the
                            Chama ecosystem.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="mb-6">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Kenyan%20business%20leader%20in%20professional%20attire%20using%20tablet%2C%20modern%20office%20setting%2C%20confident%20expression%2C%20digital%20financial%20management%2C%20clean%20background%2C%20high%20quality%20professional%20photography&width=400&height=300&seq=3&orientation=landscape"
                                    alt="Group Administrator"
                                    className="w-full h-48 object-cover object-top rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                For Group Administrators
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Automated member management</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Simplified record keeping</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Transparent financial tracking</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Reduced administrative burden</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Enhanced governance tools</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="mb-6">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20Kenyan%20people%20smiling%20while%20using%20smartphones%20for%20mobile%20banking%2C%20outdoor%20cafe%20setting%2C%20bright%20natural%20lighting%2C%20casual%20modern%20clothing%2C%20positive%20atmosphere%2C%20high%20quality%20professional%20photography&width=400&height=300&seq=4&orientation=landscape"
                                    alt="Chama Members"
                                    className="w-full h-48 object-cover object-top rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">For Members</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Convenient M-PESA contributions</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Timely reminders and notifications</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Personal contribution tracking</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Simplified loan applications</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Transparent group activities</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="mb-6">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Small%20Kenyan%20business%20storefront%20with%20owner%20using%20digital%20payment%20system%2C%20urban%20setting%2C%20customers%20shopping%2C%20bright%20and%20colorful%20merchandise%20display%2C%20successful%20small%20business%20atmosphere%2C%20high%20quality%20professional%20photography&width=400&height=300&seq=5&orientation=landscape"
                                    alt="Business Growth"
                                    className="w-full h-48 object-cover object-top rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                For Business Growth
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Increased savings discipline</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Easier access to group loans</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Business expansion opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Financial history building</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#00ff00] mt-1 mr-2"></i>
                                    <span>Community economic empowerment</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Getting Started Guide */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
                        <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Join M-Chama in three simple steps and transform how your group
                            saves and grows together.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#e6ffe6] rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-download text-[#00ff00] text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                1. Download the App
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Get the M-Chama app from Google Play Store or App Store.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#e6ffe6] rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-user-plus text-[#00ff00] text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                2. Register Account
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Create your personal account using your M-PESA registered phone
                                number.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#e6ffe6] rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-users-cog text-[#00ff00] text-3xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                3. Create/Join Group
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Start your own Chama or join an existing one with an invitation
                                code.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="flex items-center px-6 py-3 bg-black text-white rounded-button hover:bg-gray-800 transition duration-300 whitespace-nowrap cursor-pointer">
                                <i className="fab fa-google-play mr-2"></i>
                                <span>Google Play</span>
                            </button>
                            <button className="flex items-center px-6 py-3 bg-black text-white rounded-button hover:bg-gray-800 transition duration-300 whitespace-nowrap cursor-pointer">
                                <i className="fab fa-apple mr-2"></i>
                                <span>App Store</span>
                            </button>
                        </div>
                        <div className="mt-8">
                            <div className="bg-gray-100 p-4 rounded-lg inline-block">
                                <div className="text-center mb-2">Scan to Download</div>
                                <div className="w-32 h-32 bg-white p-2 mx-auto">
                                    <div className="w-full h-full bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Trust & Security Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Trust & Security</h2>
                        <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-6"></div>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Your security is our priority. M-Chama leverages Safaricom's
                            trusted infrastructure and advanced security protocols.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/m-chama-security.png"
                                    alt="M-Chama Security"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="mr-4 text-[#00ff00]">
                                        <i className="fas fa-lock text-3xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Bank-Grade Security
                                        </h3>
                                        <p className="text-gray-700">
                                            We implement the same security standards used by leading
                                            financial institutions to protect your data and
                                            transactions.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-4 text-[#00ff00]">
                                        <i className="fas fa-shield-alt text-3xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            M-PESA Integration
                                        </h3>
                                        <p className="text-gray-700">
                                            Direct integration with M-PESA ensures all financial
                                            transactions are secure, traceable, and protected.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-4 text-[#00ff00]">
                                        <i className="fas fa-building text-3xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Safaricom Backing
                                        </h3>
                                        <p className="text-gray-700">
                                            As a Safaricom-powered solution, M-Chama benefits from the
                                            infrastructure and expertise of Kenya's leading
                                            telecommunications provider.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-4 text-[#00ff00]">
                                        <i className="fas fa-user-shield text-3xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Data Protection
                                        </h3>
                                        <p className="text-gray-700">
                                            Your personal and financial information is encrypted and
                                            protected in compliance with Kenya's data protection
                                            regulations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call-to-Action Section */}
            <section className="py-16 bg-[#00ff00] bg-opacity-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 p-8 md:p-12">
                                <h2 className="text-3xl font-bold mb-4">
                                    Ready to Transform Your Chama?
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    Join thousands of Chamas across Kenya who are already
                                    experiencing the benefits of digital transformation with
                                    M-Chama.
                                </p>
                                <form className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                                        />
                                    </div>
                                    <div>
                                        <button className="w-full px-4 py-3 bg-[#00ff00] text-white rounded-button hover:bg-[#00dd00] transition duration-300 whitespace-nowrap cursor-pointer">
                                            Register Interest
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-6 text-center text-gray-600">
                                    <p>Or contact us directly</p>
                                    <div className="mt-2 flex justify-center space-x-4">
                                        <a
                                            href="#"
                                            className="text-[#00ff00] hover:text-[#00dd00] cursor-pointer"
                                        >
                                            <i className="fab fa-whatsapp text-2xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-[#00ff00] hover:text-[#00dd00] cursor-pointer"
                                        >
                                            <i className="fas fa-phone text-2xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-[#00ff00] hover:text-[#00dd00] cursor-pointer"
                                        >
                                            <i className="fas fa-envelope text-2xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 relative">
                                <img
                                    src="/images/community.png"
                                        alt="M-Chama Community"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                    <div className="text-center text-white p-6">
                                        <h3 className="text-2xl font-bold mb-2">
                                            Join Our Community
                                        </h3>
                                        <p className="mb-4">
                                            Over 10,000 Chamas already trust M-Chama
                                        </p>
                                        <button className="px-6 py-2 bg-white text-[#00ff00] rounded-button hover:bg-gray-100 transition duration-300 whitespace-nowrap cursor-pointer">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer id="contact" className="bg-gray-900 text-white pt-12 pb-6">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-bold mb-4">
                                <span className="text-[#00ff00]">M-</span>
                                <span className="text-[#cd0000]">Chama</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Revolutionizing group savings and loans in Kenya through digital
                                innovation.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#about"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#features"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#benefits"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        Benefits
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                    >
                                        Security
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt mt-1 mr-2 text-[#00ff00]"></i>
                                    <span className="text-gray-400">
                    Safaricom House, Waiyaki Way, Nairobi, Kenya
                  </span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-phone mt-1 mr-2 text-[#00ff00]"></i>
                                    <span className="text-gray-400">+254 722 000000</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-envelope mt-1 mr-2 text-[#00ff00]"></i>
                                    <span className="text-gray-400">support@m-chama.co.ke</span>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <h4 className="text-sm font-semibold mb-2">Payment Partners</h4>
                                <div className="flex space-x-3">
                                    <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                                    <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                                    <i className="fab fa-paypal text-2xl text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-500 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} M-Chama. All rights reserved. A
                            Safaricom powered service.
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
