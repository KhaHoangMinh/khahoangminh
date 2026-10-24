import { type LucideIcon } from 'lucide-react';
import { LegalSidebarItem } from '@/components/molecules';

export interface NavItem {
    id: string;
    label: string;
    icon?: LucideIcon;
}

interface LegalSidebarNavProps {
    title: string;
    titleIcon?: LucideIcon;
    items: NavItem[];
    activeSection: string;
    onScrollTo: (id: string) => void;
}

export function LegalSidebarNav({ title, titleIcon: TitleIcon, items, activeSection, onScrollTo }: LegalSidebarNavProps) {
    return (
        <div className="lg:w-1/4">
            <div className="sticky top-24 card-khm rounded-xl p-4">
                <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-4 px-2 flex items-center gap-2">
                    {TitleIcon && <TitleIcon className="w-5 h-5 text-orange-500 dark:text-orange-400" />}
                    {title}
                </h3>
                <nav className="space-y-1">
                    {items.map((item) => (
                        <LegalSidebarItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            icon={item.icon}
                            isActive={activeSection === item.id}
                            onClick={onScrollTo}
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
}
