// app/dashboard/layout.tsx
import AdminLayout from "@/components/layout/admin-layout"
import type { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>
}
