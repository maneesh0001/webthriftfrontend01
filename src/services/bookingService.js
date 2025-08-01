import { createBooking } from "../api/user/bookingApi";


export const createBookingService = async (bookingData) => {
  const response = await createBooking(bookingData);
  return response.data;
}