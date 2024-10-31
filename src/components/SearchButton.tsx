import React from 'react';
import { Search } from 'lucide-react';

export function SearchButton() {
  return (
    <button
      type="submit"
      className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
    >
      <Search size={20} />
      Найти
    </button>
  );
}