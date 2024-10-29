
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
reducer: {
// Add reducers here
},
middleware: (getDefaultMiddleware) => getDefaultMiddleware({
serializableCheck: false,
}),
});
