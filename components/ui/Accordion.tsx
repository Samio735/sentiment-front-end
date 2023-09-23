"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Button } from "./Button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => <AccordionPrimitive.Item ref={ref} {...props} />);

AccordionItem.displayName = AccordionPrimitive.Item.displayName;

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between bg-Mainw rounded-3xl text-base md:text-2xl font-semibold italic text-secondary px-6 py-4 text-left data-[state=open]:rounded-t-3xl data-[state=open]:rounded-b-none [&[data-state=open]>button>svg]:rotate-180 ",
        className
      )}
      {...props}
    >
      {children}
      <Button
        size={"sm"}
        aria-label="open response to question"
        className="lg:px-5 lg:h-8 h-6 py-0.5 ml-1"
      >
        <ChevronDownIcon className="lg:h-7 lg:w-7 font-semibold " />
        <span className="sr-only">open response to question</span>
      </Button>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden bg-Mainw  rounded-b-3xl pb-4 space-y-7 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ",
      className
    )}
    {...props}
  >
    <div className="flex justify-center max-w-full  ">
      <div className="border-[0.1875rem] flex justify-center border-solid border-primary w-[60%]" />
    </div>
    <div className="max-w-[80%] mx-auto text-base md:text-2xl font-normal text-secondary  ">
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
