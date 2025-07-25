// hooks/useBillingToggle.ts
import { useState, useCallback } from 'react';

export const useBillingToggle = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = useCallback(() => {
    setIsYearly(prev => !prev);
  }, []);

  return { isYearly, toggleBilling };
};