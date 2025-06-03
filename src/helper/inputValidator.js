export function inputValidator(formData) {
  let isValid = true;
  let newError = { userName: "", email: "", password: "" };
  if (!formData.userName) {
    newError.userName = "Please enter your name";
    isValid = false;
  }
  if (!formData.email) {
    newError.email = "Please enter your email";
    isValid = false;
  } else {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newError.email = "Please valid email";
      isValid = false;
    }
  }
  if (!formData.password) {
    newError.password = "Please enter your password";
    isValid = false;
  } else {
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$&!%*?._-])[A-Za-z\d@$&!%*?._-]{4,}$/;
    if (!passwordRegex.test(formData.password)) {
newError.password = "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
      isValid = false;
    }
  }
  return { isValid, newError };
}
