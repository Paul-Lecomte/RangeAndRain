const Page = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-6 text-white" aria-labelledby="page-title">
            <h1 id="page-title" className="text-5xl font-bold text-center mb-8" aria-level="1">
                About Artillery in Hell Let Loose
            </h1>

            {/* Beginner's Guide Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#262626] p-6 rounded-lg shadow-lg" role="region" aria-labelledby="beginner-guide">
                    <h2 id="beginner-guide" className="text-3xl font-semibold mb-4">Beginner's Guide</h2>
                    <p className="text-lg mb-4">
                        Artillery in *Hell Let Loose* is a critical weapon for long-range bombardment, and it requires coordination, timing, and strategy. Let’s start with the basics.
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Artillery is used to hit targets from afar.</li>
                        <li>Targeting is done through map coordinates or spotter markings.</li>
                        <li>Effective communication with the team is key to success.</li>
                    </ul>
                </div>

                {/* Advanced Details Section */}
                <div className="bg-[#262626] p-6 rounded-lg shadow-lg" role="region" aria-labelledby="advanced-details">
                    <h2 id="advanced-details" className="text-3xl font-semibold mb-4">Advanced Details</h2>
                    <p className="text-lg mb-4">
                        As you progress with artillery use, you’ll need to understand the advanced techniques to maximize its impact on the battlefield.
                    </p>
                    <h3 className="text-2xl font-semibold mt-4">Shell Types</h3>
                    <ul className="list-disc pl-6">
                        <li><strong>High Explosive (HE) Cost: 3 ammo</strong>: Best for destroying enemy infantry and light vehicles.</li>
                        <li><strong>Smoke Shells Cost: 5 ammo</strong>: These are used to provide cover and disrupt enemy sightlines.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold mt-4">Artillery Teamwork</h3>
                    <p className="text-lg">
                        Artillery is a team effort. Spotters help to identify targets, while the gunners execute the firing. Successful artillery strikes depend on both roles working seamlessly together.
                    </p>
                </div>
            </section>

            {/* Final Thoughts Section */}
            <section className="bg-[#262626] p-8 rounded-lg shadow-lg mb-12" role="region" aria-labelledby="final-thoughts">
                <h2 id="final-thoughts" className="text-3xl font-semibold mb-4">Final Thoughts</h2>
                <p className="text-lg mb-4">
                    Whether you're a beginner or a veteran, mastering artillery requires practice, patience, and communication. Work with your squad to coordinate strikes, and always be mindful of the timing and positioning of your shots. The more accurate and timely your fire, the more devastating its effects on the battlefield.
                </p>
            </section>

            <section className="bg-[#262626] p-8 rounded-lg shadow-lg mb-12" role="region" aria-labelledby="final-thoughts">
                <h2 className="text-3xl font-semibold mb-4">Math behind the calculator</h2>
                <p className="text-lg mb-4">
                    Let's talk about the math behind the calculator, i used  a cubic equation after testing it's what gave me the more accurate mil for a given distance here are each one
                </p>
                <h3>Allies / Axis</h3>
                <p>Mil=−2.18×10−12⋅Distance2−0.237⋅Distance+1001.53</p>
                <h3>Soviet</h3>
                <p>Mil=−1.05×10−7×Distance2−0.213×Distance+1141.65</p>
                <h3>British</h3>
                <p>mil=7.67×10−10⋅distance3−1.96×10−6⋅distance2−0.176⋅distance+550.6</p>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-[#262626] mt-12" role="contentinfo">
                <p className="text-lg">
                    This guide aims to improve your artillery gameplay and help your team achieve victory in *Hell Let Loose*.
                </p>
            </footer>
        </div>
    );
};

export default Page;