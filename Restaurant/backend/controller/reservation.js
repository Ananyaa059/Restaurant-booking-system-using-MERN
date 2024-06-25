import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body; //means we need these data from the frontend//it is case sensitive FirstName is invalid
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill full reservation form!", 400)); //status code here is 400  bad request
  }

  try {
    await Reservation.create({ firstName, lastName, email, phone, date, time });
    //if await was not mentioned it would throw and error until this statement is executed the code is halted
    //200 is success status code json method sends a JSON response to the client
    //200 is success status code json method send
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully",
    });
  } catch (error) {
    //only validation error is possible no other error is not possible here
    if (error.name === "ValidationError") {
      //checks if caught error is vlidation error
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(error);
  }
};

export default sendReservation;
