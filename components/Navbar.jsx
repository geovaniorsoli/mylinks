import React from "react";
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

import style from '../styles/home.module.css';

export default function NavPersonalizada({ name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Navbar>
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
              <ModalHeader className="flex flex-col gap-1">copiar link</ModalHeader>
              <ModalBody>
                <p>
                  OIOIOOIOI
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
