import React from "react";

const FormProgress = ({step}:any) => {
    return (
        <div>
            <div style={{width: `${(step / 3) * 100}%`}}>
                Step {step} of 3
            </div>
        </div>
    )
}

export default FormProgress;