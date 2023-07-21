import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store };
export { addSong, removeSong, addMovie, removeMovie, reset };

//console.log(songsSlice.actions.addSong());

//const startingState = store.getState();
//console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song"
//});

//store.dispatch(songsSlice.actions.addSong("Some new song"));

//const finalState = store.getState();
//console.log(JSON.stringify(finalState));
