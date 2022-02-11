// SPDX-License-Identifier: MIT

pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";



contract licasoft is ERC1155 {
    
    uint256 public constant Licasoft1 = 1;
    uint256 public constant Licasoft2 = 2;
  
// nombre de la Coleccion
    string public name = "My Collection Licasoft";
    string public symbol = "LICA";

    constructor() ERC1155("https://utilizame.com/opensea/data/{id}.json") {
        _mint(msg.sender, Licasoft1 , 2000 , "lica1");
        _mint(msg.sender, Licasoft2 , 2000 , "lica2");

    }
}
