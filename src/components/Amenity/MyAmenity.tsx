import React from 'react';
import { ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { MdOutlineHouse , MdHeight , MdPool, MdOutlineLocalParking , MdPets, MdBalcony, MdWifi, MdVisibility, MdAcUnit, MdKitchen } from 'react-icons/md';

export const MyAmenity = () => {
    const amenities = [
        { icon: <MdOutlineHouse  className="h-6 w-6 text-black-500" />, name: 'Entire House' },
        { icon: <MdHeight  className="h-6 w-6 text-black-500" />, name: '10764 ft^2 size' }, // Used MdDimensions for dimensions
        { icon: <MdPool className="h-6 w-6 text-black-500" />, name: 'Swimming Pool' }, // Used MdPool for pool
        { icon: <MdOutlineLocalParking  className="h-6 w-6 text-black-500" />, name: 'Free on-site parking' },
        { icon: <MdPets className="h-6 w-6 text-black-500" />, name: 'Pets allowed' },
        { icon: <MdBalcony className="h-6 w-6 text-black-500" />, name: 'Balcony' },
        { icon: <MdWifi className="h-6 w-6 text-black-500" />, name: 'Free Wifi' },
        { icon: <MdVisibility className="h-6 w-6 text-black-500" />, name: 'View' },
        { icon: <MdAcUnit className="h-6 w-6 text-black-500" />, name: 'Air Conditioning' }, // Used MdAcUnit for air conditioning
        { icon: <MdKitchen className="h-6 w-6 text-black-500" />, name: 'Kitchen' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-md">
            {amenities.map((amenity, index) => (
                <ListItem
                    key={index}
                    className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-blue-50 transition duration-300 ease-in-out"
                >
                    <ListItemPrefix>
                        {amenity.icon}
                    </ListItemPrefix>
                    <Typography className="font-semibold text-gray-700">{amenity.name}</Typography>
                </ListItem>
            ))}
        </div>
    );
};
