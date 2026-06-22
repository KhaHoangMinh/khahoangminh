"use client";

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
    placeholder?: string;
}

export function SearchBar({ value, onChange, onClear, placeholder }: SearchBarProps) {
    return (
        <div className="w-full lg:w-1/3 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
            </div>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-orange-500/50 focus:bg-white dark:focus:bg-slate-950 ring-0 outline-none rounded-2xl py-3.5 pl-11 pr-12 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300"
            />
            {value && (
                <button
                    onClick={onClear}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-orange-600 transition-colors"
                    aria-label="Clear search"
                >
                    <X className="h-5 w-5" />
                </button>
            )}
        </div>
    );
}