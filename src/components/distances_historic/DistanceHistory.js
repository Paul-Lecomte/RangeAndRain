'use client';
import { useState, useEffect } from 'react';
import { getDistanceHistory, clearDistanceHistory, removeSingleDistance } from '../../../utils/localStorageUtils';

const DistanceHistory = () => {
    const [history, setHistory] = useState([]);

    // Load the distance history from localStorage when the component mounts
    useEffect(() => {
        const storedHistory = getDistanceHistory();
        setHistory(storedHistory);
    }, []);

    const handleClearHistory = () => {
        clearDistanceHistory();
        setHistory([]); // Clear the local state as well
    };

    const handleRemoveSingleItem = (id) => {
        removeSingleDistance(id);
        setHistory(getDistanceHistory()); // Reload the history after removal
    };

    return (
        <div className="mt-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mb-4">Distance History</h3>
                <button
                    onClick={handleClearHistory}
                    className="text-sm bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 focus:outline-none"
                >
                    Clear All
                </button>
            </div>

            {history.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-separate border-spacing-2">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 rounded-lg bg-[#262626] text-left">Faction</th>
                            <th className="px-4 py-2 rounded-lg bg-[#262626] text-left">Distance</th>
                            <th className="px-4 py-2 rounded-lg bg-[#262626] text-left">Mil</th>
                            <th className="px-4 py-2 rounded-lg bg-[#262626] text-left">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {history.map((item, id) => (
                            <tr key={id} className="transition-colors duration-200">
                                <td className="px-4 py-2 rounded-lg bg-[#262626]">{item.faction}</td>
                                <td className="px-4 py-2 rounded-lg bg-[#262626]">{item.distance} meters</td>
                                <td className="px-4 py-2 rounded-lg bg-[#262626]">{Math.floor(item.mil)}</td>
                                <td className="px-4 py-2 rounded-lg bg-[#262626] text-center">
                                    <button
                                        onClick={() => handleRemoveSingleItem(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No distances logged yet.</p>
            )}
        </div>
    );
};

export default DistanceHistory;