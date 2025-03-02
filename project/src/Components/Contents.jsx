import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Content = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Contents:</h2>
      <ul className="list-decimal list-inside space-y-2">
        <li>
          <Link to="/one" className="text-blue-600 hover:underline">
            I recalled my memory
          </Link>
        </li>
        <li>
          <Link to="/two" className="text-blue-600 hover:underline">
            A person without self should serve those with self
          </Link>
        </li>
        <li>
          <Link to="/three" className="text-blue-600 hover:underline">
            The question of Identity
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Content;
