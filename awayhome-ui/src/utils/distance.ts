// src/utils/distance.ts

const toRadians = (degrees: number): number => degrees * (Math.PI / 180);

export const calculateDistance = (
  coord1: { lat: number; lng: number },
  coord2: { lat: number; lng: number },
): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(coord2.lat - coord1.lat);
  const dLng = toRadians(coord2.lng - coord1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(coord1.lat)) *
      Math.cos(toRadians(coord2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};
