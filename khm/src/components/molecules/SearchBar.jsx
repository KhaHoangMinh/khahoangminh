import { Input } from '@/components/atoms/input';
import { Button } from '@/components/atoms/button';
import { Search } from 'lucide-react';

export function SearchBar({ onSearch, placeholder = 'Search...', isLoading = false }) {
    const [query, setQuery] = React.useState('');

    const handleSearch = () => {
        onSearch?.(query);
    };

    return (
        <div className="flex gap-2">
        <Input
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch} disabled={isLoading}>
            <Search className="w-4 h-4" />
        </Button>
        </div>
    );
}