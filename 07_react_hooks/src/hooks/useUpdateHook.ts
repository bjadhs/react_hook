import { useEffect } from 'react';
export default function useUpdateHook(value: string){
    useEffect(()=>{
            console.log(value);
    }, [value]);
}