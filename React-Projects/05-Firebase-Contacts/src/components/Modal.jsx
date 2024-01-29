import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
import { Formik, Form, Field } from "formik";

const Modal = ({ closeModal }) => {
  return createPortal(
    <div className="absolute top-0">
      <div className="bg-white relative top-[120px] left-[35px] z-20 h-[260px] w-[380px] text-black">
        <AiOutlineClose
          onClick={closeModal}
          className="cursor-pointer text-2xl m-2 hover:bg-orange-100 "
        />
        <Formik>
          <Form>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border border-black" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              {/* <Field type="email" name="email" className="h-10 border-black" /> */}
              <Field
                type="email"
                name="email"
                className="h-10 border border-black"
              />
            </div>
          </Form>
        </Formik>
      </div>
      <div className="absolute top-0 z-0 m-auto h-screen w-[420px] backdrop-blur"></div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
