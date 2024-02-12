import { NextResponse, ServerComponents } from 'next/server';
//import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const { ServerComponents: { Fragment } } = ServerComponents;

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {

    const { body } = req.json();
    const { email, subject, message } = body;

    try {

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, email],
            subject: subject,
            //react: EmailTemplate({ firstName: 'John' }),
            react: (
                <Fragment>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </Fragment>
            )
        });
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error sending email: ', error);
        return NextResponse.json({ error });
    }
};
