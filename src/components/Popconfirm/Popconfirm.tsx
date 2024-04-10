import React from "react";

interface PopconfirmProps {
    title: string;
    onConfirm: () => void;
    onCancel: () => void;
    }

const Popconfirm = ({ title, onConfirm, onCancel } : PopconfirmProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default Popconfirm;