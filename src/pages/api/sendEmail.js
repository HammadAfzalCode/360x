import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { field, firstName, lastName, email, phoneNumber, message, company } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bassamnaeem11@gmail.com",
        pass: "csmk wfca eift xpha",
      },
    });

    const mailOptions = {
      from: "bassamnaeem11@gmail.com",
      to: "fa21bscs0017@maju.edu.pk",
      subject: `New Contact from ${firstName} ${lastName}`,
      text: `For: ${field} \nMessage: ${message} \nCompany: ${company}\nFrom: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}`,
    };

    try {
      const result = await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully", result });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to send email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
