'use client';
import { useState, useEffect } from 'react';
import { addDistanceToHistory } from '../../../utils/localStorageUtils';

const artilleryData = {
    "American/German": {
        name: "M1A1 155mm Howitzer / 8.8 cm Pak 43",
    },
    Russian: {
        name: "ML-20 152mm Howitzer",
    },
    British: {
        name: "QF 25-pounder Howitzer",
    },
};

const InputForm = () => {
    const [faction, setFaction] = useState('');
    const [distance, setDistance] = useState('');
    const [error, setError] = useState('');
    const [calculatedMil, setCalculatedMil] = useState(null);

    // Calculate Mil for the selected faction in real-time
    useEffect(() => {
        if (faction && distance) {
            const artillery = artilleryData[faction];

            // Perform the calculation based on faction's artillery data
            if (artillery && !isNaN(distance) && distance > 0 && distance >= 100 && distance <= 1600) {
                let mil;

                // American/German calculation using the polynomial formula
                if (faction === 'American/German') {
                    mil = (-2.18 * Math.pow(10, -12) * Math.pow(distance, 2)) - (0.237 * distance) + 1001.53;
                }
                // Russian calculation using the polynomial formula
                else if (faction === 'Russian') {
                    mil = (-1.05 * Math.pow(10, -7) * Math.pow(distance, 2)) - (0.213 * distance) + 1141.65;
                }
                // British calculation
                else if (faction === 'British') {
                    mil = (7.67 * Math.pow(10, -10) * Math.pow(distance, 3))
                        - (1.96 * Math.pow(10, -6) * Math.pow(distance, 2))
                        - (0.176 * distance)
                        + 550.6;
                }

                setCalculatedMil(mil);
                setError(''); // Reset error if the calculation is valid
            } else {
                setCalculatedMil(null); // Reset calculation if the input is invalid
                if (distance < 100 || distance > 1600) {
                    setError('Distance must be between 100 and 1600 meters.');
                } else {
                    setError('Invalid faction or distance.');
                }
            }
        } else {
            setCalculatedMil(null); // Reset if there is no faction or distance
        }
    }, [faction, distance]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure valid input before submitting
        if (!faction || !distance || isNaN(distance) || distance <= 0 || distance < 100 || distance > 1600 || calculatedMil === null) {
            setError('Please select a faction, enter a valid distance between 100 and 1600 meters, and ensure the calculation is correct.');
            return;
        }

        // Clear the error message
        setError('');

        // Create the new distance object
        const newDistance = { faction, distance, mil: calculatedMil, date: new Date().toLocaleString() };

        // Add new distance to localStorage
        addDistanceToHistory(newDistance);

        // Clear the form fields after submission
        setDistance('');
        setCalculatedMil(null);
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h2 className="text-3xl font-semibold text-center mb-6">Artillery Calculator</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="distance" className="block text-lg font-medium mb-2">Distance to Target
                        (meters)</label>
                    <input
                        type="number"
                        id="distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter distance"
                    />
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="mb-6">
                    <label htmlFor="faction" className="block text-lg font-medium mb-2">Faction</label>
                    <select
                        id="faction"
                        value={faction}
                        onChange={(e) => setFaction(e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Faction</option>
                        <option value="American/German">American/German</option>
                        <option value="Russian">Russian</option>
                        <option value="British">British</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Save Entry
                </button>
            </form>

            {calculatedMil !== null && (
                <div className="mt-4 text-xl text-center font-semibold">
                    <p>Calculated Mil: {Math.floor(calculatedMil)}</p>
                </div>
            )}
        </div>
    );
};

export default InputForm;