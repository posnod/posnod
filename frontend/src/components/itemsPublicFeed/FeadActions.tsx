'use client';

import { Plus, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  onLeft: () => void;
  onRight: () => void;
};

const FeadActions = ({ onLeft, onRight }: Props) => {
  return (
    <div className="flex gap-2 text-gray-500">
      <Plus className="cursor-pointer" />
      <Menu className="cursor-pointer" />
      <ChevronLeft className="cursor-pointer" onClick={onLeft} />
      <ChevronRight className="cursor-pointer" onClick={onRight} />
    </div>
  );
};

export default FeadActions;
