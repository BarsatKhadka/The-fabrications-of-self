import React from "react";
import { Link } from "react-router-dom";

export const Two = () => {
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
        
        <h1 className="text-2xl font-bold mt-8 mb-4">Thoughts Are Not "Theoretical"</h1>
        <p className="mb-4">
          Applied thought is action. When I get a thought of wanting to listen to a song, one of two conditions follows:
        </p>
        <p className="mb-4 font-semibold">Condition 1:</p>
        <p className="mb-4 pl-4">
          I have access to the internet and electronic devices to play the song—I instantly play it. This demonstrates how thought can transition from seemingly theoretical to concrete reality with remarkable speed.
        </p>
        <p className="mb-4 font-semibold">Condition 2:</p>
        <p className="mb-4 pl-4">
          I do not have access to electronic devices or the necessary conditions that would allow me to listen to music. In this case, the thought remains apparently theoretical. But importantly, it always retains the potential to become real, to manifest practically when conditions align.
        </p>
        <p className="mb-4">
          This is precisely why we must apply mindfulness to every thought that arises. Even thoughts that seem absurd or insignificant are not merely theoretical—they hold the potential to materialize under the right conditions.
        </p>
        <p className="mb-4">
          When you simply notice that thinking about music and finding it pleasurable can lead you directly to seeking out music, you begin to recognize patterns. Reading and identifying unwholesome patterns before they develop fully will benefit you tremendously in the long run.
        </p>
        <p className="mb-4">
          The Buddha speaks of this as "mental inclination":
        </p>
        <blockquote className="mb-4 border-l-4 pl-4 italic">
          "Bhikkhus, whatever a bhikkhu frequently thinks and ponders upon, that will become the inclination of his mind. If he frequently thinks and ponders upon thoughts of renunciation, he has abandoned the thought of sensual desire to cultivate the thought of renunciation, and then his mind inclines to thoughts of renunciation."
        </blockquote>
        <p className="mb-4">
          Let go of thinking patterns you don't wish to manifest in your life, and gradually results will appear.
        </p>
        <p className="mb-4">
          When thoughts arise, don't avoid them by redirecting attention to the breath or practicing loving-kindness meditation. Instead, this is precisely the moment to fully investigate what your thoughts are shaping you to become—what mental inclinations they're cultivating.
        </p>
        <p className="mb-4">
          "This is not me. This feeling is not me. This sensation is not me. These five aggregates are not me." Think in this way and you disassociate yourself from the illusion of self. Whenever you associate yourself with the "I" within, you're engaging in a pattern of unwholesome thought. Avoid this identification. It is a fire that will cause suffering, because all suffering occurs within the five aggregates.
        </p>
        
        <Link to="/one" className="mt-4 inline-block px-4 py-2 underline">
          Previous
        </Link>
      </div>
    </div>
  );
};

export default Two;
