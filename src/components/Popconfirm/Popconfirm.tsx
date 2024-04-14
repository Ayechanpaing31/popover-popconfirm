// 'use client'

// import * as React from 'react'
// import * as PopoverPrimitive from '@radix-ui/react-popover'

// import { cn } from '../../lib/utils'

// const Popover = PopoverPrimitive.Root

// const PopoverTrigger = PopoverPrimitive.Trigger

// const PopoverContent = React.forwardRef<
//   React.ElementRef<typeof PopoverPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
// >(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
//   <PopoverPrimitive.Portal>
//     <PopoverPrimitive.Content
//       ref={ref}
//       align={align}
//       sideOffset={sideOffset}
//       className={cn(
//         'z-50 w-72 rounded-md border border-slate-100 bg-white p-4 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800',
//         className
//       )}
//       {...props}
//     >
//      <PopoverPrimitive.Arrow offset={10} style={{ fill: 'white' }} />
    
//      <div>
//         <button>Yes</button>
//         <button>No</button>
//       </div>
//      </PopoverPrimitive.Content>
//   </PopoverPrimitive.Portal>
// ))
// PopoverContent.displayName = PopoverPrimitive.Content.displayName

// export { Popover, PopoverTrigger, PopoverContent }

'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '../../lib/utils'

interface PopoverConfirmContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  okText: string;
  cancelText: string;
  onOK: () => void;
  onCancel: () => void;
}

const PopoverConfirm = PopoverPrimitive.Root

const PopoverConfirmTrigger = PopoverPrimitive.Trigger


const PopoverConfirmContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverConfirmContentProps 
>(({ className, align = 'center', sideOffset = 4, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-md border border-slate-100 bg-white p-4 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800',
        className
      )}
      {...props}
    >
      {children}
      <div>
        <button onClick={props.onOK}>{props.okText}</button>
        <button onClick={props.onCancel}>{props.cancelText}</button>
      </div>
      <PopoverPrimitive.Arrow offset={10} style={{ fill: 'white' }} />
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
))
PopoverConfirmContent.displayName = PopoverPrimitive.Content.displayName

export { PopoverConfirm, PopoverConfirmTrigger, PopoverConfirmContent }