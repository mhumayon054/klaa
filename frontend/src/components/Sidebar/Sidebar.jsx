import { useState } from 'react';
import face from "../../assets/face.svg"
import menu from "../../assets/menu.svg"
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary">
        Launch
      </Button> */}
<img src={menu} alt="menu" style={{width:"20px"}} onClick={handleShow}/>
      <Offcanvas style={{width:"75%"}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Under Construction <img src={face} style={{width:"20px"}} alt="face" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;