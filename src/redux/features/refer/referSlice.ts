import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReferState {
  totalCredits: number; // in dollars
}

const initialState: ReferState = {
  totalCredits: 0,
};

const referSlice = createSlice({
  name: "refer",
  initialState,
  reducers: {
     addCredit: (state, action: PayloadAction<number>) => {
      console.log("action payload from redux--------->", action, state);
      state.totalCredits += action.payload;
    },
    redeemCredit: (state, action: PayloadAction<number>) => {
      state.totalCredits -= action.payload;
      if (state.totalCredits < 0) state.totalCredits = 0;
    },
    resetCredits: (state) => {
      state.totalCredits = 0;
    },
  },
});

export const { addCredit, redeemCredit, resetCredits } = referSlice.actions;
export const selectTotalCredit = (state: RootState) => state.refer.totalCredits;
export default referSlice.reducer;
