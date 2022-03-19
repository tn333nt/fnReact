export const addStaff = (data) => {
  return {
    type: "ADD_STAFF",
    payload: data,
  };
};

export const searchStaff = (text) => {
  debugger;
  return {
    type: "SEARCH_STAFF",
    payload: text,
  };
};
