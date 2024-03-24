import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const bccEmail = process.env.BCC_EMAIL;

export async function POST(req, res) {

    const { email, subject, message } = await req.json();
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, email],
            subject: subject,
            react: (
                <>
                    <div style={{ padding: '20px', textAlign:'left'}}>
                        <h5 style={{ color: 'black', marginBottom: '10px'}}>Hi there, {email}!</h5>
                        <p style={{ color: 'black', marginBottom: '10px' }}>Thank you for contacting us!</p>
                        <p style={{ color: 'black', marginBottom: '10px' }}>We will get back to you as soon as possible.</p>
                        <p style={{ color: 'black', marginBottom: '10px' }}>Best regards!</p>
                    </div>
                </>
            )
        });

        if (data.id) {
                await resend.emails.send({
                    from: fromEmail,
                    to: [bccEmail],
                    subject: subject,
                    react: (
                        <>
                            <div style={{ padding: '20px' }}>
                                <h1 style={{ color: 'black' }}>New message from {email}</h1>
                                <p style={{ color: 'black' }}>{message}</p>
                                <h2 style={{color: 'black'}}> Identify: {data.id}</h2>
                            </div>
                        </>
                    )
                });
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}