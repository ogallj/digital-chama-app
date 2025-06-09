import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                        <div className="text-red-600 text-4xl mb-4">
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h1>
                        <p className="text-gray-600 mb-4">
                            We're sorry, but something went wrong. Please try refreshing the page or contact support if the problem persists.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full bg-[#00ff00] text-white py-2 px-4 rounded-lg hover:bg-[#00dd00] transition duration-300"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 