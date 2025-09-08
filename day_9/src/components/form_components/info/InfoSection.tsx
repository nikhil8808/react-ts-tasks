import React from 'react'
import Input from '../input/Input';
import './info_section.css'


type input = {
    id: string;
    name: string;
    label: string;
    value: string;
    handleChange: () => void;
    disabled: boolean;
    type: string;

}

type InfoSectionProps = {
    heading: string;
    section_data: input[]
}
const InfoSection = ({ heading, section_data }: InfoSectionProps) => {
    return (
        <section className='info-section'>
            <div className='heading-container'>
                <h5 className='heading'>{heading}</h5>
            </div>
            <div>
                {section_data?.map((input: input) => {
                    return <Input
                        id={input?.id}
                        name={input?.name}
                        value={input?.value}
                        label={input?.label}
                        disabled={input?.disabled}
                        handleChange={() => { }}
                        type={input?.type}

                    />

                })}

            </div>

        </section>
    )
}

export default InfoSection