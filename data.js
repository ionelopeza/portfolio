// ================================================
//  DATA.JS — Datos del CV de Ione López Abalde
//  Actualiza este archivo con tu información real
// ================================================

const cvData = {

    personal: {
        nombre: "Ione López Abalde",
        titulo: "Periodista Digital · Xornalismo Automatizado",
        ubicacion: "Galicia, España",
        email: "tu-email@ejemplo.com",
        telefono: "+34 6XX XXX XXX",
        enlaces: [
            { tipo: "Email",    url: "mailto:tu-email@ejemplo.com",       icono: "📧" },
            { tipo: "LinkedIn", url: "https://linkedin.com/in/tu-perfil", icono: "💼" },
            { tipo: "GitHub",   url: "https://github.com/ionelopeza",    icono: "💻" }
        ]
    },

    experiencia: [
        {
            empresa:     "Empresa / Medio 1",
            puesto:      "Puesto que desempeñaste",
            tipo:        "Empresa",
            fechaInicio: "Mes Año",
            fechaFin:    "Actualidad",
            descripcion: "Descripción de tus responsabilidades y logros principales."
        },
        {
            empresa:     "Empresa / Medio 2",
            puesto:      "Otro puesto",
            tipo:        "Freelance",
            fechaInicio: "Mes Año",
            fechaFin:    "Mes Año",
            descripcion: "Descripción de tus responsabilidades y logros principales."
        }
    ],

    educacion: [
        {
            institucion: "Universidad / Centro",
            titulo:      "Nombre del Grado / Máster",
            fecha:       "Año inicio – Año fin",
            descripcion: "Especialización, mención o detalle relevante."
        },
        {
            institucion: "Universidad / Centro",
            titulo:      "Otro Título / Diploma",
            fecha:       "Año inicio – Año fin",
            descripcion: ""
        }
    ],

    habilidades: [
        { categoria: "Periodismo y Comunicación", skills: [
            "Redacción periodística", "Edición de contenidos", "SEO editorial",
            "Social media", "Content marketing", "Community management"
        ]},
        { categoria: "Herramientas digitales", skills: [
            "WordPress", "Adobe Premiere", "Canva", "Google Analytics",
            "Hootsuite", "Mailchimp"
        ]},
        { categoria: "Programación y datos", skills: [
            "HTML / CSS", "JavaScript", "Python (básico)",
            "Xornalismo de datos", "Visualización de datos"
        ]}
    ],

    idiomas: [
        { idioma: "Galego",  nivel: "Nativo", porcentaje: 100 },
        { idioma: "Español", nivel: "Nativo", porcentaje: 100 },
        { idioma: "Inglés",  nivel: "B2",     porcentaje: 65  }
    ],

    certificaciones: [
        {
            nombre: "Nombre de la certificación",
            emisor: "Institución o plataforma",
            fecha:  "Año",
            url:    ""
        },
        {
            nombre: "Otra certificación",
            emisor: "Institución",
            fecha:  "Año",
            url:    ""
        }
    ]
};
