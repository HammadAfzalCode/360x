// import nodemailer from "nodemailer";

// export default async (req, res) => {
//   if (req.method === "POST") {
//     const {FullName, Email, Message } = req.body;



//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "bassamnaeem11@gmail.com",
//         pass: "csmk wfca eift xpha",
//       },
//     });

//     const mailOptions = {
//       from: "bassamnaeem11@gmail.com",
//       to: `${Email} , ${"iiasimzaheer@gmail.com"}`,
//       subject: `New ChatBot Message From ${FullName}`,
//       text: `  \nFrom: ${FullName} \nEmail: ${Email} \nMessage: ${Message}`,
//     };

//     try {
//       const result = await transporter.sendMail(mailOptions);
//       res
//         .status(200)
//         .json({ success: true, message: "Email sent successfully", result });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ success: false, message: "Failed to send email", error });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };



import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { FullName, Email, Message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bassamnaeem11@gmail.com",
        pass: "csmk wfca eift xpha",
      },
    });

    // Email to user
    const userMailOptions = {
      from: "bassamnaeem11@gmail.com",
      to: Email,
      subject: `Thank you for your message `,
      text: "Your message has been received. We will get back to you soon.",
    };

    // Email to admin
    const adminMailOptions = {
      from: "bassamnaeem11@gmail.com",
      to: "iiasimzaheer@gmail.com",
      subject: `New ChatBot Message From ${Message}`,
      text: `\n From: ${FullName}\n Message: ${Message}\n Email: ${Email}`,
    };

    try {
      // Send email to user
     const res1= await transporter.sendMail(userMailOptions);

      // Send email to admin
      const res2 = await transporter.sendMail(adminMailOptions);

      res.status(200).json({ success: true, message: "Emails sent successfully", res1,res2 });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to send emails from back", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
