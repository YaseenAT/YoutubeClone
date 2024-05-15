import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";


const chat = createSlice({
    name: 'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addchat:(state,action)=>{

            // splice will restrict length to 10 and will remove 1 msg from the top 
            state.messages.splice(OFFSET_LIVE_CHAT,1);
            state.messages.push(action.payload);

        }
    }
})

export default chat.reducer;
export const {addchat} = chat.actions;