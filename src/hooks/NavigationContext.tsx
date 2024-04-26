import React, { createContext, useState, useContext } from 'react';

interface NavigationType{
    navigationMode: string;
    setNavigationMode: (mode: string) => void;
    // dataObj?: object
    // setDataObj: (data: object) => void
}

const NavigationContext = createContext<NavigationType>({
    navigationMode: 'year',
    setNavigationMode: () => {},
    // dataObj: {
    //     x: [1,2],
    //     y: [1,2]
    // },
    // setDataObj: () => {},
});

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
    const [navigationMode, setNavigationMode] = useState('year');
    // const [dataObj , setDataObj] = ise

    return (
        <NavigationContext.Provider value={{ navigationMode, setNavigationMode}}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);