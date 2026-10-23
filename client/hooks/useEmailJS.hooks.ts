import emailJS from "@emailjs/browser";
import type { ContactFormData } from '@/lib';

emailJS.init(process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string);

export async function sendEmail(formData: ContactFormData) {
    const emailParams = {
        from_name: formData.name,      // Matches {{from_name}} in template
        from_email: formData.email,    // Matches {{from_email}} in template
        phone: formData.phone || "Not provided",
        message: formData.message,     // Matches {{message}} in template
        to_email: 'info@khahoangminh.com.vn',
    };

    try {
        return await emailJS.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            emailParams
        );
    } catch (error) {
        throw error;
    }
}