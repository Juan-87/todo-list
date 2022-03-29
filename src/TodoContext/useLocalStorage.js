import React from "react";

function useLocalStorage(itemName, initialValue) {
    const storage = localStorage.getItem(itemName);
    const parsedStorage = storage ? JSON.parse(storage) : initialValue;

    const [items, setItems] = React.useState(parsedStorage);

    const saveItems = (items) => {
        localStorage.setItem(itemName, JSON.stringify(items));

        setItems([...items]);
    }

    return [items, saveItems];
}

export { useLocalStorage };