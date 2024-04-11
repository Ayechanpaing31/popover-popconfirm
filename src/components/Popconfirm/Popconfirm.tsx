"use client";

import React, { forwardRef } from 'react';
import * as Popover from '@radix-ui/react-popover';

interface PopconfirmProps {
    title: string;
    name: string;
}

const Popconfirm = forwardRef<HTMLDivElement, PopconfirmProps>(({ title, name, ...props }, ref) => {
    return (
        <Popover.Root {...props}>
            <Popover.Trigger>{title}</Popover.Trigger>
            <Popover.Portal>
                <Popover.Content ref={ref}>
                    {name}
                    <Popover.Arrow />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
});

export default Popconfirm;