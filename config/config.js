export const BACKEND_URL = import.meta.env.ENVIRONMENT === "DEVELOPMENT"?"http://localhost:3000/":import.meta.env.VITE_BASE_URL
export const FRONTEND_URL = ""