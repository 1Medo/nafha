import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { HiMiniSlash } from "react-icons/hi2";
import { cn } from "@/lib/utils";

export default function CustomBreadCrumb({
  parentName,
  parentHref,
  pageName,
}: {
  parentName?: string;
  parentHref?: string;
  pageName: string;
}) {
  return (

    <Breadcrumb className={cn("container pb-8 pt-10")}>
      <BreadcrumbList>

        {/* الرئيسية */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">الرئيسية</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {parentName && parentHref && (
          <>
            <BreadcrumbSeparator>
              <HiMiniSlash />
            </BreadcrumbSeparator>

            {/* الأب */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={parentHref}>{parentName}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        <BreadcrumbSeparator>
          <HiMiniSlash />
        </BreadcrumbSeparator>

        {/* الصفحة الحالية */}
        <BreadcrumbItem>
          <BreadcrumbPage>{pageName}</BreadcrumbPage>
        </BreadcrumbItem>

      </BreadcrumbList>
    </Breadcrumb>
  );
}
