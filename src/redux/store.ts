import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';

export const store = configureStore({
	reducer: {
		players: playerReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
