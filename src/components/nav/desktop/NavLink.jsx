import "./NavLink.scss";
import React from 'react';
import MenuItem from "/src/components/generic/MenuItem.jsx";
import { useUtils } from "/src/helpers/utils.js";
import SensitiveButton from "/src/components/generic/SensitiveButton.jsx";
import useSound from 'use-sound';
import soundURL from '/sounds/smash.mp3'; // Adjust the import path to your sound file

function NavLink({ shrink, label, icon, size, className, rounded, selected, disabled, onClick, tooltip }) {
    const utils = useUtils();

    // Initialize the sound
    const [play] = useSound(soundURL, { volume: 0.5 });

    // Handle the button click
    const handleClick = () => {
        if (onClick) {
            onClick(); // Execute the passed onClick function
        }
        play(); // Play the sound
    };

    return (
        <SensitiveButton 
            className={`nav-link ${utils.strIf(rounded, `nav-link-rounded`)}`}
            disabled={disabled}
            onClick={handleClick} // Update to use the new handleClick function
        >
            <MenuItem 
                shrink={shrink}
                label={label}
                icon={icon}
                hoverAnimation={true}
                size={size}
                tooltip={tooltip}
                selected={selected}
                className={className}
            />
        </SensitiveButton>
    );
}

export default NavLink;