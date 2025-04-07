"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import {
  Breadcrumb
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

import {
  SidebarTrigger,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "khadir Hasan",
    email: "khaidir@usahakita.id",
    avatar: "/avatar/avatar.png",
  },
  teams: [
    {
      name: "Usahakita",
      logo: GalleryVerticalEnd,
      plan: "Micro",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Order",
      url: "#",
      icon: Bot,
    },
    {
      title: "Produk",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Daftar",
          url: "#",
        },
        {
          title: "Kategori",
          url: "#",
        },
        {
          title: "Transfer",
          url: "#",
        },
      ],
    },
    {
      title: "Asset",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Daftar",
          url: "#",
        },
        {
          title: "Kategori",
          url: "#",
        },
        {
          title: "Depresiasi",
          url: "#",
        },
      ],
    },
    {
      title: "Pelanggan",
      url: "#",
      icon: Bot
    },
    {
      title: "Marketing",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Diskon",
          url: "#",
        },
        {
          title: "Promosi",
          url: "#",
        },
        {
          title: "Royalti",
          url: "#",
        }
      ]
    },
    {
      title: "Keuangan",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Transkasi",
          url: "#",
        },
        {
          title: "Jurnal",
          url: "#",
        },
        {
          title: "Buku Besar",
          url: "#",
        },
        {
          title: "Neraca",
          url: "#",
        },
        {
          title: "Neraca Saldo",
          url: "#",
        },
        {
          title: "Laba Rugi",
          url: "#",
        },
        {
          title: "Chart of Account",
          url: "#",
        },
      ],
    },
    {
      title: "Inventaris",
      url: "",
      icon: BookOpen,
      items: [
        {
          title: "Penerimaan",
          url: "#",
        },
        {
          title: "Pengeluaran",
          url: "#",
        },
        {
          title: "Transfer",
          url: "#",
        },
        {
          title: "Stok Opname",
          url: "#",
        },
        {
          title: "Stok Mutasi",
          url: "#",
        },
      ],
    },
    {
      title: "Warehouse",
      url: "",
      icon: BookOpen,
      items: [
        {
          title: "Penerimaan",
          url: "#",
        },
        {
          title: "Pengeluaran",
          url: "#",
        },
        {
          title: "Transfer",
          url: "#",
        },
      ],
    },
    {
      title: "Laporan",
      url: "#",
      icon: PieChart,  // Changed from SquareTerminal to PieChart
      items: [
        {
          title: "Penjualan",
          url: "/reports/sales",
        },
        {
          title: "Produk",
          url: "/reports/products",
        },
        {
          title: "Inventaris",
          url: "/reports/inventory",
        },
        {
          title: "F&B",
          url: "/reports/fnb",
        },
        {
          title: "Transaksi",
          url: "/reports/transactions",
        },
        {
          title: "Pembayaran",
          url: "/reports/payments",
        },
        {
          title: "Setoran",
          url: "/reports/deposits",
        },
        {
          title: "Pajak",
          url: "/reports/taxes",
        },
        {
          title: "Transfer",
          url: "/reports/transfers",
        },
        {
          title: "Pengguna",
          url: "/reports/users",
        },
        {
          title: "Log Aktivitas",
          url: "/reports/activity-log",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Outlet",
          url: "#",
        },
        {
          title: "Meja",
          url: "#",
        },
        {
          title: "Pembayaran",
          url: "#",
        },
        {
          title: "Toko",
          url: "#",
        },
        {
          title: "Pengguna",
          url: "#",
        },
        {
          title: "Shift Kerja",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Notifikasi",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

type Crumb = {
  label: string
  href?: string
}

interface HeaderProps extends React.ComponentProps<typeof Sidebar> {
  breadcrumbItems: Crumb[]
}
export function Header({ breadcrumbItems, ...props }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <DynamicBreadcrumb items={breadcrumbItems} />
        </Breadcrumb>
      </div>
    </header>
)
}