import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "./mail-adpter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2894c05f7c4631",
    pass: "a0aa0a8a2545c5",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Renato Costa <renatofurtado33@gmail.com>",
      subject,
      html: body,
    });
  }
}
