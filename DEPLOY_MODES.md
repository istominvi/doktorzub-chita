# Deploy modes (Vercel + GitHub Pages)

Коротко: переключение делается в **GitHub repository variables**.

## Где менять флаг

1. Открой репозиторий на GitHub: `istominvi/doktorzub-chita`.
2. Перейди: **Settings → Secrets and variables → Actions → Variables**.
3. Нажми **New repository variable** или отредактируй существующий.

Именно тут меняются:
- `CUSTOM_DOMAIN_ENABLED`
- `BASE_PATH` (опционально, ручной override)

---

## Как работает переключение

Приоритет такой:

1. Если задан `BASE_PATH` → используется он.
2. Иначе, если `CUSTOM_DOMAIN_ENABLED=true` → сборка в корень (`/`).
3. Иначе → режим project pages (`/doktorzub-chita`).

Это логика шага `Resolve base path mode` в workflow.

---

## Режимы по-простому

### 1) Обычный GitHub Pages URL
URL: `https://<user>.github.io/doktorzub-chita/`

- `CUSTOM_DOMAIN_ENABLED` = не задан или `false`
- `BASE_PATH` = не задан

Результат: ассеты собираются с префиксом `/doktorzub-chita`.

### 2) Кастомный домен
URL: `https://your-domain.com/`

- `CUSTOM_DOMAIN_ENABLED=true`
- `BASE_PATH` = не задан

Результат: ассеты собираются от корня `/` (без `/doktorzub-chita`).

### 3) Полностью ручной режим

- задаёшь `BASE_PATH` сам:
  - `BASE_PATH=/doktorzub-chita` (project pages)
  - `BASE_PATH=` (пустая строка, root)
  - `BASE_PATH=/any-prefix` (если нужен нестандартный префикс)

`BASE_PATH` всегда важнее `CUSTOM_DOMAIN_ENABLED`.

---

## Что делать после смены флага

1. Измени variable.
2. Запусти деплой:
   - либо новый push в `main`,
   - либо вручную **Actions → Deploy to GitHub Pages → Run workflow**.
3. Открой сайт и сделай hard refresh (`Ctrl/Cmd + Shift + R`).

---

## Важно про Vercel

Vercel использует отдельный деплой и обычно работает с root-путями.
Текущая конфигурация оставляет Vercel-режим по умолчанию в root (`""`),
поэтому он не должен ломаться из-за этих GitHub Actions-переключателей.
