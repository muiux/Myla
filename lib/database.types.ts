export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      client: {
        Row: {
          created_at: string | null
          id: string
          lawyer_id: string | null
          lead_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          lawyer_id?: string | null
          lead_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          lawyer_id?: string | null
          lead_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_lawyer_id_fkey"
            columns: ["lawyer_id"]
            referencedRelation: "lawyer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_lead_id_fkey"
            columns: ["lead_id"]
            referencedRelation: "lead"
            referencedColumns: ["id"]
          }
        ]
      }
      lawyer: {
        Row: {
          created_at: string | null
          email: string | null
          firstname: string | null
          id: string
          lastname: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          firstname?: string | null
          id?: string
          lastname?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          firstname?: string | null
          id?: string
          lastname?: string | null
        }
        Relationships: []
      }
      lead: {
        Row: {
          action: string | null
          area_of_law: string | null
          assistant_id: string | null
          created_at: string | null
          deadline: string | null
          email: string | null
          firstname: string | null
          id: string
          intake_form: string | null
          lastname: string | null
          notes: string | null
          paid_at: string | null
          phone: string | null
          ref_no: string | null
        }
        Insert: {
          action?: string | null
          area_of_law?: string | null
          assistant_id?: string | null
          created_at?: string | null
          deadline?: string | null
          email?: string | null
          firstname?: string | null
          id?: string
          intake_form?: string | null
          lastname?: string | null
          notes?: string | null
          paid_at?: string | null
          phone?: string | null
          ref_no?: string | null
        }
        Update: {
          action?: string | null
          area_of_law?: string | null
          assistant_id?: string | null
          created_at?: string | null
          deadline?: string | null
          email?: string | null
          firstname?: string | null
          id?: string
          intake_form?: string | null
          lastname?: string | null
          notes?: string | null
          paid_at?: string | null
          phone?: string | null
          ref_no?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_assistant_id_fkey"
            columns: ["assistant_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
