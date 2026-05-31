import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, Button, Input, Textarea } from '@/components/atoms';
import { useLanguage } from "@/services/LanguageProvider.jsx";
import { sendEmail } from "@/hooks/emailJS.js";
import { validateContactForm } from "@/utils/validation.js";

export function ContactFormSection() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setStatus({ type: '', message: '' });

        const validation = validateContactForm(formData, t);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        setIsSending(true);
        try {
            await sendEmail(formData);
            setStatus({ type: 'success', message: t('contactPage.successMessage') || 'Message sent successfully!' });
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: "Failed to send message. Please try again later." });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Card className="h-full border border-slate-200/50 dark:border-white/10 shadow-2xl backdrop-blur-md bg-white/80 dark:bg-slate-900/80">
            <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
                    {t('contactPage.formTitle')}
                </h2>
                <p className="text-sm text-slate-500 mb-8">{t('contactPage.formDesc')}</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                            {t('contactPage.labels.name')} <span className="text-orange-500 ml-0.5">*</span>
                        </label>
                        <Input
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder={t('contactPage.placeholders.name')}
                            disabled={isSending}
                            className={`bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-all ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-orange-500'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium animate-in slide-in-from-top-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                                {t('contactPage.labels.phone')}
                            </label>
                            <Input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder={t('contactPage.placeholders.phone')}
                                disabled={isSending}
                                className={`bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-all ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-orange-500'}`}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium animate-in slide-in-from-top-1">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                                {t('contactPage.labels.email')} <span className="text-orange-500 ml-0.5">*</span>
                            </label>
                            <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder={t('contactPage.placeholders.email')}
                                disabled={isSending}
                                className={`bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-all ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-orange-500'}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium animate-in slide-in-from-top-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                            {t('contactPage.labels.message')} <span className="text-orange-500 ml-0.5">*</span>
                        </label>
                        <Textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder={t('contactPage.placeholders.message')}
                            rows={5}
                            disabled={isSending}
                            className={`bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm resize-none transition-all ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-orange-500'}`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium animate-in slide-in-from-top-1">{errors.message}</p>}
                    </div>

                    {status.message && (
                        <div className={`p-4 rounded-lg flex items-start gap-3 text-sm animate-in fade-in slide-in-from-bottom-2 ${
                            status.type === 'success'
                                ? 'bg-green-500/10 text-green-700 border border-green-500/20 dark:text-green-400'
                                : 'bg-red-500/10 text-red-700 border border-red-500/20 dark:text-red-400'
                        }`}>
                            {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                            <span className="font-medium">{status.message}</span>
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold shadow-lg shadow-orange-600/20 transition-all hover:-translate-y-0.5"
                        disabled={isSending}
                    >
                        {isSending ? <Loader2 className="mr-2 w-5 h-5 animate-spin" /> : <Send className="mr-2 w-5 h-5" />}
                        {isSending ? 'Sending...' : t('contactPage.button')}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}