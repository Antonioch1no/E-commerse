import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading";
import axios from "axios";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productSlice = createSlice({
	name: "product",
	initialState: [],
	reducers: {
		setProduct: (state, action) => {
			return action.payload;
		}
	}
});
export const getProductThunk = () => (dispatch) => {
	dispatch(setIsLoading(true));
	axios
		.get("https://e-commerce-api.academlo.tech/api/v1/products")
		.then((res) => dispatch(setProduct(res.data.data.products)))
		.finally(() => dispatch(setIsLoading(false)));
};
export const filterCategoryTunk = (id) => (dispatch) => {
	dispatch(setIsLoading(true));
	axios
		.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
		.then((res) => dispatch(setProduct(res.data.data.products)))
		.finally(() => dispatch(setIsLoading(false)));
};
export const filterInputThunk = (inputSearch) => (dispatch) => {
	dispatch(setIsLoading(true));
	axios
		.get(
			`https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`
		)
		.then((res) => dispatch(setProduct(res.data.data.products)))
		.finally(() => dispatch(setIsLoading(false)));
};

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
