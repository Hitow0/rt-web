import React from 'react';

interface UserProps {
    pseudo : string,
}

const PlayerHead : React.FC<UserProps> = ({pseudo}) => {
    return (
        <img className={"playerHead"} src={"https://mc-heads.net/avatar/"+pseudo} alt={pseudo}/>
    );
};

export default PlayerHead;