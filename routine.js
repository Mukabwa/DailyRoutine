const prompt = require('prompt-sync')();

let wakeUp = prompt("What time do you wake up? (e.g., 07:00): ");
let workHours = Number(prompt("How many hours do you work? (e.g., 8): "));
let breakDuration = Number(prompt("How long is your break? (in minutes): "));

if (isNaN(workHours) || isNaN(breakDuration)) {
    console.log("Please enter valid number for work hours and break");
    process.exit(1);
}

let wakeHour = Number(wakeUp.split(":")[0]);
let workEndHour = wakeHour + workHours;
let totalBreakMinutes = breakDuration;
let extraHours = Math.floor(totalBreakMinutes/60);
let remainingMinutes = totalBreakMinutes%60;
let breakHour = wakeHour + Math.floor(workHours / 2) + extraHours;
let breakMinute = remainingMinutes;

console.log("\n🕒 Your Daily Routine Timeline:");
console.log(`🌞 Wake up at ${wakeUp}`);
console.log(`💼 Work starts at ${wakeUp} and ends at ${workEndHour}:00`);
console.log(`☕ Take a break around ${breakHour}:${breakMinute.toString().padStart(2, '0')}`);
console.log(`🌙 You’re free after ${workEndHour}:00`);

if (workHours >= 10) {
  console.log("⚠️ Consider taking a longer rest. You're working a long day!");
} else if (workHours <= 4) {
  console.log("✨ Light work day — enjoy the extra time!");
} else {
  console.log("✅ Balanced day — nice routine.");
}