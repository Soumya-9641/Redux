const initial =0;

const changeNumber = (state = initial , action)=>{
        switch(action.type){
            case "INCREMENT" : return state+action.payload;
            case "DECREMENT" : return state - action.payload;
        
            default: return state;
        }
}

export default changeNumber;