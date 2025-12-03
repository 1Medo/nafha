import Button from "../../atoms/Button";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

export default function Actions() {
    return (
        <div className="actionButtons flex">
            
            <Button
                variant="tertiary"
                iconOnly={
                        <CiUser className="w-[24px] h-[24px] desktop:w-[28px] desktop:h-[28px] transition-all stroke-[0.4]"/>
                }
            />

            <Button
                variant="tertiary"
                iconOnly={
                        <CiHeart className="w-[24px] h-[24px] desktop:w-[28px] desktop:h-[28px] transition-all stroke-[0.4]"/>
                }
            />

            <Button
                variant="tertiary"
                iconOnly={
                        <CiShoppingCart className="w-[24px] h-[24px] desktop:w-[28px] desktop:h-[28px] transition-all stroke-[0.4]" />
                }
            />

        </div>
    );
}
