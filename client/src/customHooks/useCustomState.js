
export function useCustomState(param){
    
    let state = param;
    let setModalInfo = (newParam) => {
        state = newParam;
    }
    
    return [state,setModalInfo];
}