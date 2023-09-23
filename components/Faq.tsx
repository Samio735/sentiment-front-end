"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "./ui/Button";

export default function Faq() {
  return (
    <div className="w-full flex items-center justify-center flex-col lg:py-20 relative">
      <div className="rounded-full absolute top-20 -left-40 w-80 h-80 bg-[#42057F] blur-3xl -z-10"></div>
      <div className="rounded-full absolute bottom-20 -right-40 w-80 h-80 bg-[#42057F] blur-3xl -z-10"></div>
      <h1 className="text-secondary italic lg:text-4xl font-bold py-10 mb-4 text-2xl">
        FAQs
      </h1>
      <div className="lg:w-1/2 mb-10 lg:px-0 slider-background  py-5 px-4 rounded-[26px] border border-solid border-white">
        <Accordion type="single" className="w-full space-y-6 px-7" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger value={"btn-1"}>
              <div className="flex items-start gap-[0.875rem] md:gap-[1.4375rem]">
                <span className="text-2xl italic font-semibold text-primary ">
                  Q:
                </span>
                How accurate is your sentiment analysis?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Before buying, 90% of online shoppers compare deals. Pricing
              matters most for 60% of buyers. Almost 50% only buy discounted
              items. If you&apos;re still wondering whether pricing impacts
              sales or profits, you&apos;re actually missing out on potential
              earnings .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex gap-[1.4375rem]">
                <p className="text-2xl italic font-semibold text-primary ">
                  Q:
                </p>
                Is my data secure?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Our trusted data comes from a wide range of Algerian e-commerce
              websites, so don&apos;t worry we&apos;ll find any product
              you&apos;re looking for from the Algerian market.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex gap-[1.4375rem]">
                <p className="text-2xl italic font-semibold text-primary ">
                  Q:
                </p>
                How accurate is your sentiment analysis?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Our trusted data comes from a wide range of Algerian e-commerce
              websites, so don&apos;t worry we&apos;ll find any product
              you&apos;re looking for from the Algerian market.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger value={"btn-2"} id="1">
              <div className="flex gap-[1.4375rem]">
                <p className="text-2xl italic font-semibold text-primary ">
                  Q:
                </p>
                How accurate is your sentiment analysis?
              </div>
            </AccordionTrigger>

            <AccordionContent>
              Absolutely! You can easily cancel your subscription anytime with
              just a few clicks. However, rest assured that our unique features
              will keep you from even considering unsubscribing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
