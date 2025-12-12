// Deal status types based on ProfitOps logic
export type DealStatus = 'red' | 'green' | 'gray'

// Deal interface matching current ProfitOps data structure
export interface Deal {
  id: string
  title: string
  company: string
  contact: string
  value_imr: number
  value_vtc: number
  expected_close_date: string
  stage_id: number
  stage_name: string
  next_activity?: string
  next_activity_date?: string
  status: DealStatus
  cierra_en_7_dias: boolean
  cierra_en_14_dias: boolean
}

// Dashboard metrics interface
export interface DashboardMetrics {
  pipeline_generado_imr: number
  deals_abiertos: number
  cierres_esta_semana: number
  objetivo_imr: number
  ganado_imr_mes: number
  mes_objetivo: string
  deals_rojo: number
  deals_verde: number
  deals_gris: number
}

// Complete dashboard data interface
export interface DashboardData {
  fecha_analisis: string
  embudo: string
  metricas: DashboardMetrics
  accion_inmediata: Deal[]
  proximos_cierres: Deal[]
  total_deals_con_alertas: number
}

// Chat message types
export interface ChatMessage {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
  files?: File[]
}

// File upload types
export type AllowedFileType = '.txt' | '.docx' | '.pdf' | '.vtt' | 'image/*'

export interface FileUpload {
  file: File
  type: AllowedFileType
  content?: string
}
