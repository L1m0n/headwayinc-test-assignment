export default function getLevelStatus(currentLevel: number, level: number) {
  if (currentLevel === level) return 'current';
  if (currentLevel > level) return 'finished';
  if (currentLevel < level) return 'upcoming';
  return 'upcoming';
}
