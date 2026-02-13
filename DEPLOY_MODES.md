# Deploy modes (2 режима: с доменом / без домена)

Сделано максимально просто и безопасно от "залипших" переменных.

## Как теперь выбирается режим

1. Если в репозитории есть `public/CNAME` → режим **с доменом** (пути от `/`).
2. Если `public/CNAME` нет → режим **без домена** (пути с `/doktorzub-chita`).

Дополнительно можно форсировать доменный режим переменной:
- `CUSTOM_DOMAIN_ENABLED=true`

> Важно: значение `false` больше не нужно и не используется.

---

## Где смотреть/менять

GitHub → `istominvi/doktorzub-chita` →
**Settings → Secrets and variables → Actions → Variables**

Если там есть `CUSTOM_DOMAIN_ENABLED=false` — удали эту переменную.

---

## Твой сценарий (doctorzub75.ru)

Должно быть так:
- файл `public/CNAME` существует
- внутри: `doctorzub75.ru`
- `CUSTOM_DOMAIN_ENABLED` либо отсутствует, либо `true`

Тогда после деплоя пути будут такими:
- ✅ `https://doctorzub75.ru/images/...`
- ❌ не должно быть `https://doctorzub75.ru/doktorzub-chita/images/...`

---

## После изменений

1. Запусти деплой заново:
   - push в `main`, или
   - **Actions → Deploy to GitHub Pages → Run workflow**
2. Открой последний запуск и проверь лог:
   - `Deploy mode: custom-domain`
   - `Mode source: cname-file` или `repo-variable`
3. Сделай hard refresh: `Ctrl/Cmd + Shift + R`.
