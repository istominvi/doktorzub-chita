# Deploy modes (только 2 режима)

Переключение делается **одной переменной** в GitHub:
`CUSTOM_DOMAIN_ENABLED`

## Где переключать

1. Открой репозиторий `istominvi/doktorzub-chita`.
2. Зайди в: **Settings → Secrets and variables → Actions → Variables**.
3. Создай/измени переменную `CUSTOM_DOMAIN_ENABLED`.

---

## Режим 1: без домена (обычный GitHub Pages URL)

URL: `https://<user>.github.io/doktorzub-chita/`

Поставь:
- `CUSTOM_DOMAIN_ENABLED=false`
  (или просто удали переменную)

Что будет:
- сайт собирается с префиксом `/doktorzub-chita`
- стили и скрипты грузятся правильно для project pages

---

## Режим 2: с доменом (custom domain)

URL: `https://your-domain.com/`

Поставь:
- `CUSTOM_DOMAIN_ENABLED=true`

Что будет:
- сайт собирается от корня `/`
- без префикса `/doktorzub-chita`
- стили и скрипты грузятся правильно для кастомного домена

---

## После переключения

1. Сделай любой push в `main` **или** запусти вручную:
   **Actions → Deploy to GitHub Pages → Run workflow**.
2. На сайте сделай hard refresh: `Ctrl/Cmd + Shift + R`.

---

## Важно про Vercel

Vercel это не ломает:
- для Vercel и локальной разработки остаются root-пути (`/`).
- переключатель нужен только для GitHub Actions и деплоя на Pages.
