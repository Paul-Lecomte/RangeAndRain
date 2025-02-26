// Function to get the distance history from localStorage
export const getDistanceHistory = () => {
    return JSON.parse(localStorage.getItem('distanceHistory')) || [];
};

// Function to add a new distance to localStorage
export const addDistanceToHistory = (newDistance) => {
    const currentHistory = getDistanceHistory();
    const updatedHistory = [
        { ...newDistance, id: Date.now() },
        ...currentHistory,
    ];
    localStorage.setItem('distanceHistory', JSON.stringify(updatedHistory));
};

// Function to clear distance history from localStorage
export const clearDistanceHistory = () => {
    localStorage.removeItem('distanceHistory');
};

//delete a log from the history with the given id
export const removeSingleDistance = (id) => {
    const currentHistory = getDistanceHistory();
    const updatedHistory = currentHistory.filter(item => item.id !== id); // Filter out the item by id
    localStorage.setItem('distanceHistory', JSON.stringify(updatedHistory));
};