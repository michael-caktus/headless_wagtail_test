import BlockRouter from "../components/Blocks/BlockRouter";

// import React from 'react';

const useBlocks = content => {
  const renderBlocks = props => {
    const blocks = []
    for (const blockType in content) {
      if (content.hasOwnProperty(blockType)) {
        const blockValue = content[blockType];
        const blockRouter = new BlockRouter(blockType);
        blocks.push(blockRouter.getComponent(blockValue))
      }
    }
    return blocks
  }


  return [renderBlocks, {}];
}

export default useBlocks;
