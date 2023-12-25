import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { IoEyeSharp } from "react-icons/io5";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function ModelPopup({model}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="-z-20">
      <Button sx={{color:"#00DDB3"}} onClick={handleOpen} className="text-black">
        Full view
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="h-full w-full"
      >
        <Box sx={style}>
          <div className="h-[600px]">
             <img src={model} alt="" className="w-full h-full" />
             {/* <iframe src="https://lottie.host/embed/e1331d2a-ec5b-4b46-b67e-ba4b3169515c/56HCwNqjkw.json"></iframe> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
