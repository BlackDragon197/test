import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
let finished = false
const initialState = {
    status: null,
    error: null,
    rests: [],
    filtered_rests: [],
    rest_types: [],
    filters: [],
};

export const fetchRest = createAsyncThunk(
    'rests',
    async function(){
        try {
            const response = await fetch('https://random-data-api.com/api/restaurant/random_restaurant?size=100')
            const data = await response.json()
            finished =!finished
            if(finished){
            return data;
            }
        } catch (error) {
            console.log(error)
        }
    }
)

const restSlice = createSlice({
    name: "rests",
    initialState,
    reducers: {
        setFilter(state, action){
            const mem = state.filters.indexOf(action.payload.rest)
            if(state.filters.includes(action.payload.rest)){
               state.filters.splice(mem, 1)
            }else{
            state.filters.push(action.payload.rest)
            }
            state.rests.map((rest) => {
                if (state.filters.includes(rest.type)){
                state.filtered_rests.push(rest)
            }else{
                state.filtered_rests = []
                state.rests.map(rest=>{
                    if(state.filters.includes(rest.type)){
                        state.filtered_rests.push(rest)
                    }
                })
            }})
            if (!state.filters.length) state.filtered_rests=[]
            state.filtered_rests = state.filtered_rests.filter((rest, index, self)=>
            index === self.findIndex((e)=>e.id===rest.id))
        }
    },
    extraReducers: {
        [fetchRest.pending]: (state)=>{
            state.status = "loading"
            state.error = null
        },
        [fetchRest.fulfilled]: (state, action)=>{
            state.status = 'resolved'
            state.rests = action.payload
            let type_list = action.payload.map((element) => element.type)
            state.rest_types = Array.from(new Set(type_list))
            state.filters = []
        },
        [fetchRest.rejected]: (state, error)=>{
            console.log('fetch rejected; ',error)
            state.error = error
        },
    }
})
export const {setFilter} = restSlice.actions


export default restSlice.reducer
