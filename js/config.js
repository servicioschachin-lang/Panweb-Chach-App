/* Configuración de la aplicación */
export const CONFIG = {
  CREAWEB_URL: 'https://web.chach.app',
  WHATSAPP_SUPPORT: '50232533214', // Cambiar por el número de WhatsApp de soporte
  DOMINIO_DEFAULT:'empresagt.com',
  DOMINIO:['empresagt.com','chach.app','chachin.dev'],
  LIMITE_HTML: 900000,
  STORE_KEY: 'creaweb_estado_v1',
  RESERVADOS: ['www', 'admin', 'mail', 'correo', 'ftp', 'api', 'app', 'panel', 'creaweb', 'soporte', 'ayuda', 'test'],
  TEMPLATES: [
    { nombre: 'Plantilla 01', url: 'plantillas/01_glassmorphism_landing.html' },
    { nombre: 'Plantilla 02', url: 'plantillas/04_neumorphism_multipage.html' },
    { nombre: 'Plantilla 03', url: 'plantillas/09_minimalism_landing.html' },
    { nombre: 'Plantilla 04', url: 'plantillas/08_brutalism_multipage.html' },
    { nombre: 'Plantilla 05', url: 'plantillas/06_claymorphism_multipage.html' },
    { nombre: 'Plantilla 06', url: 'plantillas/02_glassmorphism_multipage.html' },
    { nombre: 'Plantilla 07', url: 'plantillas/03_neumorphism_landing.html' },
    { nombre: 'Plantilla 08', url: 'plantillas/10_minimalism_multipage.html' },
    { nombre: 'Plantilla 09', url: 'plantillas/07_brutalism_landing.html' },
    { nombre: 'Plantilla 10', url: 'plantillas/05_claymorphism_landing.html' }, 
  ]
};

export const SOCIAL_PATTERNS = /(facebook\.com|fb\.com|instagram\.com|tiktok\.com|wa\.me|whatsapp\.com|twitter\.com|x\.com|youtube\.com|youtu\.be|linkedin\.com|t\.me|telegram)/i;

export const SOCIAL_NAMES = [
  [/facebook|fb\.com/i, 'Facebook'],
  [/instagram/i, 'Instagram'],
  [/tiktok/i, 'TikTok'],
  [/wa\.me|whatsapp/i, 'WhatsApp'],
  [/twitter|x\.com/i, 'X / Twitter'],
  [/youtube|youtu\.be/i, 'YouTube'],
  [/linkedin/i, 'LinkedIn'],
  [/t\.me|telegram/i, 'Telegram']
];
