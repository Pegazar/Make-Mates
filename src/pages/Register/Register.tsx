import "./Register.scss";
import { register } from "../../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await register(email, password);
    setUsername("");
    setEmail("");
    setPassword("");
    console.log(user);
    toast.success("Successfully");
  };

  return (
    <div className="register">
      <div className="card">
        <Link className="img-link" to="/">
          <svg
            className="svg-link"
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.70499 6.00009L10.85 1.85509C10.9319 1.75944 10.9747 1.6364 10.9698 1.51057C10.965 1.38473 10.9128 1.26536 10.8238 1.17631C10.7347 1.08726 10.6154 1.0351 10.4895 1.03024C10.3637 1.02538 10.2406 1.06818 10.145 1.15009L5.99999 5.29509L1.85499 1.14509C1.76083 1.05094 1.63314 0.998047 1.49999 0.998047C1.36684 0.998047 1.23914 1.05094 1.14499 1.14509C1.05083 1.23924 0.997941 1.36694 0.997941 1.50009C0.997941 1.63324 1.05083 1.76094 1.14499 1.85509L5.29499 6.00009L1.14499 10.1451C1.09265 10.1899 1.05014 10.2451 1.02012 10.3071C0.990112 10.3691 0.973247 10.4367 0.970587 10.5056C0.967928 10.5744 0.97953 10.6431 1.00467 10.7073C1.0298 10.7714 1.06793 10.8297 1.11666 10.8784C1.16539 10.9271 1.22366 10.9653 1.28783 10.9904C1.35199 11.0156 1.42065 11.0272 1.48951 11.0245C1.55837 11.0218 1.62594 11.005 1.68797 10.975C1.75 10.9449 1.80516 10.9024 1.84999 10.8501L5.99999 6.70509L10.145 10.8501C10.2406 10.932 10.3637 10.9748 10.4895 10.97C10.6154 10.9651 10.7347 10.9129 10.8238 10.8239C10.9128 10.7348 10.965 10.6155 10.9698 10.4896C10.9747 10.3638 10.9319 10.2407 10.85 10.1451L6.70499 6.00009Z"
              fill="#98A2B3"
            />
          </svg>
        </Link>
        <h1>Qeydiyyat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ad və soyad"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email yaxud telefon nömrəsi"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifrəni təyin et"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={!username || !email || !password} type="submit">
            Davam et
          </button>
          <span>
            Hesabın yoxdur? - <Link to="/login">Daxil ol</Link>
          </span>
          <Toaster position="top-right" />
        </form>
      </div>
    </div>
  );
};

export default Register;
