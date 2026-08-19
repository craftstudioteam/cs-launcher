import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className="toast-item">
      {toast.type === 'error' ? (
        <AlertCircle size={18} color="#F43F5E" />
      ) : (
        <CheckCircle2 size={18} color="#10B981" />
      )}
      <span>{toast.message}</span>
    </div>
  );
}
