import { AriaAttributes, AriaRole } from "react";

interface TypographyPropsType {
    tag: keyof JSX.IntrinsicElements,
 text: string,
 className? : string,
 style?: React.CSSProperties,
 role?: string
 ariaLabel?: string,
 ariaLabelledBy?: string
}

export default TypographyPropsType;