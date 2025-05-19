"use client";

import { addCustomLinks } from "@/app/actions/add-custom-links";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import Button from "../../ui/button";
import Modal from "../../ui/modal";
import TextInput from "../../ui/text-input";

export function AddCustomLink() {
  const router = useRouter();
  const { profileId } = useParams<{ profileId: string }>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSavingCustomLinks, setIsSavingCustomLinks] = useState(false);

  const [link1, setLink1] = useState({
    title: "",
    url: "",
  });
  const [link2, setLink2] = useState({
    title: "",
    url: "",
  });
  const [link3, setLink3] = useState({
    title: "",
    url: "",
  });

  const handleSaveCustomLinks = async () => {
    setIsSavingCustomLinks(true);

    if (!profileId) return;

    await addCustomLinks({
      profileId,
      link1,
      link2,
      link3,
    });

    startTransition(() => {
      setIsModalOpen(false);
      setIsSavingCustomLinks(false);
      router.refresh();
    });
  };

  return (
    <>
      <button
        className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
        onClick={() => setIsModalOpen(true)}
      >
        <Plus />
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
          <p className="text-white font-bold text-xl">
            Adicionar Links Personalizados
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Titulo Do Link</p>
                <TextInput
                  placeholder="Digite o Titulo"
                  onChange={(e) =>
                    setLink1({ ...link1, title: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <p>Link</p>
                <TextInput
                  placeholder="Inserir Url"
                  onChange={(e) => setLink1({ ...link1, url: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Titulo Do Link</p>
                <TextInput
                  placeholder="Digite o Titulo"
                  onChange={(e) =>
                    setLink2({ ...link2, title: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <p>Link</p>
                <TextInput
                  placeholder="Inserir Url"
                  onChange={(e) => setLink2({ ...link2, url: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Titulo Do Link</p>
                <TextInput
                  placeholder="Digite o Titulo"
                  onChange={(e) =>
                    setLink3({ ...link3, title: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <p>Link</p>
                <TextInput
                  placeholder="Inserir Url"
                  onChange={(e) => setLink3({ ...link3, url: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              className="font-bold text-white"
              onClick={() => setIsModalOpen(false)}
            >
              Voltar
            </button>
            <Button
              onClick={handleSaveCustomLinks}
              disabled={isSavingCustomLinks}
            >
              Savlar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
