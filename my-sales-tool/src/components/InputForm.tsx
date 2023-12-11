import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../schema";

type FormData = z.infer<typeof schema>;

interface InputFormProps {
  onSubmit: (SubmitHandler: FormData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<FormData>({
    // resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="customerEmail">Customer Email</label>
      <input
        {...register("customerEmail")}
        id="customerEmail"
        name="customerEmail"
        type="email"
      />

      <label htmlFor="customerVIN">Customer VIN</label>
      <input
        {...register("customerVIN")}
        id="customerVIN"
        name="customerVIN"
        type="number"
      />

      <label htmlFor="dateofSale">Date of Sale</label>
      <input id="dateofSale" name="dateofSale" type="date" ref={register} />

      <label htmlFor="specialToken">Special Token</label>
      <input id="specialToken" name="specialToken" type="text" ref={register} />

      <input type="submit" />
    </form>
  );
};

export default InputForm;
