import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from 'axios';

// Create the context
const CommentsContext = createContext();

// Define the provider component
export const CommentsContextProvider = ({ children }) => {
    // Destructure children from props directly in function parameters

    // State for storing comments
    const [comments, setComments] = useState(null);

    // Function to fetch comments
    const getComments = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => setComments(response.data))
            .catch(error => console.log(error));
    };

    // Fetch comments on component mount
    useEffect(() => {
        getComments();
    }, []);

    // Memoize the context value to avoid unnecessary re-renders
    const contextValue = useMemo(() => ({ comments }), [comments]);

    // Return the context provider with value and children
    return (
        <CommentsContext.Provider value={contextValue}>
            {children}
        </CommentsContext.Provider>
    );
};

export default CommentsContext;
