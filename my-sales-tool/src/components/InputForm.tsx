import React from 'react';
import { useForm } from 'react-hook-form';
import InputFormSchema from "../InputFormSchema.tsx";

interface InputFormProps {
    onSubmit: (SubmitHandler: InputFormSchema) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm<InputFormSchema>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="customerEmail">Customer Email</label>
            <input id="customerEmail" name="customerEmail" type="email" ref={register} />

            <label htmlFor="customerVIN">Customer VIN</label>
            <input id="customerVIN" name="customerVIN" type="number" ref={register} />

            <label htmlFor="dateofSale">Date of Sale</label>
            <input id="dateofSale" name="dateofSale" type="date" ref={register} />

            <label htmlFor="specialToken">Special Token</label>
            <input id="specialToken" name="specialToken" type="text" ref={register} />

            <input type="submit" />
        </form>
    );
};

export default InputForm;