// components/ui/dynamic-breadcrumb.tsx
"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Crumb = {
  label: string
  href?: string
}

interface DynamicBreadcrumbProps {
  items: Crumb[]
}

export function DynamicBreadcrumb({ items }: DynamicBreadcrumbProps) {
  const lastIndex = items.length - 1

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <BreadcrumbItem className={index !== lastIndex ? "hidden md:block" : ""}>
              {index !== lastIndex && item.href ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index !== lastIndex && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
