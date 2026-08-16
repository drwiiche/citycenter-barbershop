export function getShopStatus(): {
  isOpen: boolean;
  statusText: string;
  closingTimeText: string;
  badgeColor: string;
} {
  try {
    const now = new Date();
    // Use standard Intl.DateTimeFormat parts for robust cross-browser timezone resolution
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Amsterdam',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    });

    const parts = formatter.formatToParts(now);
    let weekdayStr = '';
    let hours = now.getHours();
    let minutes = now.getMinutes();

    for (const part of parts) {
      if (part.type === 'weekday') weekdayStr = part.value;
      if (part.type === 'hour') hours = parseInt(part.value, 10);
      if (part.type === 'minute') minutes = parseInt(part.value, 10);
    }

    const isSunday = weekdayStr.toLowerCase().startsWith('sun');
    const isSaturday = weekdayStr.toLowerCase().startsWith('sat');
    const currentTimeMinutes = hours * 60 + minutes;

    let openMinutes = 9 * 60; // 09:00
    let closeMinutes = 20 * 60; // 20:00
    let closeTimeStr = "20:00";

    if (isSunday) {
      openMinutes = 10 * 60;
      closeMinutes = 18 * 60;
      closeTimeStr = "18:00";
    }

    if (currentTimeMinutes >= openMinutes && currentTimeMinutes < closeMinutes) {
      const minutesUntilClose = closeMinutes - currentTimeMinutes;
      if (minutesUntilClose <= 45) {
        return {
          isOpen: true,
          statusText: "Closing Soon",
          closingTimeText: `Closes at ${closeTimeStr} (${minutesUntilClose}m left)`,
          badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40"
        };
      }
      return {
        isOpen: true,
        statusText: "Open Now",
        closingTimeText: `Open today until ${closeTimeStr}`,
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
      };
    } else {
      const nextOpenStr = isSaturday ? "Tomorrow at 10:00" : "Tomorrow at 09:00";
      return {
        isOpen: false,
        statusText: "Closed Now",
        closingTimeText: `Opens ${nextOpenStr} • WhatsApp reservations open 24/7`,
        badgeColor: "bg-slate-700/60 text-slate-300 border-slate-600"
      };
    }
  } catch (e) {
    return {
      isOpen: true,
      statusText: "Open Daily",
      closingTimeText: "Mon–Sat: 09:00–20:00 • Sun: 10:00–18:00",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
    };
  }
}
