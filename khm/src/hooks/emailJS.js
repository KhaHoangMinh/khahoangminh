import emailJS from "@emailjs/browser";

emailJS.init(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY);

export async function sendEmail(formData) {
    const emailParams = {
        from_name: formData.name,      // Matches {{from_name}} in template
        from_email: formData.email,    // Matches {{from_email}} in template
        phone: formData.phone || "Not provided",
        message: formData.message,     // Matches {{message}} in template
        to_email: 'info@khahoangminh.com.vn',
    };

    try {
        return await emailJS.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            emailParams
        );
    } catch (error) {
        console.error("EmailJS Error:", error);
        throw error;
    }
}