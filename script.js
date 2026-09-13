document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Theme and Image Toggle Logic ---
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = themeBtn.querySelector('i');
    
    // Функция для обновления картинок в зависимости от темы
    function updateImagesByTheme(theme) {
        const folder = theme === 'dark' ? 'night' : 'day';
        const images = document.querySelectorAll('.theme-image');
        
        images.forEach(img => {
            const fileName = img.getAttribute('data-img');
            // Меняем путь к файлу на нужную папку
            img.src = `images/${folder}/${fileName}`;
        });
    }

    // Проверяем сохраненную тему при загрузке
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    // Сразу устанавливаем правильные картинки
    updateImagesByTheme(currentTheme);

    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            newTheme = 'light';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            newTheme = 'dark';
        }
        
        localStorage.setItem('theme', newTheme);
        updateImagesByTheme(newTheme); // Обновляем картинки по клику
    });

    // --- 2. Language Toggle Logic (i18n) ---
    const langBtn = document.getElementById('langToggle');
    const headerDownloadBtn = document.getElementById('headerDownloadBtn');
    
    const translations = {
        en: {
            hero_line1_before: "You already know when you ",
            hero_line1_accent: "overate",
            hero_line1_after: ".",
            hero_line2: "You don't need math.",
            hero_subtitle:
                "ActiveTrend replaces calorie counting with a simple end-of-day check-in. Two taps. Honest trends. No obsessing.",
            email_placeholder: "Enter your email address",
            subscribe_btn: "Notify Me",
            download_btn: "Download",
            story_quote: "I quit every calorie tracker after two weeks.",
            story_subline: "Not willpower. Just burnout from logging every bite.",
            story_body:
                "I've been there too. That's exactly why I built ActiveTrend for myself — and then decided to share it.",
            story_sig_name: "Sergey",
            story_sig_suffix: ", creator & 49-day daily user",
            story_pain_1: "Logging every meal takes longer than eating it",
            story_pain_2: "Searching \"homemade pasta\" returns 400 database options",
            story_pain_3: "You forget what you ate in the morning by evening",
            story_pain_4: "You stop logging when you overeat — exactly when data matters most",
            story_pain_5: "Precision gives false confidence. Your estimate is always off anyway.",
            how_it_works_eyebrow: "How it works",
            how_it_works_title: "Three things. Every day. That's the whole app.",
            how_step_1_title: "Mark how you ate",
            how_step_1_desc:
                "Pick one of three states: Stuffed, Normal, or Deficit. That's it. Optionally add tags — Fast food, Sweet, Healthy food, whatever you actually ate — for more context later.",
            how_step_2_title: "Mark how you moved",
            how_step_2_desc:
                "Pick one: Lazy, Active, or Hyper. Again, tags are optional — Cardio, Strength, Flexibility, Sick, Chill — use them when you want to remember why.",
            how_step_3_title: "See what's actually going on",
            how_step_3_desc:
                "Do this for 7 days in a row — fill the streak — and unlock your AI Insight. A short, honest read of your week: what patterns are there, what to watch out for. You choose the tone: warm & supportive, or direct & a little sarcastic.",
            how_step_3_mock:
                "AI Insight: 5/7 deficit days — solid week. The other two entries share a suspicious overlap with Saturday night and your snack strategy.",
            features_title: "App Features",

            success_msg: "Welcome to the squad! We've sent a lightning bolt to your inbox.",
            
            // ОБНОВЛЕННЫЕ ТЕКСТЫ ДЛЯ ФИЧ (EN)
            feature_1_title: "Two taps. Done.",
            feature_1_desc:
                "Pick your food state - Stuffed, Normal, or Deficit. Pick your activity - Lazy, Active, or Hyper. Add tags if you feel like it. That's your whole log for the day.",
            feature_2_title: "See the pattern, not the noise",
            feature_2_desc:
                "Your food and activity trends over 7, 14, 21, or 28 days - in one view. No spreadsheets. No data overload. Just the honest picture of how your weeks actually look.",
            feature_3_title: "Weight without obsession",
            feature_3_desc:
                "Log your weight when you feel like it. Watch how it moves alongside your food and activity habits over time. BMI included, no calculator needed.",
            feature_4_title: "Streak → AI Insight",
            feature_4_desc:
                "Log every day for 7 days straight and unlock your AI Insight — a short read on what your week actually looked like and what to watch out for next.",
            feature_5_title: "Two AI personalities",
            feature_5_desc:
                "Choose how your AI talks to you. Warm & supportive if you need a nudge. Direct & sarcastic if you need a reality check. Switch anytime in settings.",
            feature_6_title: "Home screen widget",
            feature_6_desc:
                "Your streak and today's status live on your Android home screen. One tap opens the log. No excuses for forgetting.",

            more_features_title: "Want to see more?",
            more_features_desc: "Discover even more tools to crush your goals. Sign up to get the app as soon as it launches!",
            cta_button: "Join the Waitlist",

            consent_before: "We send your email to Brevo to store it on the waitlist and tell you when we launch. Nothing else. See the ",
            consent_after: ".",

            follow_me: "Follow my journey:",
            about_title:
                "I built this app because I quit every other one",
            about_desc_1:
                "MyFitnessPal. YAZIO. Lose It. Lifesum. I tried them all. Each time I'd last two, maybe three weeks — then quietly stop opening the app. Not because I didn't want to lose weight. Because logging every meal felt like a part-time job I never signed up for.",
            about_desc_2:
                "I'm a senior Android developer living in Buenos Aires. So instead of downloading another tracker, I built one with a single rule: if I skip a day of logging, the app failed — not me. 49 days later, I'm down -9.8 kg. I still open it every evening. That's never happened before.",
            about_desc_3:
                "This app is also a small tribute to Francesca de Lapa — my cat, who reminds me every day to be patient. She's in the app too. 🐱",

            nav_home: "Home",
            privacy_policy: "Privacy Policy",
            terms: "Terms of Service",
            last_updated: "Last updated",
            rights: "All rights reserved."
        },
        es: {
            hero_line1_before: "Ya sabes cuándo ",
            hero_line1_accent: "comiste de más",
            hero_line1_after: ".",
            hero_line2: "No necesitas matemáticas.",
            hero_subtitle:
                "ActiveTrend reemplaza el conteo de calorías por un registro simple al final del día. Dos toques. Tendencias honestas. Sin obsesionarte.",
            email_placeholder: "Ingresa tu correo electrónico",
            subscribe_btn: "Notifícame",
            download_btn: "Descargar",
            story_quote: "Dejé cada contador de calorías a las dos semanas.",
            story_subline: "No es fuerza de voluntad. Es el agotamiento de anotar cada bocado.",
            story_body:
                "Yo también estuve ahí. Por eso creé ActiveTrend para mí — y luego decidí compartirlo.",
            story_sig_name: "Sergey",
            story_sig_suffix: ", creador y usuario diario desde hace 49 días",
            story_pain_1: "Registrar cada comida lleva más tiempo que comerla",
            story_pain_2: "Si buscas \"pasta casera\", salen 400 opciones distintas en la base",
            story_pain_3: "A la tarde ya no recuerdas qué desayunaste por la mañana",
            story_pain_4: "Dejas de registrar cuando comes de más — justo cuando importan más los datos",
            story_pain_5: "La precisión da una confianza falsa. Tu estimación siempre se equivoca igual.",
            how_it_works_eyebrow: "Cómo funciona",
            how_it_works_title: "Tres cosas. Cada día. Esa es toda la app.",
            how_step_1_title: "Registra cómo comiste",
            how_step_1_desc:
                "Elige uno de tres estados: Lleno, Normal o Déficit. Eso es todo. Opcionalmente añade etiquetas — comida rápida, dulce, comida saludable, lo que hayas comido de verdad — para tener más contexto después.",
            how_step_2_title: "Registra cómo te moviste",
            how_step_2_desc:
                "Elige uno: Perezoso, Activo o Híper. Las etiquetas son opcionales — cardio, fuerza, flexibilidad, enfermo, relax — úsalas cuando quieras recordar por qué.",
            how_step_3_title: "Mira qué está pasando en serio",
            how_step_3_desc:
                "Hazlo 7 días seguidos — completa la racha — y desbloquea tu AI Insight. Una lectura corta y honesta de tu semana: qué patrones hay y qué conviene vigilar. Tú eliges el tono: cálido y alentador, o directo y con un poco de ironía.",
            how_step_3_mock:
                "AI Insight: 5/7 días en déficit — buena racha. Los otros dos comparten un sospechoso solapamiento con el sábado por la noche y tu estrategia de snacks.",
            features_title: "Características de la App",

            success_msg: "¡Bienvenido al equipo! Hemos enviado un rayo a tu bandeja de entrada.",
            
            // ОБНОВЛЕННЫЕ ТЕКСТЫ ДЛЯ ФИЧ (ES)
            feature_1_title: "Dos toques. Listo.",
            feature_1_desc:
                "Elige tu estado de comida — Lleno, Normal o Déficit. Elige tu actividad — Perezoso, Activo o Híper. Añade etiquetas si quieres. Eso es todo tu registro del día.",
            feature_2_title: "Ve el patrón, no el ruido",
            feature_2_desc:
                "Tus tendencias de comida y actividad en 7, 14, 21 o 28 días — en una sola vista. Sin hojas de cálculo. Sin saturación de datos. Solo la imagen honesta de cómo se ven tus semanas de verdad.",
            feature_3_title: "Peso sin obsesionarte",
            feature_3_desc:
                "Registra tu peso cuando quieras. Observa cómo evoluciona junto a tus hábitos de comida y actividad con el tiempo. IMC incluido, sin calculadora.",
            feature_4_title: "Racha → AI Insight",
            feature_4_desc:
                "Registra cada día durante 7 días seguidos y desbloquea tu AI Insight: una lectura breve sobre cómo fue tu semana en la realidad y qué conviene vigilar después.",
            feature_5_title: "Dos personalidades de IA",
            feature_5_desc:
                "Elige cómo te habla la IA. Cálida y de apoyo si necesitas un empujón. Directa e irónica si necesitas un toque de realidad. Cambia cuando quieras en ajustes.",
            feature_6_title: "Widget en la pantalla de inicio",
            feature_6_desc:
                "Tu racha y el estado de hoy en la pantalla de inicio de Android. Un toque abre el registro. Sin excusas por olvidar.",

            more_features_title: "¿Quieres ver más?",
            more_features_desc: "Descubre aún más herramientas para alcanzar tus metas. ¡Regístrate para obtener la app apenas se lance!",
            cta_button: "Unirse a la lista",

            consent_before: "Enviamos tu correo a Brevo para guardarlo en la lista de espera y avisarte cuando lancemos. Nada más. Consulta la ",
            consent_after: ".",

            follow_me: "Sigue mi progreso:",
            about_title:
                "Creé esta app porque dejé todas las demás",
            about_desc_1:
                "MyFitnessPal. YAZIO. Lose It. Lifesum. Las probé todas. Cada vez aguantaba dos, tal vez tres semanas — y después dejaba de abrir la app en silencio. No porque no quisiera adelgazar. Porque anotar cada comida parecía un trabajo a tiempo parcial al que jamás me anoté.",
            about_desc_2:
                "Soy desarrollador senior de Android y vivo en Buenos Aires. En vez de bajar otro rastreador, armé uno con una sola regla: si me saltaba un día de registro, fallaba la app — yo no. Pasaron 49 días y llevo −9,8 kg. Todavía la abro todas las noches. Eso antes no me pasaba.",
            about_desc_3:
                "Esta app es también un pequeño tributo a Francesca de Lapa — mi gata, que cada día me recuerda tener paciencia. También está en la app. 🐱",

            nav_home: "Inicio",
            privacy_policy: "Política de Privacidad",
            terms: "Términos de Servicio",
            last_updated: "Última actualización",
            rights: "Todos los derechos reservados."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    langBtn.textContent = currentLang === 'en' ? 'ES' : 'EN';
    applyTranslations(currentLang);

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('lang', currentLang);
        langBtn.textContent = currentLang === 'en' ? 'ES' : 'EN';
        applyTranslations(currentLang);
    });

    // DEV: кнопка Download в шапке — пока заглушка: клик никуда не ведёт и ничего не открывает.
    //      Подключи ссылку на стор, якорь к форме или модалку, когда будет готово.
    if (headerDownloadBtn) {
        headerDownloadBtn.addEventListener('click', () => {
            /* intentionally empty */
        });
    }

    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        if (headerDownloadBtn && translations[lang].download_btn) {
            headerDownloadBtn.setAttribute('aria-label', translations[lang].download_btn);
        }

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = translations[lang][key];
        });

        // Длинные тексты (юридические документы) лежат в HTML отдельными
        // блоками на каждый язык — так они видны краулерам и без JS.
        document.querySelectorAll('.lang-block').forEach(block => {
            block.hidden = block.getAttribute('data-lang') !== lang;
        });

        document.documentElement.lang = lang;
    }

    // --- 3. Subscribe Form Logic (Brevo Integration) ---
    
    // Твой уникальный URL из формы Brevo
    const brevoUrl = "https://508da28e.sibforms.com/serve/MUIFANiLHIqlDH-CqhrFB0-iaAdC9jCOUyeP60razb8kl8L1tjSo4PSdbcn_z3WzMGRJjofqSI45JyTfuDpcQFYgoArvgLg6YW7yKGmR3dFc_4z2qBxYp_WL5wxycBwjdWEA1VYZTaB1GI7EsPVA8tIHgy5DegAnoNpaFJFGSiCYPvonixqtvWqY_yK2r3o_Lf1zmQdph9QraL_H4A==";

    async function handleSubscription(e, inputId, buttonObj) {
        e.preventDefault(); 
        const emailInput = document.getElementById(inputId);
        const email = emailInput.value;
        const originalBtnText = buttonObj.textContent;

        // Показываем, что идет загрузка
        buttonObj.textContent = currentLang === 'en' ? 'Sending...' : 'Enviando...';
        buttonObj.disabled = true;

        try {
            // Формируем данные в формате, который понимает Brevo
            const formData = new FormData();
            formData.append('EMAIL', email);
            formData.append('email_address_check', '');
            formData.append('locale', 'en');

            // Отправляем запрос
            await fetch(brevoUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Это важно для обхода ограничений браузера при фоновой отправке
            });

            // Так как 'no-cors' не дает прочитать точный ответ сервера, мы предполагаем успех
            const successMessage = currentLang === 'en' 
                ? `Thank you! We added ${email} to our waitlist.`
                : `¡Gracias! Hemos añadido ${email} a la lista.`;
                
            alert(successMessage);
            e.target.reset(); // Очищаем форму

        } catch (error) {
            console.error("Subscription error:", error);
            const errorMessage = currentLang === 'en' 
                ? 'Oops! Something went wrong. Please try again later.'
                : '¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.';
            alert(errorMessage);
        } finally {
            // Возвращаем кнопку в исходное состояние
            buttonObj.textContent = originalBtnText;
            buttonObj.disabled = false;
        }
    }

    // Слушаем верхнюю форму
    const subscribeFormTop = document.getElementById('subscribeForm');
    if (subscribeFormTop) {
        subscribeFormTop.addEventListener('submit', (e) => {
            const btn = subscribeFormTop.querySelector('button');
            handleSubscription(e, 'emailInput', btn);
        });
    }

    // Слушаем нижнюю форму
    const subscribeFormBottom = document.getElementById('subscribeFormBottom');
    if (subscribeFormBottom) {
        subscribeFormBottom.addEventListener('submit', (e) => {
            const btn = subscribeFormBottom.querySelector('button');
            handleSubscription(e, 'emailInputBottom', btn);
        });
    }

});