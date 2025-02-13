export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\u00C0-\u00FF' -]+$/;
  return nameRegex.test(name);
};
