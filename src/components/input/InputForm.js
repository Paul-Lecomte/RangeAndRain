'use client';
import { useState, useEffect } from 'react';
import { addDistanceToHistory } from '../../../utils/localStorageUtils';

const artilleryData = {
    "American/German": { name: "M1A1 155mm Howitzer / 8.8 cm Pak 43" },
    Soviet: { name: "ML-20 152mm Howitzer" },
    British: { name: "QF 25-pounder Howitzer" },
};

const InputForm = () => {
    const [faction, setFaction] = useState('American/German');
    const [distance, setDistance] = useState('');
    const [error, setError] = useState('');
    const [calculatedMil, setCalculatedMil] = useState(null);

    useEffect(() => {
        if (faction && distance) {
            const artillery = artilleryData[faction];
            if (artillery && !isNaN(distance) && distance >= 100 && distance <= 1600) {
                let mil;
                if (faction === 'American/German') {
                    mil = (-2.18e-12 * Math.pow(distance, 2)) - (0.237 * distance) + 1001.53;
                } else if (faction === 'Soviet') {
                    mil = (-1.05e-7 * Math.pow(distance, 2)) - (0.213 * distance) + 1141.65;
                } else if (faction === 'British') {
                    mil = (7.67e-10 * Math.pow(distance, 3)) - (1.96e-6 * Math.pow(distance, 2)) - (0.176 * distance) + 550.6;
                }
                setCalculatedMil(mil);
                setError('');
            } else {
                setCalculatedMil(null);
                setError(distance < 100 || distance > 1600 ? 'Distance must be between 100 and 1600 meters.' : 'Invalid faction or distance.');
            }
        } else {
            setCalculatedMil(null);
        }
    }, [faction, distance]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!faction || !distance || isNaN(distance) || distance < 100 || distance > 1600 || calculatedMil === null) {
            setError('Please provide valid inputs.');
            return;
        }
        setError('');
        addDistanceToHistory({ faction, distance, mil: calculatedMil, date: new Date().toLocaleString() });
        location.reload();
        setDistance('');
        setCalculatedMil(null);
    };

    return (
        <div className="max-w-md mx-auto bg-[#262626] text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Artillery Calculator</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="distance" className="block text-lg font-medium">Distance to Target (m)</label>
                    <input
                        type="number"
                        id="distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        className="w-full mt-2 p-3 rounded-lg bg-[#0D0D0D] border focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter distance"
                    />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <div>
                    <label htmlFor="faction" className="block text-lg font-medium">Faction</label>
                    <select
                        id="faction"
                        value={faction}
                        onChange={(e) => setFaction(e.target.value)}
                        className="w-full mt-2 p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="American/German">American/German</option>
                        <option value="Soviet">Soviet</option>
                        <option value="British">British</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#0D0D0D] text-white text-lg font-semibold hover:bg-[#D9D9D9] hover:text-[#0D0D0D] transition focus:ring-2 focus:ring-blue-500"
                >
                    Save Entry
                </button>
            </form>
            {calculatedMil !== null && (
                <div className="mt-6 text-xl text-center font-semibold">
                    <p>Calculated Mil: {Math.floor(calculatedMil)}</p>
                </div>
            )}
        </div>
    );
};

export default InputForm;
