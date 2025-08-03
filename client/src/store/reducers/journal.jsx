import { createSlice } from '@reduxjs/toolkit';
import { createJournal, getDashboardData, getAllJournals } from '../actions/journal';
const initialState = {
    currentJournal: null,
    isloading: false,
    dashboardData: null,
    journals: []

};

const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createJournal.pending, (state) => {
                state.isloading = true;
            })
            .addCase(createJournal.fulfilled, (state, action) => {
                state.currentJournal = action.payload.data;
                state.isloading = false;
            })
            .addCase(createJournal.rejected, (state) => {
                state.isloading = false;
            })

            .addCase(getDashboardData.pending, (state, action)=>{
                state.isloading = true;
            })

            .addCase(getDashboardData.fulfilled, (state, action)=>{
                state.isloading = false;
                state.dashboardData = action.payload.data
            })

            .addCase(getDashboardData.rejected, (state, action)=>{
                state.isloading = false;
            })

            .addCase(getAllJournals.pending, (state, action)=>{
                state.isloading = true;
            })

            .addCase(getAllJournals.fulfilled, (state, action)=>{
                state.isloading = false;
                state.journals = action.payload.data;

            })

            .addCase(getAllJournals.rejected, (state, action)=>{
                state.isloading = false;
            })
    }
});

export default journalSlice.reducer;