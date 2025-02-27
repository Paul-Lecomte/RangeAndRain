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
                    <h3 className="text-2xl font-semibold mt-4">Advanced Targeting</h3>
                    <p className="text-lg">
                        In advanced artillery tactics, the use of smoke for concealment and coordination with infantry is critical. Artillery teams often work with spotters to create suppression zones and disrupt enemy movement.
                    </p>
                    <h3 className="text-2xl font-semibold mt-4">Coordinating with Infantry</h3>
                    <p className="text-lg">
                        Successful artillery strikes require clear communication with infantry units. Suppressing key enemy positions with artillery can clear the path for infantry to advance.
                    </p>
                    <h3 className="text-2xl font-semibold mt-4">Range and Accuracy</h3>
                    <p className="text-lg">
                        Artillery range and accuracy are crucial for success. The longer the range, the more potential for dispersion of the shell. Ensuring accurate firing requires understanding the shell’s trajectory and adjusting for wind and elevation.
                    </p>
                    <h3 className="text-2xl font-semibold mt-4">Spotting with Forward Observers</h3>
                    <p className="text-lg">
                        Forward observers are experienced personnel who move alongside infantry and communicate directly with artillery teams. They can identify key enemy positions, call for artillery fire, and adjust strikes as needed.
                    </p>
                    <h3 className="text-2xl font-semibold mt-4">Adjusting for Wind and Elevation</h3>
                    <p className="text-lg">
                        Wind and elevation play a crucial role in the trajectory of artillery shells. Artillery teams need to make adjustments based on weather conditions and the target’s location. Wind can push shells off course, while elevation can impact the drop and distance traveled by the shell. Understanding these factors and adjusting accordingly is key to accurate artillery fire.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Page;