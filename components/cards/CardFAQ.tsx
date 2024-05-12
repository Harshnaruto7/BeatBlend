"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function CardFAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="What makes BeatBlend unique?">
      BeatBlend stands out with its curated selection of top artists, offering users access to the best music across various genres. With its user-friendly interface and seamless user experience, BeatBlend ensures an enjoyable music streaming journey for every user.
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Can I download music on BeatBlend?">
      Yes, BeatBlend allows users to download their favorite tracks for offline listening. Whether you're commuting or traveling, you can enjoy your music without worrying about internet connectivity.
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="What sets BeatBlend apart in terms of music quality?">
      BeatBlend prides itself on providing an extensive library of amazing music, ensuring that users have access to high-quality audio content. From top hits to hidden gems, BeatBlend offers a diverse range of music to suit every taste.
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 3" title="Is BeatBlend optimized for mobile devices?">
      Absolutely! BeatBlend is designed to be fully responsive across all devices, including smartphones and tablets. Whether you're using iOS or Android, you can enjoy a seamless music streaming experience on the go.
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 3" title="Is BeatBlend accessible offline?">
      Yes, BeatBlend offers offline download functionality, allowing users to enjoy their downloaded music without an internet connection. Simply download your favorite tracks beforehand and listen offline, anytime, anywhere.
      </AccordionItem>
    </Accordion>
  );
}
