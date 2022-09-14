export function formatDateString(dateString: string): string {
  const parseOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };

  const date = new Date(dateString);
  return date.toLocaleDateString(
    undefined,
    parseOptions as Intl.DateTimeFormatOptions
  );
}
