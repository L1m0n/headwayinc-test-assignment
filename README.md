# Headway Inc Test Assignment

Це тестове завдання для Headway Inc, створене з використанням Next.js та TypeScript.

## Вимоги

- Node.js 18+ 
- pnpm (рекомендовано) або npm

## Встановлення

1. Клонуйте репозиторій:
```bash
git clone https://github.com/your-username/headwayinc-test-assignment.git
cd headwayinc-test-assignment
```

2. Встановіть залежності:
```bash
pnpm install


## Запуск

### Розробка
```bash
pnpm dev


Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

### Збірка для продакшену
```bash
pnpm build
pnpm start
```

### Лінтування
```bash
# Перевірка коду
pnpm lint

# Автоматичне виправлення помилок
pnpm lint:fix
```

### Тестування
```bash
pnpm test
```

## Технології

- **Framework:** Next.js 15.4.4
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Linting:** ESLint + Airbnb config
- **Testing:** Jest + React Testing Library
- **Package Manager:** pnpm


## Git Hooks

Проект налаштований з git hooks:
- **pre-commit:** Запускає ESLint на змінені файли
- **pre-push:** Запускає unit тести
