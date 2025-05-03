document.addEventListener("DOMContentLoaded", () => {
    if (!document.cookie.includes("user_visit=true")) {
      document.cookie = "user_visit=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
      console.log("Primera visita: cookie de rastreo creada");
    }
  
    const langButtons = document.querySelectorAll("#lang-es, #lang-en, #lang-de");
  
    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.id.replace("lang-", "");
        document.cookie = `lang=${lang}; max-age=${60 * 60 * 24 * 365}; path=/`;
        console.log(`Idioma guardado en cookie: ${lang}`);
      });
    });
  
    const langCookie = document.cookie.split("; ").find((c) => c.startsWith("lang="));
    if (langCookie) {
      const lang = langCookie.split("=")[1];
      console.log(`Idioma detectado: ${lang}`);
    }
  });
  