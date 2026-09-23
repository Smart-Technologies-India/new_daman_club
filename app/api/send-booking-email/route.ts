import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Create transporter - using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format the email content
    const emailContent = `
      <h2>New Booking Inquiry</h2>
      <hr />
      
      <h3>Request Type</h3>
      <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
      
      <h3>Contact Information</h3>
      <p><strong>Full Name:</strong> ${formData.fullName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Preferred Contact Method:</strong> ${formData.contactMethod}</p>
      
      <h3>Dates & Schedule</h3>
      <p><strong>Check-in / Event Start Date:</strong> ${formData.startDate}</p>
      <p><strong>Check-out / Event End Date:</strong> ${formData.endDate}</p>
      <p><strong>Date Flexibility:</strong> ${formData.dateFlexibility}</p>
      
      ${formData.inquiryType === "stay" || formData.inquiryType === "package" ? `
        <h3>Guest & Accommodation Details</h3>
        <p><strong>Adults:</strong> ${formData.adults}</p>
        <p><strong>Children:</strong> ${formData.children}</p>
        <p><strong>Number of Rooms:</strong> ${formData.rooms}</p>
      ` : ""}
      
      ${formData.inquiryType === "event" || formData.inquiryType === "package" ? `
        <h3>Event Details</h3>
        <p><strong>Event Type:</strong> ${formData.eventType}</p>
        <p><strong>Estimated Guests:</strong> ${formData.estimatedGuests}</p>
        <p><strong>Indoor Venue:</strong> ${formData.venueIndoor ? "Yes" : "No"}</p>
        <p><strong>Outdoor Venue:</strong> ${formData.venueOutdoor ? "Yes" : "No"}</p>
        <p><strong>Catering Required:</strong> ${formData.serviceCatering ? "Yes" : "No"}</p>
        <p><strong>AV & Stage Setup:</strong> ${formData.serviceAv ? "Yes" : "No"}</p>
        <p><strong>Decoration Service:</strong> ${formData.serviceDecoration ? "Yes" : "No"}</p>
        <p><strong>Overnight Accommodation:</strong> ${formData.serviceOvernight ? "Yes" : "No"}</p>
      ` : ""}
      
      <h3>Special Requests</h3>
      <p>${formData.specialRequests || "None"}</p>
    `;

    // Email to admin
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "thedamanclub@gmail.com",
      subject: `New Booking Inquiry - ${formData.inquiryType}`,
      html: emailContent,
    };

    // Send email to admin
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Booking inquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending booking email:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
