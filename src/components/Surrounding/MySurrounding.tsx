import { FaMapMarkerAlt, FaUtensils, FaTrain, FaLeaf, FaPlane } from 'react-icons/fa';
import {  ListItemPrefix, Typography } from '@material-tailwind/react';

export const MySurrounding = () => {
    const surroundings = [
        {
            category: 'Nearby Attractions',
            icon: <FaMapMarkerAlt className="h-6 w-6 text-green-500" />,
            places: [
                { name: 'Lohgad Darshan Udyan', distance: '100 m' },
                { name: 'Reywood Garden', distance: '1.1 km' },
                { name: 'Raiwood Udyan', distance: '1.3 km' },
                { name: 'Shakuntal Lawns', distance: '1.6 km' },
                { name: 'Lions Children Health Park', distance: '1.7 km' },
                { name: 'Mirage', distance: '2.7 km' },
                { name: 'Rajmachi Garden', distance: '5 km' },
                { name: 'Our Rosary Garden', distance: '5 km' },
                { name: "Lion's Point", distance: '6 km' },
                { name: 'Tiger Point', distance: '6 km' },
            ],
        },
        {
            category: 'Restaurants & Cafes',
            icon: <FaUtensils className="h-6 w-6 text-yellow-500" />,
            places: [
                { name: 'Laxmi Balaji Ice Cream', distance: '50 m' },
                { name: 'Sugar n Spice Cake Shop', distance: '50 m' },
                { name: 'Ganesh Bhavan Udipi Restaurant', distance: '100 m' },
            ],
        },
        {
            category: 'Natural Beauty',
            icon: <FaLeaf className="h-6 w-6 text-blue-500" />,
            places: [
                { name: 'Kune Falls', distance: '4.3 km' },
            ],
        },
        {
            category: 'Public Transport',
            icon: <FaTrain className="h-6 w-6 text-purple-500" />,
            places: [
                { name: 'Lonavala Railway Station', distance: '750 m' },
                { name: 'Khandala Station', distance: '4 km' },
            ],
        },
        {
            category: 'Closest Airports',
            icon: <FaPlane className="h-6 w-6 text-red-500" />,
            places: [
                { name: 'Pune International Airport', distance: '54 km' },
                { name: 'Chhatrapati Shivaji International Airport Mumbai', distance: '67 km' },
            ],
        },
    ];

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {surroundings.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                            <ListItemPrefix>
                                {section.icon}
                            </ListItemPrefix>
                            <Typography variant="h6" className="font-bold text-gray-800 ml-2">
                                {section.category}
                            </Typography>
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                            {section.places.map((place, placeIndex) => (
                                <li key={placeIndex} className="flex justify-between text-gray-700">
                                    <Typography>{place.name}</Typography>
                                    <Typography className="text-gray-500">{place.distance}</Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
