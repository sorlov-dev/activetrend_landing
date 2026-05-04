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
            
            about_title: "Why I built ActiveTrend",
            about_desc_1: "Hi! I'm the creator of this app. Just like many of you, I'm on my own personal journey to lose weight and improve my health.",
            about_desc_2: "I built ActiveTrend for myself because I couldn't find a tracker that fit my needs perfectly. I'd be absolutely thrilled if you join me so we can crush our health goals together!",
            follow_me: "Follow my journey:",

            privacy_policy: "Privacy Policy",
            terms: "Terms of Service",
            data_collection: "Data Collection Policy",
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
            
            about_title: "Por qué creé ActiveTrend",
            about_desc_1: "¡Hola! Soy el creador de esta app. Al igual que muchos de ustedes, estoy en mi propio viaje personal para perder peso y mejorar mi salud.",
            about_desc_2: "Construí ActiveTrend para mí porque no encontraba un rastreador que se adaptara perfectamente a mis necesidades. ¡Me encantaría que te unas a mí para que podamos alcanzar nuestras metas de salud juntos!",
            follow_me: "Sigue mi progreso:",
            
            privacy_policy: "Política de Privacidad",
            terms: "Términos de Servicio",
            data_collection: "Política de Recopilación de Datos",
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
            element.textContent = translations[lang][key];
        });

        if (headerDownloadBtn && translations[lang].download_btn) {
            headerDownloadBtn.setAttribute('aria-label', translations[lang].download_btn);
        }
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = translations[lang][key];
        });
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

    // --- 4. Legal Modals Logic & Texts ---
    
    // Юридические тексты на двух языках (GDPR & CCPA Compliant)
    // Юридические тексты (GDPR & CCPA Compliant, минимизация персональных данных)
    const legalDocs = {
        en: {
            privacy_policy: {
                title: "Privacy Policy",
                content: `
                    <p><strong>Last Updated: February 2026</strong></p>
                    <p>Welcome to ActiveTrend. ActiveTrend is a product developed and operated by Sergei Orlov (independent entrepreneur / monotributista based in Argentina). We respect your privacy and are committed to protecting your personal data.</p>
                    <h4>1. Data Controller</h4>
                    <p>The data controller responsible for your personal information is Sergei Orlov.<br>Location: Buenos Aires, Argentina.<br>Contact: contact@orlovs.dev</p>
                    <h4>2. Information We Collect</h4>
                    <p>Currently, we collect your email address when you voluntarily subscribe to our waitlist. We also collect basic, non-identifying technical data (such as browser type) to ensure our website functions securely.</p>
                    <h4>3. How We Use Your Data</h4>
                    <p>Your email address is used strictly to notify you about the launch of the ActiveTrend app. We rely on your explicit consent (GDPR Article 6(1)(a)) for this processing.</p>
                    <h4>4. Data Sharing & Third Parties</h4>
                    <p><strong>We do not sell your personal data.</strong> (Compliant with CCPA). We only share data with trusted third-party service providers (like email delivery platforms) who adhere to strict data protection standards.</p>
                    <h4>5. Your Rights</h4>
                    <p>You have the right to request access to, correction, or erasure of your personal data ("Right to be Forgotten"). You can opt-out of future communications at any time by contacting us at contact@orlovs.dev.</p>
                    <h4>6. Future App Usage</h4>
                    <p>Once the ActiveTrend app launches, it may process sensitive health data. A comprehensive, app-specific Privacy Policy will be provided before you use the app.</p>
                `
            },
            terms: {
                title: "Terms of Service",
                content: `
                    <p><strong>Last Updated: February 2026</strong></p>
                    <h4>1. Acceptance of Terms</h4>
                    <p>By accessing the ActiveTrend website and submitting your email to our waitlist, you agree to be bound by these Terms of Service. The ActiveTrend product and website are operated by Sergei Orlov.</p>
                    <h4>2. Use of the Website</h4>
                    <p>You agree to use this website only for lawful purposes. You must not use the website in any way that causes damage to the website or impairment of its availability.</p>
                    <h4>3. Intellectual Property</h4>
                    <p>All content on this website (text, graphics, logos, app mockups) is the property of Sergei Orlov and is protected by international copyright laws.</p>
                    <h4>4. Disclaimer & Liability</h4>
                    <p>This website is provided "as is" without any warranties. Sergei Orlov will not be liable for any indirect or consequential loss in connection with the use of this website.</p>
                    <h4>5. Contact</h4>
                    <p>For any legal inquiries, please contact: contact@orlovs.dev.</p>
                `
            },
            data_collection: {
                title: "Data Collection Policy",
                content: `
                    <p><strong>Last Updated: February 2026</strong></p>
                    <h4>1. Technical Data</h4>
                    <p>When you visit the ActiveTrend website, we automatically collect certain technical information (like browser type and OS) to improve the user experience.</p>
                    <h4>2. Cookies</h4>
                    <p>We may use basic cookies to enhance site navigation. You can instruct your browser to refuse all cookies.</p>
                    <h4>3. Future App Analytics</h4>
                    <p>Upon the release of the ActiveTrend mobile application, detailed and transparent tracking options will be provided within the app settings, allowing you full control over your local and synced data.</p>
                    <h4>4. Contact</h4>
                    <p>Data Controller: Sergei Orlov (Buenos Aires, Argentina). Email: contact@orlovs.dev</p>
                `
            }
        },
        es: {
            privacy_policy: {
                title: "Política de Privacidad",
                content: `
                    <p><strong>Última actualización: Febrero 2026</strong></p>
                    <p>Bienvenido a ActiveTrend. ActiveTrend es un producto desarrollado y administrado por Sergei Orlov (emprendedor independiente / monotributista con sede en Argentina). Respetamos su privacidad y protegemos sus datos.</p>
                    <h4>1. Responsable de los Datos</h4>
                    <p>El responsable de su información personal es Sergei Orlov.<br>Ubicación: Buenos Aires, Argentina.<br>Contacto: contact@orlovs.dev</p>
                    <h4>2. Información que recopilamos</h4>
                    <p>Recopilamos su correo electrónico cuando se suscribe voluntariamente a nuestra lista. También recopilamos datos técnicos básicos no identificables (como el tipo de navegador).</p>
                    <h4>3. Uso de los datos</h4>
                    <p>Su correo se usa estrictamente para notificarle sobre el lanzamiento de ActiveTrend. Nos basamos en su consentimiento explícito (GDPR Art. 6(1)(a)).</p>
                    <h4>4. Intercambio de datos</h4>
                    <p><strong>No vendemos sus datos personales.</strong> (Cumple con CCPA). Solo compartimos datos con proveedores confiables (como plataformas de envío de correos).</p>
                    <h4>5. Sus derechos</h4>
                    <p>Tiene derecho a solicitar acceso, corrección o borrado de sus datos ("Derecho al olvido"). Puede darse de baja en cualquier momento contactando a contact@orlovs.dev.</p>
                    <h4>6. Uso futuro de la app</h4>
                    <p>Una vez lanzada, la app puede procesar datos de salud. Se proporcionará una política completa antes de su uso.</p>
                `
            },
            terms: {
                title: "Términos de Servicio",
                content: `
                    <p><strong>Última actualización: Febrero 2026</strong></p>
                    <h4>1. Aceptación de los Términos</h4>
                    <p>Al acceder a ActiveTrend y enviar su correo, acepta estos Términos. El producto ActiveTrend es operado por Sergei Orlov.</p>
                    <h4>2. Uso del sitio web</h4>
                    <p>Acepta utilizar este sitio web solo para fines legales y sin causar daños a su disponibilidad.</p>
                    <h4>3. Propiedad Intelectual</h4>
                    <p>Todo el contenido del sitio es propiedad de Sergei Orlov y está protegido por leyes de derechos de autor.</p>
                    <h4>4. Exención de responsabilidad</h4>
                    <p>Este sitio se proporciona "tal cual". Sergei Orlov no será responsable por ninguna pérdida indirecta relacionada con el uso de este sitio.</p>
                    <h4>5. Contacto</h4>
                    <p>Para consultas legales: contact@orlovs.dev.</p>
                `
            },
            data_collection: {
                title: "Política de Recopilación de Datos",
                content: `
                    <p><strong>Última actualización: Febrero 2026</strong></p>
                    <h4>1. Datos técnicos</h4>
                    <p>Al visitar ActiveTrend, recopilamos automáticamente información técnica (como el navegador) para mejorar la experiencia.</p>
                    <h4>2. Cookies</h4>
                    <p>Podemos usar cookies para mejorar la navegación. Puede configurar su navegador para rechazarlas.</p>
                    <h4>3. Análisis futuros</h4>
                    <p>Tras el lanzamiento de la app ActiveTrend, se proporcionarán opciones de seguimiento detalladas dentro de la configuración de la app.</p>
                    <h4>4. Contacto</h4>
                    <p>Responsable: Sergei Orlov (Buenos Aires, Argentina). Email: contact@orlovs.dev</p>
                `
            }
        }
    };

    // Логика работы модалки
    const modal = document.getElementById('legalModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');

    // Находим все ссылки в подвале, у которых есть атрибут data-i18n
    const legalLinks = document.querySelectorAll('.policy-links a[data-i18n]');

    legalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Отменяем переход по ссылке
            
            // Получаем ключ (privacy_policy, terms, data_collection)
            const docKey = link.getAttribute('data-i18n'); 
            
            // Достаем нужный текст на текущем языке
            const currentDoc = legalDocs[currentLang][docKey];
            
            // Вставляем текст
            modalTitle.textContent = currentDoc.title;
            modalBody.innerHTML = currentDoc.content;
            
            // Показываем модалку
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Запрещаем скроллить фон
        });
    });

    // Закрытие по крестику
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Возвращаем скролл
    });

    // Закрытие по клику мимо окна (на темный фон)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});