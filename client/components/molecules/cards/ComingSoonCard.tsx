import { Card, CardContent } from '@/components/atoms';

interface ComingSoonCardProps {
    text: string;
    linkText: string;
}

export function ComingSoonCard({ text, linkText }: ComingSoonCardProps) {
    return (
        <Card className="mt-10 card-khm bg-slate-50/80 dark:bg-[#182234] rounded-2xl">
            <CardContent className="p-6 sm:p-8 text-center">
                <p className="text-body">
                    {text}
                    <a 
                        href="https://www.facebook.com/inoxkhahoangminh" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-orange-600 dark:text-orange-400 font-semibold ml-1.5 hover:underline transition-colors"
                    >
                        {linkText}
                    </a>
                </p>
            </CardContent>
        </Card>
    );
}
