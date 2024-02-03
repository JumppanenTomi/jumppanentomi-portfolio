import {Resend} from "resend";
import EmailTemplate from "./EmailTemplate";

export default async function NewUserEmail(receiver: string, name: string) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const mail = await resend.emails.send({
        from: process.env.CONTACT_EMAIL || 'onboarding@resend.dev',
        to: receiver,
        subject: 'Welcome on platform',
        html: EmailTemplate(name, "Welcome to platform.")
    });
    console.log(mail)
}