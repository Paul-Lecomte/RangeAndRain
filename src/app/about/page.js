// pages/about.js
import React from "react";

const Page = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg">
            <h1 className="text-4xl font-bold mb-6 text-center">About Artillery in Hell Let Loose</h1>

            <section>
                <h2 className="text-3xl font-semibold mb-4">Beginner's Guide</h2>
                <p className="text-lg mb-4">
                    Artillery in *Hell Let Loose* can be a powerful asset, but understanding how it works is key to using it effectively. This guide will explain the basics for beginners.
                </p>
                <ul className="list-disc pl-6">
                    <li>Artillery is used for long-range bombardment.</li>
                    <li>You can target enemy positions based on map coordinates.</li>
                    <li>Communicating with your team about targets is essential.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-3xl font-semibold mb-4">Advanced Artillery Details</h2>
                <p className="text-lg mb-4">
                    Now, let's dive deeper into how artillery works at a tactical level.
                </p>
                <h3 className="text-2xl font-semibold mb-2">Shell Types</h3>
                <ul className="list-disc pl-6">
                    <li><strong>High Explosive (HE)</strong>: Best for soft targets like infantry.</li>
                    <li><strong>Smoke Shells</strong>: Provide cover and concealment.</li>
                </ul>
            </section>
        </div>
    );
};

export default Page;
