// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract licasoft is ERC1155 {
    constructor() ERC1155("https://github.com/licasoft/erc1155-data/{id}.json") {
        _mint(msg.sender, 1 /* Id licasoft 1 */, 1000 /* Cantidad */, "");
        _mint(msg.sender, 2 /* Id licasoft 2 */, 1000 /* Cantidad */, "");
    }
}
