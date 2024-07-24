import React from 'react';
import { ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { IoHome } from 'react-icons/io5';
import { BsCarFront, BsWifi } from 'react-icons/bs';

export const MyAmenity = () => {
    const amenities = [
        { icon: <IoHome className="h-6 w-6 text-black-500" />, name: 'Entire House' },
        { icon: <BsWifi className="h-6 w-6 text-black-500" />, name: 'Free Wi-Fi' },
        { icon: <BsCarFront className="h-6 w-6 text-black-500" />, name: 'Free Parking' },
        { icon: <IoHome className="h-6 w-6 text-black-500" />, name: 'Garden View' },
        { icon: <BsWifi className="h-6 w-6 text-black-500" />, name: 'Swimming Pool' },
        { icon: <BsCarFront className="h-6 w-6 text-black-500" />, name: 'Gym Access' },
        { icon: <IoHome className="h-6 w-6 text-black-500" />, name: 'BBQ Area' },
        { icon: <BsWifi className="h-6 w-6 text-black-500" />, name: 'Pet Friendly' },
        { icon: <BsCarFront className="h-6 w-6 text-black-500" />, name: 'Air Conditioning' },
        { icon: <IoHome className="h-6 w-6 text-black-500" />, name: 'Fireplace' },
        // Ensure there are exactly 10 items for 2 rows of 5 columns each
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-md">
            {amenities.map((amenity, index) => (
                <ListItem
                    key={index}
                    className="flex flex-col items-center space-y-2 bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-blue-50 transition duration-300 ease-in-out"
                >
                    <ListItemPrefix>
                        {amenity.icon}
                    </ListItemPrefix>
                    <Typography className="font-semibold text-gray-700 text-center">{amenity.name}</Typography>
                </ListItem>
            ))}
        </div>
    );
};

