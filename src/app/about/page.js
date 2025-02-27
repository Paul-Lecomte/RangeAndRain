const Page = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg">
            <h1 className="text-4xl font-bold mb-6 text-center">About Artillery in Hell Let Loose</h1>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Beginner's Guide</h2>
                    <p className="text-lg mb-4">
                        Artillery in *Hell Let Loose* can be a powerful asset, but understanding how it works is key to using it effectively. This guide will explain the basics for beginners.
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Artillery is used for long-range bombardment.</li>
                        <li>You can target enemy positions based on map coordinates.</li>
                        <li>Communicating with your team about targets is essential.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold mt-4">Spotting and Targeting</h3>
                    <p className="text-lg">
                        To call in artillery, you need to have a spotter or use map coordinates to target specific areas. Spotters are usually located on the front lines and mark enemy positions for the artillery.
                    </p>
                    <h3 className="text-2xl font-semibold mt-4">Firing the Artillery</h3>
                    <p className="text-lg">
                        Once the target has been marked or the coordinates are set, the artillery commander will load the appropriate shell and fire. Timing and accuracy are key to hitting the target effectively.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-4">Advanced Artillery Details</h2>
                    <p className="text-lg mb-4">
                        Now, let's dive deeper into how artillery works at a tactical level.
                    </p>
                    <h3 className="text-2xl font-semibold mb-2">Shell Types</h3>
                    <ul className="list-disc pl-6">
                        <li><strong>High Explosive (HE)</strong>: Best for soft targets like infantry.</li>
                        <li><strong>Smoke Shells</strong>: Provide cover and concealment.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Page;