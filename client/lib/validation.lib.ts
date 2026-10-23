export interface ContactFormData {
    name: string;
    phone?: string;
    email: string;
    message: string;
}

export const validateContactForm = (formData: ContactFormData, t: (key: string) => string) => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    // Validate Name
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = t('contactPage.errors.nameRequired') || "Name is required.";
    }

    // Validate Phone
    if (formData.phone && formData.phone.trim().length > 0) {
        const cleanPhone = formData.phone.replace(/[\s\-\.\(\)]/g, ''); 
        const isVN = /^0\d{9,10}$/; 
        const isInternational = /^\+\d{8,15}$/; 

        if (!isVN.test(cleanPhone) && !isInternational.test(cleanPhone)) {
            errors.phone = t('contactPage.errors.phoneInvalid') || "Invalid phone number."; 
        }
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
        errors.email = t('contactPage.errors.emailInvalid') || "Valid email is required."; 
    }

    // Validate Message
    if (!formData.message || formData.message.trim().length < 10) {
        errors.message = t('contactPage.errors.messageRequired') || "Message is too short."; 
    }

    return {
        isValid: Object.keys(errors).length === 0, 
        errors
    };
};