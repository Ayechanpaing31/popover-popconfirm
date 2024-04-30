// "use client";

// import React from "react";
// import * as PopoverPrimitive from "@radix-ui/react-popover";

// import { cn } from "../../lib/utils";
// import "../Style.css";

// const Popover = PopoverPrimitive.Root;

// const PopoverTrigger = PopoverPrimitive.Trigger;

// const PopoverContent = React.forwardRef<
//   React.ElementRef<typeof PopoverPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
// >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
//   <PopoverPrimitive.Portal>
//     <PopoverPrimitive.Content
//       ref={ref}
//       align={align}
//       sideOffset={sideOffset}
//       className={cn(
//         "rounded border border-slate-100 bg-white p-5 w-64 shadow-md outline-none",
//         className
//       )}
//       {...props}
//     >
//       <PopoverPrimitive.Arrow offset={10} style={{ fill: "white" }} />
//     </PopoverPrimitive.Content>
//   </PopoverPrimitive.Portal>
// ));
// PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// export { Popover, PopoverTrigger, PopoverContent };
"use client";
import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../lib/utils";
import "../Style.css";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      <PopoverPrimitive.Arrow offset={10} style={{ fill: "white" }} />
      {/* Render the content here */}
      {props.children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// Export components
export { Popover, PopoverTrigger, PopoverContent };

// rounded border border-slate-100 bg-white text-black p-5 w-64 shadow-md outline-none