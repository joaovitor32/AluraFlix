import React from 'react';

const FormField = ({type,label,name,value,onChange}) => {
    return (
        <div>
            <label>
                {label}
                <input type={type}
                    name={name}
                    value={value.nome}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;