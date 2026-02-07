import {
    Resend
} from "resend";
import {
    ContactFormSchema
} from "@/app/lib/validation";
import {
    NextResponse
} from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_7A7eaSkr_PrirfHoDhY4knf8Ao2Dt2K7t");

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsed = ContactFormSchema.safeParse(body);

        if (!parsed.success) {
            return (
                NextResponse.json(
                    {
                        errors: "Něco se nepovedlo."
                    },
                    {
                        status: 400
                    }
                )
            );
        };

        const {
            name,
            email,
            phone,
            message
        } = parsed.data;

        await resend.emails.send({
            from: "onboarding@resend.dev",
            // to: `${process.env.MY_EMAIL}`,
            to: process.env.MY_EMAIL || "info.modernizujme@gmail.com",
            subject: `Nová zpráva z profimalby.cz | od ${email}`,
            html: `
            <p>Jméno: ${name}</p>
            <p>Email: ${email}</p>
            <p>Telefonní číslo: ${phone?.trim() || "-"}</p>
            <p>Zpráva pro pana Lejska: ${message}</p>
            `
        });

        return (
            NextResponse.json(
                {
                    succes: true
                }
            )
        );
    } catch (error) {
        console.error("Chyba při odesílání zprávy:", error);

        return (
            NextResponse.json(
                {
                    errors: "Nepodařilo se odeslat zprávu."
                }
            )
        );
    };
};