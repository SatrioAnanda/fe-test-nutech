import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";
import balanceReducer from "./slices/balanceSlice";
import bannerReducer from "./slices/bannerSlice";
import servicesReducer from "./slices/servicesSlice";
import transactionReducer from "./slices/transactionSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    balance: balanceReducer,
    banners: bannerReducer,
    services: servicesReducer,
    transaction: transactionReducer,
  },
});

export default store;
