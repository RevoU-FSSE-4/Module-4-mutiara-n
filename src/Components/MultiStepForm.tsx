import React, { useState } from "react";
import PersonalInfoForm from "./Form/PersonalInfoFrom";
import AddressInfoForm from "./Form/AddressInfoForm";
import AccountInfoForm from "./Form/AccountInfoForm";
import FormProgress from "./Form/FormProgress";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const onNext = (values:any) => {
        setFormData({...formData, ...values});
        setStep(step + 1);
    };

    const onPrevious = () => {
        setStep(step - 1);
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Multistep Registration Form</h1>
            <FormProgress step = {step}/>
            {step === 1 && <PersonalInfoForm onNext={onNext} />}
            {step === 2 && <AddressInfoForm onNext={onNext} onPrevious={onPrevious} />}
            {step === 3 && <AccountInfoForm formData={formData} onPrevious={onPrevious} />}        
        </div>
    )
}

export default MultiStepForm;