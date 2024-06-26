// // 'use client'

// // import React from 'react';
// // import * as PopoverPrimitive from '@radix-ui/react-popover';

// // import { cn } from '../../lib/utils';
// // import './Popconfirm.css';

// // export interface PopoverConfirmContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
// //   confirmText?: string;
// //   cancelText?: string;
// //   onConfirm?: () => void;
// //   onCancel?: () => void;
// //   title: string;
// //   description?: string;
// // }

// // const PopoverConfirm = PopoverPrimitive.Root

// // const PopoverConfirmTrigger = PopoverPrimitive.Trigger

// // const PopoverConfirmContent = React.forwardRef<
// //   React.ElementRef<typeof PopoverPrimitive.Content>,
// //   PopoverConfirmContentProps
// // >(({ className, align = 'center', sideOffset = 4, children, ...props }, ref) => (
// //   <PopoverPrimitive.Portal>
// //     <PopoverPrimitive.Content
// //       ref={ref}
// //       align={align}
// //       sideOffset={sideOffset}
// //       className={cn(
// //         'rounded border border-slate-100 bg-white p-5 w-64 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800',
// //         className
// //       )}
// //       {...props}
// //     >
// //        <div>
// //         <h2 className={cn('mt-2 mb-2 text-black font-bold')}>{props.title}</h2>
// //         <p className={cn(' text-black')}>{props.description}</p>
// //       </div>
// //       <div className={cn('flex justify-end mt-1 space-x-2')}>
// //         <button onClick={props.onCancel} className={cn('text-black bg-transparent mr-4')}>{props.cancelText}</button>
// //         <button onClick={props.onConfirm } className={cn('bg-purple-500 text-white p-2')}>{props.confirmText}</button>
// //       </div>
// //       <PopoverPrimitive.Arrow offset={10} style={{ fill: 'white' }} />
// //     </PopoverPrimitive.Content>
// //   </PopoverPrimitive.Portal>
// // ))
// // PopoverConfirmContent.displayName = PopoverPrimitive.Content.displayName

// // export { PopoverConfirm, PopoverConfirmTrigger, PopoverConfirmContent }
'use client'
import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../lib/utils";
import "../Style.css";

 interface PopconfirmProps {
  title: React.ReactNode;
  description: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  onOpenChange?: (open: boolean) => void;

  children: React.ReactNode;
}

const Popconfirm: React.FC<PopconfirmProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
  onOpenChange,
  children,
}) => {
  const confirm = () => {
    onConfirm?.();
    onOpenChange?.(false);
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger>{children}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content>
        <div
          className={cn(
            "rounded border border-slate-100 bg-white p-5 w-64 shadow-md outline-none"
          )}
        >
          <h2 className={cn("mt-2 mb-2 text-black font-bold")}>{title}</h2>
          <p className={cn(" text-black")}>{description}</p>
          <div className={cn("flex justify-end mt-1 space-x-2")}>
            <button
              onClick={handleCancel}
              className={cn("text-black bg-transparent mr-4")}
            >
              Cancel
            </button>
            <button
              onClick={confirm}
              className={cn("bg-purple-500 text-white p-2")}
            >
              Confirm
            </button>
          </div>
        </div>
        <PopoverPrimitive.Arrow offset={10} style={{ fill: "white" }} />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};

export { Popconfirm, PopconfirmProps };

// import React, { useState } from "react";
// import * as PopoverPrimitive from '@radix-ui/react-popover';
// import { cn } from '../../lib/utils';
// import './Popconfirm.css';

// export interface PopconfirmProps {
//   title: React.ReactNode;
//   description: React.ReactNode;
//   onConfirm?: () => void;
//   onCancel?: () => void;
//   onOpenChange?: (open: boolean) => void;
//   okText?: string;
//   cancelText?: string;
//   children: React.ReactNode;
// }

// const Popconfirm: React.FC<PopconfirmProps> = ({
//   title,
//   description,
//   onConfirm,
//   onCancel,
//   okText = 'Yes',
//   cancelText = 'No',
//   children,
// }) => {
//   const [open, setOpen] = useState(false);

//   const confirm = () => {
//     onConfirm?.();
//     setOpen(false);
//   };

//   const handleCancel = () => {
//     onCancel?.();
//     setOpen(false);
//   };

//   return (
//       <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
//          <PopoverPrimitive.Trigger>
//       {children} {/* Render the children directly */}
//     </PopoverPrimitive.Trigger>
//         <PopoverPrimitive.Content>
//           <div className={cn('rounded border border-slate-100 bg-white p-5 w-64 shadow-md outline-none')}>
//             <h2 className={cn('mt-2 mb-2 text-black font-bold')}>{title}</h2>
//             <p className={cn(' text-black')}>{description}</p>
//             <div className={cn('flex justify-end mt-1 space-x-2')}>
//               <button onClick={handleCancel} className={cn('text-black bg-transparent mr-4')}>{cancelText}</button>
//               <button onClick={confirm} className={cn('bg-purple-500 text-white p-2')}>{okText}</button>
//             </div>
//           </div>
//         </PopoverPrimitive.Content>
//       </PopoverPrimitive.Root>

//   );
// };

// export default Popconfirm;
