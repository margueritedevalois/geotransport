import React from 'react';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';

interface SearchFormProps {
  sender: string;
  receiver: string;
  item: string;
  onSenderChange: (value: string) => void;
  onReceiverChange: (value: string) => void;
  onItemChange: (value: string) => void;
}

export function SearchForm({
  sender,
  receiver,
  item,
  onSenderChange,
  onReceiverChange,
  onItemChange,
}: SearchFormProps) {
  return (
    <form className="flex flex-col md:flex-row gap-4">
      <SearchInput
        placeholder="Город отправителя"
        value={sender}
        onChange={onSenderChange}
      />
      <SearchInput
        placeholder="Город получателя"
        value={receiver}
        onChange={onReceiverChange}
      />
      <SearchInput
        placeholder="Что отправляем"
        value={item}
        onChange={onItemChange}
      />
      <SearchButton />
    </form>
  );
}