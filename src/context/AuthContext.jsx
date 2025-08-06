// src/context/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

// Create the authentication context
// This creates a new React context that will hold our authentication state
const AuthContext = createContext(null);

// Create a provider component
// This component will wrap our application and make auth state available to all components
export const AuthProvider = ({ children }) => {
  // State to store user information (null means not authenticated)
  const [user, setUser] = useState(null);
  
  // Loading state to handle the initial check for authentication
  // This prevents flashing content while we check if the user is logged in
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on component mount
  // This runs once when the component is first rendered
  useEffect(() => {
    // Try to get the token from localStorage
    const token = localStorage.getItem("token");
    
    if (token) {
      // If a token exists, consider the user authenticated
      // In a real app, you would validate this token with your backend API
      // to ensure it's still valid and hasn't expired
      setUser({ id: "1", name: "Example User", token });
    }
    
    // Set loading to false once we've checked for authentication
    // This allows the rest of the app to render appropriately
    setLoading(false);
  }, []);

  // Login function - called when user submits login form
  const login = (userData) => {
    // In a real app, this would be replaced with an API call
    // that validates credentials and returns a real token
    
    // Generate a fake token for demonstration purposes
    
    // Store token in localStorage so it persists between page refreshes
    localStorage.setItem("token", userData.token);
    
    // Update our state with the user data and token
    setUser({ ...userData });
    
    return true; // Return success status
  };

  // Logout function - called when user clicks logout
  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    
    // Clear the user data from state, which will make isAuthenticated false
    setUser(null);
  };

  // Create the context value object that will be provided to consumers
  const value = {
    user,                    // The user object (null if not authenticated)
    loading,                 // Whether we're still checking authentication
    isAuthenticated: !!user, // Boolean conversion - true if user exists
    login,                   // Function to handle login
    logout                   // Function to handle logout
  };

  // Provide the authentication context to all child components
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
// This makes it easier for components to access the auth context
export const useAuth = () => {
  // Get the context value
  const context = useContext(AuthContext);
  
  // Make sure the hook is used within an AuthProvider
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};