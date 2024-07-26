import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

export const MyFaq = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="flex flex-col lg:flex-row gap-8 px-4 py-8">
            {/* FAQ Section on the Left */}
            <div className="lg:w-1/3 w-full">
                <h2 className="text-2xl font-bold mb-4">FAQs about the Villa</h2>
                <p className="mb-2">
                    Our villa offers a luxurious experience with stunning views and modern
                    amenities.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Free Wi-Fi in all areas</li>
                    <li>Private beach access</li>
                    <li>Complimentary airport shuttle service</li>
                    <li>Family-friendly activities available</li>
                    <li>24-hour concierge service</li>
                </ul>
            </div>

            {/* Accordion Section on the Right */}
            <div className="lg:w-2/3 w-full">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Do they serve breakfast?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, we serve a complimentary breakfast for all guests.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        Are there rooms with a hot tub?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, select rooms are equipped with a private hot tub for your
                        relaxation.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        Is the swimming pool open?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, the swimming pool is open from 8 AM to 10 PM daily.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        Is there a spa?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, we have a full-service spa available for all guests.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                        Can I park there?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, we provide complimentary parking for all our guests.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(6)}>
                        Is there a restaurant?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, our on-site restaurant offers a wide range of local and
                        international cuisines.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(7)}>
                        What restaurants, attractions, and public transport options are
                        nearby?
                    </AccordionHeader>
                    <AccordionBody>
                        Our hotel is conveniently located near several top-rated
                        restaurants, popular attractions like the city museum, and public
                        transport options including the subway and bus lines.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(8)}>
                        Are there rooms with a sea view?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, we offer rooms with stunning sea views. Please specify your
                        preference during booking.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(9)}>
                        Can I bring my pet?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, we are a pet-friendly hotel. Please notify us in advance if you
                        plan to bring a pet.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(10)}>
                        What are the check-in and check-out times?
                    </AccordionHeader>
                    <AccordionBody>
                        Our check-in time is 3 PM, and check-out time is 11 AM.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    );
};
