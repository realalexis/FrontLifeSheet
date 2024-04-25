import React, { createContext, useState, useContext } from 'react';

interface NavigationType{
    navigationMode: string;
    setNavigationMode: (mode: string) => void;
}

const NavigationContext = createContext<NavigationType>({
    navigationMode: 'year',
    setNavigationMode: () => {},
});

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
    const [navigationMode, setNavigationMode] = useState('year');

    return (
        <NavigationContext.Provider value={{ navigationMode, setNavigationMode }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);