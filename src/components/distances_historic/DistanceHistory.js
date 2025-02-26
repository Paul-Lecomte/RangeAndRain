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
                <div className="space-y-4">
                    {history.map((item, id) => (
                        <div key={id}
                             className="p-4 rounded-lg shadow-md  justify-between items-center">
                            <div>
                                <p><strong>Faction:</strong> {item.faction}</p>
                                <p><strong>Distance:</strong> {item.distance} meters</p>
                                <p><strong>Mil:</strong> {Math.floor(item.mil)}</p>
                            </div>
                            <button onClick={() => handleRemoveSingleItem(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No distances logged yet.</p>
            )}
        </div>
    );
};

export default DistanceHistory;