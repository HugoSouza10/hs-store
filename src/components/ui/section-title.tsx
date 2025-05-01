'use client'
import { ComponentProps } from "react";

export const SectionTitle = ({ children, ...props }: ComponentProps<'p'>) => {
    return <p className='mt-7 font-bold uppercase' {...props}>{children}</p>
}