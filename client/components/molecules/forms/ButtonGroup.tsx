import React from 'react';
import { Button } from '@/components/atoms/button';
import { cn } from '@/lib';

interface ButtonConfig extends React.ComponentProps<typeof Button> {
    label: React.ReactNode;
}

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    buttons?: ButtonConfig[];
    orientation?: 'horizontal' | 'vertical';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function ButtonGroup({ 
    buttons = [], 
    orientation = 'horizontal',
    size = 'default',
    ...props 
}: ButtonGroupProps) {
    return (
        <div
        className={cn(
            'flex gap-2',
            orientation === 'vertical' && 'flex-col'
        )}
        {...props}
        >
            {buttons.map((btn, idx) => {
                const { label, ...btnProps } = btn;
                return (
                    <Button key={idx} size={size} {...btnProps}>
                        {label}
                    </Button>
                );
            })}
        </div>
    );
}