import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TContractorData = {
  email: string;
  location: string;
  zip: string;
  companyName: string;
  servicesYouProvide: string[];
  subServices: string[];
  noOfEmployee: string;
};

const initialState: TContractorData = {
  email: '',
  location: '',
  zip: '',
  companyName: '',
  servicesYouProvide: [],
  subServices: [],
  noOfEmployee: '',
};

const contractorSlice = createSlice({
  name: 'contractor',
  initialState,
  reducers: {
    updateContractorData: (
      state,
      action: PayloadAction<Partial<TContractorData>>
    ) => {
      return { ...state, ...action.payload };
    },
    resetContractorData: () => initialState,
  },
});

export const { updateContractorData, resetContractorData } =
  contractorSlice.actions;

export const selectCurrentContractor = (state: RootState): TContractorData =>
  state.contractor;

export default contractorSlice.reducer;
