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

