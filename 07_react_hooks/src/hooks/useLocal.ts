import {useState, useEffect} from 'react';

const getSavedValue = <T>(key: string, initialValue: T) =>{
    const savedValue = JSON.parse(localStorage.getItem(key) as string);
    if(savedValue) return savedValue;
    if(initialValue instanceof Function) return initialValue();
    return initialValue;
}

export default function useLocal<T>(key:string, initialValue: T){
    const [value, setValue] = useState(()=>{
    return getSavedValue(key, initialValue);
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    },[key, value]);

    return [value, setValue];
}