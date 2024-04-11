// import React from "react";

// interface PopconfirmProps {
//     title: string;
//     onConfirm: () => void;
//     onCancel: () => void;
//     }

// const Popconfirm = ({ title, onConfirm, onCancel } : PopconfirmProps) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <button onClick={onConfirm}>Confirm</button>
//             <button onClick={onCancel}>Cancel</button>
//         </div>
//     );
// }

// export default Popconfirm;

"use client";

import React from 'react';
import * as Popover from '@radix-ui/react-popover';

interface PopconfirmProps {
    title: string;
    name: string
}

const Popconfirm = ({ title , name}: PopconfirmProps) => {
    return (
        <Popover.Root>
            <Popover.Trigger>{title}</Popover.Trigger>
            <Popover.Portal>
                <Popover.Content>
                    {name}
                    <Popover.Arrow />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}

export default Popconfirm;