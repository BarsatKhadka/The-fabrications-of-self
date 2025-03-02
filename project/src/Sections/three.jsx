import React from "react";
import { Link } from "react-router-dom";

const QuestionOfIdentity = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">The Question of Identity</h1>
        <p className="mb-4">
          The first section of "I recalled the memory" raises a profound
          question of identity. It attempts to reveal that we instinctively
          believe someone exists behind all these phenomena of experience.
        </p>
        <p className="mb-4">
          This pattern of thinking persists because we have been conditioned to
          experience life this way for so long. As the Dhammapada Verse 4 wisely
          notes:
        </p>
        <blockquote className="mb-4 border-l-4 pl-4 italic">
          "He abused me, he ill-treated me, he got the better of me, he stole my
          belongings;"
        </blockquote>
        <p className="mb-4">
          Such thoughts continuously arise within our consciousness.
        </p>
        <p className="mb-4">
          Here we hold a mistaken view of reality according to the Tathagata.
          Here is where the right view [The first of eight noble paths] becomes
          essential. The moment I associate myself with any object of contact, a
          sense of "I" is constructed.
        </p>
        <p className="mb-4">
          These objects of contact can be anything experienced through our six
          senses:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            With the ear, it might be music I hear, leading to "I like this
            music"
          </li>
          <li>
            With the eye, perhaps a beautiful person I see, creating the thought
            "I feel love" - in that moment, a self was fabricated
          </li>
          <li>
            With the tongue, tasting chocolate might trigger "I enjoy this
            flavor" - another instance of self-creation
          </li>
          <li>
            With the body, feeling pain might prompt "I am suffering" -
            reinforcing the illusion of a permanent self
          </li>
          <li>
            With the mind, remembering embarrassment might generate "I feel
            shame" - mistaking a temporary feeling for an identity
          </li>
        </ul>
        <p className="mb-4">
          But what is fueling this contact? Are these sense organs alone capable
          of leading to this great of a wrong view?
        </p>
        <Link to="/two" className="mt-4 inline-block px-4 py-2 underline">
          Previous
        </Link>
      </div>
    </div>
  );
};

export default QuestionOfIdentity;
