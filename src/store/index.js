import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoading";
import productSlice from "./slices/poduct.slice";

export default configureStore({
	reducer: {
		product: productSlice,
		isLoading: isLoadingSlice
	}
});
