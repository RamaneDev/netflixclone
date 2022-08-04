import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const moviesAdapter = createEntityAdapter()

const initialState = moviesAdapter.getInitialState({})


const movies = createSlice({
    name:'movies',
    initialState,
    reducers:{

    }
})

export default movies.reducer