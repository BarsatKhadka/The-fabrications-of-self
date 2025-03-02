import React from "react";
import { Link } from "react-router-dom";

const Reflection = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">I recalled my Memory.</h1>
        <p className="mb-4">
          A trip long ago with the honors college. I recalled how I reacted
          anxiously when it was time to go into the small cave-like hole in the
          City Museum of St. Louis. And I reacted this way in front of a girl.
          Seriously, in front of a girl? But who is feeling this cringe?
        </p>
        <p className="mb-4">
          I recalled a recent memory of how my friend and I talked about how
          cringy moments like this are so uncomfortable to face. These memories
          built up together, bursting forth at that moment.
        </p>
        <p className="mb-4">
          But who feels that cringe? I am not that feeling—how could I be? It is
          different from me; that feeling occurred to "ME." It occurred to "ME,"
          but who is that? Think seriously. Is that feeling produced in my
          heart, causing me to say it happened to me? Because it feels located
          in that area. But it has no physical location; I don't think this is
          occurring in my physical heart. So is this invisible thing what we
          call mind?
        </p>
        <p className="mb-4">
          If I gather courage and look at that cringe and say it is not me—it
          occurred as a feeling, a mere thing that happened—the thing that was
          so affecting me just goes away, like that? I am not this feeling.
          That's the end. Hence, I live in peace. I still don't know who this
          "I" is living in peace after disregarding and confronting the feeling.
          But it's all clear because I no longer associate. It's certain: I am
          not this feeling. That's all I know right now.
        </p>
        <p className="mb-4">
          The magic is when I no longer associate, I don't care about the "me"
          that was feeling all those things. Because those feelings existed, not
          you. You are not that person who is feeling cringe; you are no one.
          There are feelings floating, and you simply don't associate. You have
          no sense of yourself as someone. That's liberating if you want to
          remain distant from anything that's affecting you.
        </p>
        <p className="mb-4">
          But the more you try to apply this technique to all types of feelings,
          the more you face the question: then who am I?
        </p>
        <p className="mb-4">
          You dodged a nervous feeling with the above technique. Instantly
          arises: then who am I?
        </p>
        <p className="mb-4">
          When you distance yourself from your feelings, declaring "I am not
          this feeling," you create space between your awareness and your
          experience. This space brings temporary relief but inevitably leads to
          the question of identity.
        </p>
        <div className="mt-4">
          <Link to="/" className="inline-block px-4 py-2 underline">
            Contents
          </Link>
          <Link to="/two" className="inline-block px-4 py-2 underline ml-4">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
