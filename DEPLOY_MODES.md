# Deploy modes (2 режима: с доменом / без домена)

Сделано максимально просто.

## Что теперь переключает режим

1. **Автоматически по файлу `public/CNAME`**
   - если файл есть → режим **с доменом** (пути от `/`)
   - если файла нет → режим **без домена** (пути с `/doktorzub-chita`)

2. **Опционально вручную переменной** `CUSTOM_DOMAIN_ENABLED`
   - `true` → принудительно режим с доменом
   - `false` → принудительно режим без домена

> Переменная нужна только если хочешь вручную переопределить автологику.

---

## Где менять вручную (если нужно)

GitHub → `istominvi/doktorzub-chita` →
**Settings → Secrets and variables → Actions → Variables** → `CUSTOM_DOMAIN_ENABLED`

---

## Самый простой сценарий для тебя

### Когда работаешь с кастомным доменом `doctorzub75.ru`

- Держи файл `public/CNAME` с содержимым:
  `doctorzub75.ru`
- `CUSTOM_DOMAIN_ENABLED` можно вообще не трогать.

### Когда хочешь вернуть режим без домена (`github.io/repo`)

- Удали `public/CNAME`
- Запусти новый деплой.

---

## После переключения

1. Сделай push в `main` или запусти вручную workflow:
   **Actions → Deploy to GitHub Pages → Run workflow**
2. Обнови сайт с hard refresh: `Ctrl/Cmd + Shift + R`

---

## Почему у тебя были URL вида
`https://doctorzub75.ru/doktorzub-chita/images/...`

Это признак, что сборка ушла в режим **без домена** (с префиксом `/doktorzub-chita`).
Для кастомного домена должно быть так:
`https://doctorzub75.ru/images/...`
