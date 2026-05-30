import { Label } from '@/components/atoms/label';
import { Input } from '@/components/atoms/input';
import { Textarea } from '@/components/atoms/textarea';
import { cn } from '@/lib/utils';

export function FormGroup({
    label,
    type = 'text',
    placeholder,
    error,
    helperText,
    required = false,
    multiline = false,
    ...props
}) {
    const Component = multiline ? Textarea : Input;

    return (
        <div className="space-y-2">
        {label && (
            <Label htmlFor={props.id}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
            </Label>
        )}
        <Component
            type={type}
            placeholder={placeholder}
            className={cn(error && 'border-red-500')}
            {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
        </div>
    );
}