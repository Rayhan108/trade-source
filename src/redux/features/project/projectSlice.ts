import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  address: string;
  apt: string;
}

interface ServiceState {
  serviceId: string | null;
  serviceType: string;

  projectDescription: string;
  contractorId: string | null;
  contractorName: string;
  contractorImage: string;
  hourlyRate: string;
}

interface TimeState {
  preferredDate: string;
  preferredTime: string;
  projectDescription: string;
}

interface ContractorState {
  contractorId: string | null;
}

export interface ProjectState {
  location: LocationState;
  service: ServiceState;
  time: TimeState;
  contractor: ContractorState;
}

const initialState: ProjectState = {
  location: {
    address: '',
    apt: '',
  },
  service: {
    serviceId: null,
    serviceType: '',
    projectDescription: '',
    contractorId: null,
    contractorName: '',
    contractorImage: '',
    hourlyRate: '',
  },
  time: {
    preferredDate: '',
    preferredTime: '',
    projectDescription: '',
  },
  contractor: {
    contractorId: null,
  },
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      state.location = action.payload;
    },
    setService: (state, action: PayloadAction<Partial<ServiceState>>) => {
      state.service = { ...state.service, ...action.payload };
    },
    setTime: (state, action: PayloadAction<Partial<TimeState>>) => {
      state.time = { ...state.time, ...action.payload };
    },
    setContractor: (state, action: PayloadAction<Partial<ContractorState>>) => {
      state.contractor = { ...state.contractor, ...action.payload };
    },
    resetProject: () => initialState,
  },
});

export const { setLocation, setService, setTime, resetProject } =
  projectSlice.actions;

export const selectLocation = (state: RootState) => state.project.location;
export const selectService = (state: RootState) => state.project.service;
export const selectTime = (state: RootState) => state.project.time;
export const selectContractor = (state: RootState) => state.project.contractor;

export default projectSlice.reducer;
