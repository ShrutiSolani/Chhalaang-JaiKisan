import React, { useState } from 'react';
import * as Location from 'expo-location';
import { Button } from 'react-native';
import db from '../firestore';
import { doc, setDoc } from "firebase/firestore";

export default function GetLocationofLand() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [farmCoordinates, setFarmCoordinates] = useState([]);

    const uploadToFirestore = async () => {
        let area = 0;
        let x1 = farmCoordinates[0].latitude;
        let x2 = farmCoordinates[1].latitude;
        let x3 = farmCoordinates[2].latitude;
        let x4 = farmCoordinates[3].latitude;
        let y1 = farmCoordinates[0].longitude;
        let y2 = farmCoordinates[0].longitude;
        let y3 = farmCoordinates[0].longitude;
        let y4 = farmCoordinates[0].longitude;

        area = ((x1 * y2) - (y1 * x2)) + ((x2 * y3) - (y2 * x3)) + ((x3 * y4) - (y3 * x4)) + ((x4 * y1) - (y4 * x1));
        const docData = {
            coordinates: farmCoordinates,
            area: area
        };
        await setDoc(doc(db, "farmerLand", "one"), docData);
        console.log("uploaded to firestore");
        setFarmCoordinates([]);
    }


    const getCurrentLocation = async () => {
        setCurrentLocation(await Location.getCurrentPositionAsync({}));
        if (currentLocation != null) {
            let coordinates = {
                "latitude": currentLocation.coords.latitude,
                "longitude": currentLocation.coords.longitude
            }
            setFarmCoordinates(oldArray => [...oldArray, coordinates]);
        }

        if (farmCoordinates.length >= 4) {
            uploadToFirestore();
        }
    }

    return (
        <Button
            onPress={getCurrentLocation}
            title="Get location"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    );
}

