"use client"

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

interface IFormInput {
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
  mensagem: string;
}

export function Form() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formattedData: Record<string, unknown> = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      telefone: data.telefone,
      email: data.email,
      mensagem: data.mensagem,
    };

    emailjs
      .send(
        "service_m3k7tdk",
        "template_djmg1fw",
        formattedData,
        "lix2tQduRAeE5z2dU"
      )
      .then(
        () => {
          toast({
            title: "Mensagem enviada!",
            description: "Sua mensagem foi enviada com sucesso.",
            action: <ToastAction altText="Fechar">Fechar</ToastAction>
          });
          reset();
        },
      );
  };

  function displayErrors() {
    if (errors) {
      toast({
        title: "Erro ao enviar",
        description: "Houve um erro ao enviar sua mensagem. Tente novamente.",
        action: <ToastAction altText="Fechar">Fechar</ToastAction>,
        variant: "destructive",
      });
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit, displayErrors)}>
      <div className="grid grid-cols-2 gap-3">
        <Input
          type="text"
          placeholder="Nome"
          {...register("nome", { required: "Nome é obrigatório" })}
        />

        <Input
          type="text"
          placeholder="Sobrenome"
          {...register("sobrenome", { required: "Sobrenome é obrigatório" })}
        />
      </div>

      <Input
        type="text"
        placeholder="Telefone"
        {...register("telefone", { required: "Telefone é obrigatório" })}
      />

      <Input
        type="email"
        placeholder="E-mail"
        {...register("email", {
          required: "E-mail é obrigatório",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "E-mail inválido",
          },
        })}
      />

      <Textarea
        placeholder="Mensagem"
        {...register("mensagem", { required: "Mensagem é obrigatória" })}
      />

      <Button
        type="submit"
        className="bg-[#ff6600] hover:bg-[#000056] uppercase font-semibold text-lg"
      >
        Enviar
      </Button>
    </form>
  );
}