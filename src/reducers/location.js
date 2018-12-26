export default function locationReducer(state = "Minneapolis, MN", action) {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
