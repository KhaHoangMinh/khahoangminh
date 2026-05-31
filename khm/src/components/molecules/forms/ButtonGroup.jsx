import { Button } from '@/components/atoms/button';
import { cn } from '@/lib/cn';

export function ButtonGroup({ 
    buttons = [], 
    orientation = 'horizontal',
    size = 'md',
    ...props 
}) {
    return (
        <div
        className={cn(
            'flex gap-2',
            orientation === 'vertical' && 'flex-col'
        )}
        {...props}
        >
        {buttons.map((btn, idx) => (
            <Button key={idx} size={size} {...btn}>
            {btn.label}
            </Button>
        ))}
        </div>
    );
}