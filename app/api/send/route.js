import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {

    const { email, subject } = await req.json();
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, email],
            subject: subject,
            react: (
                <>
                    <div style={{ backgroundColor: 'black', padding: '20px' }}>
                        <h5 style={{ color: 'white' }}>Hi there, {email}!</h5>
                        <p style={{ color: 'white' }}>Thank you for contacting us!</p>
                        <p style={{ color: 'white' }}>We will get back to you as soon as possible.</p>
                    </div>
                </>
            )
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}