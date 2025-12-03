
import NavLinks from "./NavLinks"

export default function DesktopNav() {
    return (
        <div className="text-h5 col-span-3 w-[460px] justify-between flex p-4">
            <ul className="flex gap-6">
                <NavLinks />
            </ul>
        </div>
    )
}