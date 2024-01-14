import React, { useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import style from '../styles/nav.module.css';

export default function NavPersonalizada({ name, copylink }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const copyInputRef = useRef(null);

  const handleCopy = () => {
    if (copyInputRef.current) {
      copyInputRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <Navbar className={style.nav}>
      <NavbarBrand>
        <p className="font-bold text-inherit">{name}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button onClick={onOpen} className={style.colorBlue} variant="flat">
            Share
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} isDismissable={false}>
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1">Compartilhar</ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  value={copylink}
                  ref={copyInputRef}
                  readOnly
                  style={{ position: "absolute", left: "-9999px" }}
                />
                <p>
                  {copylink}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Fechar</Button>
                <Button color="primary" onClick={handleCopy}> Copiar </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
