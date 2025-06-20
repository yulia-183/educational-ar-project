
# 🎓 Геометричні фігури оживають

**Інтерактивне вивчення площ та об'ємів за допомогою доповненої реальності**

---

## 📊 Опис проєкту

Це освітній AR-додаток, призначений для інтерактивного вивчення геометричних фігур через візуалізацію 3D моделей у доповненій реальності. Проєкт дозволяє учням краще зрозуміти зв'язок між плоскими фігурами та об'ємними тілами, а також вивчити формули для обчислення площ і об'ємів.

### 🎯 Мета проєкту
Створення інтерактивного AR-додатку для вивчення геометричних фігур, їх площ та об'ємів через візуалізацію 3D моделей

### 👥 Цільова аудиторія
Учні 5-9 класів

### 📱 Платформа
Мобільні пристрої (Android/iOS) з камерою

---

## 🚀 Швидкий старт

### Крок 1: Завантаження маркерів
1. Перейдіть у папку `markers/`
2. Роздрукуйте маркери геометричних фігур

### Крок 2: Запуск AR
1. Відкрийте файл `examples/AR.html` у браузері
2. Надайте дозвіл на використання камери
3. Наведіть камеру на роздрукований маркер

### Крок 3: Взаємодія
- Спостерігайте за 3D моделлю, що з'являється над фігурою
- Переміщуйте маркер для огляду моделі з різних кутів
- Взаємодійте з моделлю для вивчення формул

---

## 📐 Підтримувані геометричні фігури

| Плоска фігура | Об'ємне тіло | Формула площі | Формула об'єму |
|---------------|--------------|---------------|----------------|
| ⬜ Квадрат | Куб | S = 6a² | V = a³ |
| ⭕ Коло | Сфера | S = 4πr² | V = 4/3πr³ |
| 🔺 Трикутник | Піраміда | S = Sб.+Sосн. | V = ⅓Sh |
| ▭ Прямокутник | Прямокутний паралелепіпед | S = 2(ab+bc+ac) | V = abc |

### Приклад розрахунку
Для куба зі стороною a = 5 см:
- Площа: S = 6a² = 6×5² = 150 см²
- Об'єм: V = a³ = 5³ = 125 см³

---

## ✨ Функціональність

### 🎮 3D Візуалізація
Реалістичні 3D моделі геометричних тіл з'являються над плоскими фігурами на маркерах

### 📐 Інтерактивні формули
Відображення формул обчислення площ та об'ємів з можливістю інтерактивної взаємодії

### 🎨 Анімація розгортки
Анімація переходу від плоскої фігури до об'ємного тіла та назад

### 📊 Порівняння фігур
Можливість одночасного відображення кількох фігур для порівняння їх властивостей

---

## 🎯 AR Маркери

Проєкт використовує природні маркери з контурами геометричних фігур:

- **Квадрат** - для відображення куба
- **Коло** - для відображення сфери  
- **Трикутник** - для відображення піраміди
- **Прямокутник** - для відображення паралелепіпеда

Усі маркери знаходяться в папці `markers/` та готові до друку.

---

## ⚙️ Технічні вимоги

### Системні вимоги
- Сучасний браузер (Chrome, Firefox, Safari)
- Камера 
- Роздруковані AR маркери

### Технології
- **MindAR** - основна AR бібліотека
- **JavaScript** - мова програмування
- **WebRTC** - доступ до камери
- **Three.js** - 3D графіка


---

## 📁 Структура проєкту

```
📁 project-root/
├── 📄 index.html          # Головна сторінка проєкту
├── 📄 README.md           # Документація
├── 📁 examples/
│   ├── 📄 AR.html         # Основний AR додаток
│   ├── 📄 AR.js           
│   ├── 📄 cube-scan.html  # Розгортка куба
│   ├── 📄 triangular-pyramid-sweep.html  # Розгортка піраміди
│   ├── 📄 targets.mind    # маркер MindAR
│   └── 📄 prism-scan.html # Розгортка паралелепіпеда
├── 📁 markers/            # AR маркери для друку

```

---

## 🔧 Встановлення та налаштування

### Браузерна підтримка
- ✅ Chrome (рекомендовано)
- ✅ Firefox
- ✅ Safari (iOS)
- ✅ Edge

---

## 📚 Додаткові ресурси

### Розгортки фігур
- [Розгортка куба з анімацією](./examples/cube-scan.html)
- [Розгортка піраміди](./examples/triangular-pyramid-sweep.html)
- [Розгортка паралелепіпеда](./examples/prism-scan.html)

### Інструкції для вчителів
1. Підготуйте роздруковані маркери для кожного учня
2. Переконайтеся, що всі пристрої мають камеру та підключення до інтернету
3. Проведіть демонстрацію перед початком уроку
4. Дозвольте учням експериментувати з різними фігурами

---

## 🐛 Усунення неполадок

### AR не запускається
- Перевірте дозволи камери в браузері
- Переконайтеся, що маркери чітко роздруковані
- Забезпечте достатнє освітлення

### 3D моделі не відображаються
- Перевірте підключення до інтернету
- Оновіть сторінку
- Спробуйте інший браузер

---

## 👨‍🎓 Інформація про автора

**Автор:** Корнілова Юлія Олександрівна  
**Група:** МІм-24  
**Спеціальність:** 014 Середня освіта (Математика)  
**Викладач:** Семеріков Сергій Олексійович  
**Дисципліна:** Інноваційні цифрові технології в освіті  
**Рік:** 2025  

---

## 🤝 Контрибуція

Якщо у вас є ідеї для покращення проєкту або ви знайшли помилки, будь ласка:
1. Створіть issue з описом проблеми
2. Запропонуйте покращення
3. Поділіться досвідом використання

---

**Дякуємо за використання "Геометричні фігури оживають"! 🎉**
