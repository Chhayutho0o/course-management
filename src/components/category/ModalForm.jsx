import { X } from "lucide-react";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { TextInput } from "../Input";

export const ModalForm = ({ setIsShowModal, handleAdd, value }) => {
  const [form, setForm] = useState({ name: "", code: "" });
  const [errors, setErrors] = useState({ name: "", code: "" });

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const onClick = () => {
    handleAdd(form);
    setForm({ name: "", code: "" });
  };

  const onClear = () => {
    setForm({ name: "", code: "" });
  };

  useEffect(() => {
    setErrors(value);
  }, [value]);

  return (
    <div className=" bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
      <div className="relative p-4  w-1/4  h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <Button
            onClick={() => setIsShowModal(false)}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            variant="icon"
          >
            <X />
          </Button>

          <div className="flex flex-col p-5">
            <div className="p-5 w-full ">
              <div className="mb-2 text-3xl text-center font-semibold border-b-2 ">
                Category Form
              </div>
            </div>
            <div className="gap-x-3 items-center justify-center grid-cols-2 grid">
              <TextInput
                label="Name"
                name="name"
                value={form.name}
                onChange={handleFormChange}
              />
              <TextInput
                label="Code"
                name="code"
                value={form.code}
                onChange={handleFormChange}
              />
              <div>
                <Button className="mr-2" onClick={onClick}>
                  Save
                </Button>
                <Button onClick={onClear}>Clear</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};