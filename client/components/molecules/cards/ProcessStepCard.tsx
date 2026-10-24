import { Card, CardContent } from '@/components/atoms';

interface ProcessStepCardProps {
    step: string | number;
    title: string;
    description: string;
}

export function ProcessStepCard({ step, title, description }: ProcessStepCardProps) {
    return (
        <Card className="h-full card-khm text-center group backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center h-full">
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300 mb-3 group-hover:scale-110 transition-transform">
                    {step}
                </div>
                <h3 className="heading-card mb-2">{title}</h3>
                <p className="text-body">{description}</p>
            </CardContent>
        </Card>
    );
}
