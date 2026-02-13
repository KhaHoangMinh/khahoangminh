export const validateContactForm = (formData, t) => {
    const errors = {};

    // Validate Name
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = t('contactPage.errors.nameRequired') || "Name is required.";
    }

    // Validate Phone
    if (formData.phone && formData.phone.trim().length > 0) {
        // Remove spaces, dashes, dots, parentheses to clean the input
        const cleanPhone = formData.phone.replace(/[\s\-\.\(\)]/g, '');

        // Regex 1: Vietnam (Starts with 0, 10-11 digits)
        const isVN = /^0\d{9,10}$/;

        // Regex 2: International (Starts with +, 8-15 digits)
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