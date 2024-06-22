import { TextField } from "@mui/material"
import Button from "@mui/material/Button";
import { useState } from "react";
import { auth } from "@service";
import CodeModal from "../../components/acc-modal";

const Index = () => {
    const [form, setForm] = useState({});
    const [modal, setModal] = useState(false)
    const handleChange = (event) => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
      };
      const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await auth.sign_up (form)
            if(response.status === 200){
                setModal(true)
                localStorage.setItem("email", form.email)
            }
        }catch(error){
            console.log(error);
        }
      }
      
  return (
       <>
        {modal && <CodeModal open={modal} toggle={()=>setModal(false)} />}
      <div className="login">
      {/* <SnackbarWithDecorators open={open} setOpen={setOpen} type={type} /> */}
      <div className="login2">
        <div>
          <div className="card">
            <div className="card-header">
              
              <h1 className="text-center text-primary">Sign Up</h1>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  id="email"
                  className="my-3"
                  onChange={handleChange}
                  name="email"
                  type="text"
            
                />
                <TextField
                  fullWidth
                  label="Full name"
                  id="full_name"
                  className="my-3"
                  onChange={handleChange}
                  name="full_name"
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
                <TextField
                  fullWidth
                  label="Phone number"
                  id="phone_number"
                  className="my-3"
                  onChange={handleChange}
                  name="phone_number"
                  type="text"
                />
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
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
       </>
  )
}

export default Index