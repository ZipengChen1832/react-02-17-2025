import { useState } from "react";
import Input from "./Input";

function validatePassword(password: string) {
  const re = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
  );
  const result = re.test(password);
  return result;
}

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (validatePassword(password)) {
      // call api to create user
      console.log("User created");
    } else {
      // display error message
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="email"
        required
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="password"
        required
      />
      <Input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        label="confirm password"
        required
      />
      <div>
        <label>
          <input
            type="checkbox"
            required
            checked={termsChecked}
            onChange={() => setTermsChecked((prev) => !prev)}
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
