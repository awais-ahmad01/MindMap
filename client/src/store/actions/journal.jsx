import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const createJournal = createAsyncThunk(
    "journal/createJournal",
    async ({data, userId}) => {
        try {
            console.log("form:", data);

             const body = {
                content: data?.journalEntry,
                userId
            }

            console.log("body:", body);

            const response = await axios.post("http://localhost:3000/createJournal", body);

            console.log("response:", response);

            return {data: response.data.journal};
        } catch (error) {
            console.error("Error creating journal:", error);
            throw error;
        }
    }
);


export const getDashboardData = createAsyncThunk(
    "journal/getDahboardData",
    async(userId) => {

        try{
            console.log("userID:", userId);

        const response = await axios.get(`http://localhost:3000/getDashboardData/${userId}`);

        console.log('response:', response);

        return {data: response.data}
        }
        catch(error){
            console.log('error: ', error.response.data.message)
            throw new error;
        }
    }
)



export const getAllJournals = createAsyncThunk(
    "journal/getAllJournals",
    async(userId) => {

        try{
            console.log("userID:", userId);

        const response = await axios.get(`http://localhost:3000/getAllJournals/${userId}`);

        console.log('response:', response);

        return {data: response.data.journals}
        }
        catch(error){
            console.log('error: ', error.response.data.message)
            throw new error;
        }
    }
)




