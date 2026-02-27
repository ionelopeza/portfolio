// ================================================
//  DATA.JS — Datos do CV de Ione López Abalde
// ================================================

const cvData = {

    personal: {
        nombre:    "Ione López Abalde",
        titulo:    "Xornalista",
        ubicacion: "Vigo, Pontevedra",
        email:     "ionelopeza@gmail.com",
        telefono:  "722 61 25 61",
        sobre:     "Apaixonada pola música, a cultura e a gastronomía, interésome por todo aquilo que reflicte e transforma a sociedade a través da comunicación. Gústame estar ao día das tendencias culturais e sociais, o que me axuda a entender mellor o público e as súas motivacións. A curto ou medio prazo, gustaríame desenvolver a miña carreira no ámbito do márketing ou nun medio de comunicación vinculado coas miñas afeccións, onde poida unir creatividade, análise e sensibilidade social.",
        enlaces: [
            { tipo: "Email",    url: "mailto:ionelopeza@gmail.com",   icono: "📧" },
            { tipo: "Teléfono", url: "tel:+34722612561",               icono: "📞" },
            { tipo: "GitHub",   url: "https://github.com/ionelopeza", icono: "💻" }
        ]
    },

    experiencia: [
        {
            empresa:     "En búsqueda activa",
            puesto:      "Xornalista / Comunicadora",
            tipo:        "",
            fechaInicio: "2026",
            fechaFin:    "Actualidade",
            descripcion: "Dispoñibilidade inmediata e flexibilidade horaria. Carné de conducir. Interese en medios de comunicación, márketing dixital e comunicación cultural."
        }
    ],

    educacion: [
        {
            institucion: "Universidade de Santiago de Compostela",
            titulo:      "Grao en Xornalismo",
            fecha:       "2021 – 2026",
            descripcion: ""
        },
        {
            institucion: "IES Carlos Casares",
            titulo:      "Bacharelato",
            fecha:       "2019 – 2021",
            descripcion: ""
        }
    ],

    habilidades: [
        { categoria: "Competencias clave", skills: [
            "Traballo en equipo",
            "Puntualidade",
            "Resolución de problemas",
            "Dispoñibilidade inmediata",
            "Flexibilidade horaria"
        ]},
        { categoria: "Software e dixital", skills: [
            "Microsoft Office (Word, Excel)",
            "Google Drive",
            "Xestión de redes sociais",
            "Navegación avanzada por internet"
        ]},
        { categoria: "Temas de interese", skills: [
            "Música",
            "Cultura",
            "Gastronomía",
            "Márketing dixital",
            "Comunicación social",
            "Xornalismo automatizado"
        ]}
    ],

    idiomas: [
        { idioma: "Galego",   nivel: "C1 — CELGA 4",    porcentaje: 90  },
        { idioma: "Castelán", nivel: "Nativa",           porcentaje: 100 },
        { idioma: "Inglés",   nivel: "B1 — Intermedio",  porcentaje: 50  }
    ],

    certificaciones: [
        {
            nombre: "CELGA 4 — Competencia plena en lingua galega",
            emisor: "Xunta de Galicia",
            fecha:  "2021",
            url:    ""
        }
    ]
};
