import { Task } from '../types/Task';
import Tasks from '../redux/Tasks';
import Input from './Input';

import { useState, useEffect } from 'react';

export default function Main() {
  return (
    <main className="mb-4 flex-1 text-lg">
      <div className="mx-auto max-w-md">
        <Input />
        <Tasks />
      </div>
    </main>
  );
}
