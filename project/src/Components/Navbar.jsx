import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">The Fabrications of Self</h1>
        <div className="italic text-center mt-4 space-y-2">
          <p>With ignorance as condition, dependent origination arises.</p>
          <p>With formations as condition, ignorance arises.</p>
          <p>With consciousness as condition, formations arise.</p>
          <p>With name-and-form as condition, consciousness arises.</p>
          <p>With the six senses as condition, name-and-form arises.</p>
          <p>With contact as condition, the six senses arise.</p>
          <p>With feeling as condition, contact arises.</p>
          <p>With craving as condition, feeling arises.</p>
          <p>With clinging as condition, craving arises.</p>
          <p>With becoming as condition, clinging arises.</p>
          <p>With birth as condition, becoming arises.</p>
          <p>With aging and death as condition, birth arises.</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
