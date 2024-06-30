const formatDate = (date: Date | string | undefined, lang: 'es' | 'en'): string => {
  const d = new Date(date || '');
  const options: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    hour: '2-digit',
    weekday: 'long',
    month: '2-digit',
    day: '2-digit',
  };
  return d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', options);
};

export { formatDate };
