"use client"

import { createLink } from "@/app/actions/create-link"
import { verifyLink } from "@/app/actions/verify-link"
import { sanitizeLink } from "@/app/lib/utils"
import Button from "@/app/ui/button"
import TextInput from "@/app/ui/text-input"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export default function CreateLinkForm () {
  const router = useRouter()

  const [link, setLink] = useState('')
  const [error, setError] = useState('')

  function handleLinkOnChange(event: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(event.target.value))
    setError('')
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!link) {
      setError('O link não pode ser vazio')
      return
    }

    const isLinkTaken = await verifyLink(link)

    if (isLinkTaken) {
      setError('Desculpe, Este link já está em uso')
      return
    }

    const isLinkCreated = await createLink(link)

    if (!isLinkCreated) return setError('algo deu errado, Tente novamente')

    router.push(`/${link}`)
  }

  return (
    <>
     <form 
          onSubmit={handleSubmit}
          className="w-full flex items-center gap-2"
        >
          <span className="text-white">ProjectIn.Bio/</span>
          <TextInput 
            value={link} 
            onChange={handleLinkOnChange} 
          />
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
          <span className="text-accent-pink">{error}</span>
        </div>
    </>
  )
}