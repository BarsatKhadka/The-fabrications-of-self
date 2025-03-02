import React from "react";
import { Link } from "react-router-dom";

const PersonWithoutSelf = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          A Person Without Self Should Serve Those With Self
        </h1>
        <p className="mb-4">
          I have 5 chocolates in my bag. I don't take them out in front of my
          friends because they would eat my portion. This is how a person with a
          sense of self would think.
        </p>
        <p className="mb-4">
          For a person without attachment to self, things are different. Imagine
          yourself as truly boundless, with no sense of ownership or possession.
          You might feel joy simply witnessing 5 people enjoying 5 chocolates.
          In their enjoyment, they're nurturing their sense of self.
        </p>
        <p className="mb-4">
          I understand that I currently have no way to fully impart this wisdom,
          but the best I can do is make others happy by sharing these chocolates.
          Perhaps someday they'll realize that chocolates themselves aren't the
          source of true happiness, but that realization is far off. Let me give
          without this expectation, simply to bring them joy in the present moment.
        </p>
        <p className="mb-4">
          If you have no attachment to self, why would you need to eat the
          chocolates for your own gratification? It wouldn't matter to you. The
          feelings that arise from eating chocolate yourself are not you. So the
          chocolate should not matter to you.
        </p>
        <p className="mb-4">
          Again and again, recall this when you feel greedy for something. You
          are not, but your friends think they are. They exist. So your role is
          to serve and facilitate them because for you, any result does not
          matter. But for them, it matters a lot.
        </p>
        <div className="flex space-x-4">
          <Link to="/one" className="mt-4 inline-block px-4 py-2 underline">
            Previous
          </Link>
          <Link to="/three" className="mt-4 inline-block px-4 py-2 underline">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonWithoutSelf;
