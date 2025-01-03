import { useEffect, useState } from "react";

const useLocalStorage =<T>(key: string, initialValue: T)=>{

    const [storedValue, setStoredValue] = useState<T>(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            console.log(`Error reading localstorage key ${key}`, error);
        }
    })
    const setValue = (value: T | ((val:T)=>T) )=> {
        
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }catch(error){
            console.log(`Error setting to localStorage key ${key}`, error);
        }
    }

    useEffect(()=>{
        const handleStorageChange = () =>{
            const item = window.localStorage.getItem(key);
            return item ? setStoredValue(JSON.parse(item)) :
            setStoredValue(initialValue);
        }
        window.addEventListener('storage', handleStorageChange);

        //cleanup function
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key, initialValue]);

    
    return [storedValue, setValue] as const;
}

export default useLocalStorage;