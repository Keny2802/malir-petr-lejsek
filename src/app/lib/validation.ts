import {
    z
} from "zod";

export const ContactFormSchema = z.object({
    name: z.string().trim().min(2, "Vaše jméno nesmí být kratší než 2 znaky."),
    email: z.string().trim().email("Neplatná emailová adresa."),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(10, "Zpráva nesmí kratší než 10 znaků.")
});

export type ContactFormProps = z.infer<typeof ContactFormSchema>;