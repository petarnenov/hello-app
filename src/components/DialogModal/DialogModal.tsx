import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  cssClass: string;
};

const DialogModal = ({ children, isOpen, cssClass }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    isOpen ? dialogRef.current.showModal() : dialogRef.current.close?.();
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className={cssClass}>
      {children}
    </dialog>
  );
};

export default DialogModal;
