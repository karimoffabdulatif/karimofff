import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SnackbarWithDecorators from "../../components/notification";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    if (username === "admin" && password === "123") {
      // navigate("/main")
      setOpen(true);
      setType("success");
      setTimeout(() => {
        navigate("/main");
      }, 1500);
    } else {
      setOpen(true);
      setType("danger");
    }
  };
  const navRegis =() => {
    navigate("/sign-up")
  }

  return (
    <div className="login">
      <SnackbarWithDecorators open={open} setOpen={setOpen} type={type} />
      <div className="login2">
        <div>
          <div className="card">
            <div className="card-header">
              
              <h1 className="text-center text-primary">Login</h1>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Username"
                  id="username"
                  className="my-3"
                  onChange={handleChange}
                  name="username"
                  type="text"
            
                />
                <TextField
                  fullWidth
                  label="Password"
                  id="password"
                  className="my-3"
                  onChange={handleChange}
                  name="password"
                  type="password"
                />
                <p onClick={navRegis} className="registr_text">Registration</p>
              </form>
            </div>
            <div className="card-footer">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                form="submit"
                className="btn btn-success"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
