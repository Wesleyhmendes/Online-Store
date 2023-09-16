import React, { useState } from 'react';

type RemoveButtonProps = {
  itemId: string;
  onRemove: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function RemoveButton({ itemId, onRemove }: RemoveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const removeRed = 'src/assets/removeBtnRed.svg';
  const removeGray = 'src/assets/removeBtn.svg';
  return (
    <button
      className="cartRemoveBtn"
      id={ itemId }
      data-testid="remove-product"
      onMouseEnter={ () => setIsHovered(true) }
      onMouseLeave={ () => setIsHovered(false) }
      onClick={ (event) => {
        onRemove(event);
        setIsHovered(false); // Certifique-se de redefinir o estado quando o botão for clicado
      } }
    >
      <img
        className="cartRemoveSVG"
        src={ isHovered ? removeGray : removeRed }
        alt="Remove Icon"
      />
    </button>
  );
}

export default RemoveButton;
