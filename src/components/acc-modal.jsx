import { useState } from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button";
import { auth } from "@service";
const CodeModal = ({open, toggle}) => {
    const [code, setCode] = useState("")
    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            code : code,
            email : localStorage.getItem("email")
        }
        try{
            const response = await auth.verify_code(payload)
            console.log(response);
        }catch(error){
            console.log(error);
        }
       
    };
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="text-center">Enter Code</h1>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id="submit">
                <TextField
                  fullWidth
                  label="Code"  
                  className="my-3"
                  onChange={(e)=>setCode(e.target.value)}
                  type="text"
            
                />
                </form>
            </ModalBody>
            <ModalFooter>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                form="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Code
              </Button>
            </ModalFooter>
        </Modal>
    )
}

export default CodeModal