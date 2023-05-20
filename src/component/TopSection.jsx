import React from 'react';
import { Button } from "@nextui-org/react";


export const TopSection = () => {
    return (
        <div className='top-section'>
            <div className="top-bundle">
                <div className='top-text'>
                    <h1>Crafting the digital frontier with pixel-perfect <strong>precision</strong> </h1>
                    <q>Designing digital experiences that blend creativity and functionality, one line of code at a time.</q>
                    <Button color="gradient" auto>
                        Know Me
                    </Button>
                </div>
                <div className='photobackground'>
                    <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="HEllo" />
                </div>

            </div>

        </div>
    )
}
