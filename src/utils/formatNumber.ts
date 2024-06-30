const formatNumber = (number: string | null, lang: 'es' | 'en') => {
  if (number === null) return '0';

  const n = String(Number(number).toFixed(1));
  if (lang === 'es') return n.replace('.', ',');

  return n;
};

export { formatNumber };
