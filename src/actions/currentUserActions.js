export const addCurrentUser = (currentUser) => {
  return { type: 'ADD_CURRENT_USER', payload: currentUser };
};

export const removeCurrentUser = () => {
  return { type: 'REMOVE_USER' };
};
