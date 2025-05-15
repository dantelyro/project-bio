"use client"

import Modal from "@/app/components/ui/modal";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function NewProject({ profileId }: {profileId: string}) {
  const [isOpen, setIsOpen] = useState(false)

  const handlerOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <>
    <button 
      onClick={handlerOpenModal} 
      className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center justify-center gap-2 hover:border border-dashed border-border-secondary"
    >
      <Plus className="size-10 text-accent-green" />
      <span className="">Novo Pojeto</span>
    </button>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="border p-10">HELLOOO World</div>
    </Modal>
    </>
  )
}