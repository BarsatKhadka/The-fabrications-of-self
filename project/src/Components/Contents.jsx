import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Contents:</h2>
      <ul className="list-decimal list-inside space-y-2">
        <li>
          <Link to="/one" className="text-blue-600 hover:underline">
            Section one
          </Link>
        </li>
        <li>
          <Link to="/two" className="text-blue-600 hover:underline">
            Section two
          </Link>
        </li>

      </ul>
      <a href="https://formsubmit.co/el/lukode" target="_blank" className="underline">Submit your content</a>
      


    
    </main>
  );
};

export default Content;
